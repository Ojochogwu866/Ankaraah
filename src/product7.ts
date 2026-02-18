import FeedbackSDK from '@product7/feedback-sdk'

type SurveyType = 'nps' | 'csat' | 'ces' | 'custom'

interface MountableWidget {
	mount(container?: string | HTMLElement): void
	destroy(): void
}

interface SurveyWidget {
	show(): void
	destroy(): void
}

interface SurveyOptions {
	surveyType: SurveyType
	position: 'center' | 'bottom-right' | 'bottom-left' | 'bottom'
	title: string
	description: string
	onSubmit: () => void
	onDismiss: () => void
}

interface UserContext {
	user_id: string
	email: string
	name: string
	custom_fields?: Record<string, string>
}

interface Product7Sdk {
	init(): Promise<unknown>
	createWidget(
		type: 'button',
		options?: Record<string, unknown>
	): MountableWidget
	createWidget(
		type: 'changelog',
		options?: Record<string, unknown>
	): MountableWidget
	createWidget(type: 'survey', options: SurveyOptions): SurveyWidget
	destroy(): void
}

interface Product7IntegrationState {
	destroy: () => void
}

declare global {
	interface Window {
		__product7?: Product7IntegrationState
	}
}

const SURVEY_DISMISSED_KEY = 'product7-survey-shown'
const PRODUCT7_DUMMY_USER_KEY = 'product7-dummy-user-id'
const PRODUCT7_SUBDOMAIN = 'zed'

const getProduct7BaseUrls = () => {
	const isDev = import.meta.env.DEV
	const baseDomain = isDev ? 'staging.product7.io' : 'product7.io'
	const base = `https://${PRODUCT7_SUBDOMAIN}.${baseDomain}`

	return {
		feedbackUrl: `${base}/feedback`,
		changelogUrl: `${base}/changelog`,
		helpUrl: `${base}/help-docs`,
		roadmapUrl: `${base}/roadmap`,
	}
}

const buildDummyUserContext = (): UserContext => {
	let dummyUserId = 'guest_user'

	try {
		const existingId = window.localStorage.getItem(PRODUCT7_DUMMY_USER_KEY)
		if (existingId) {
			dummyUserId = existingId
		} else {
			const generatedId =
				typeof crypto !== 'undefined' && 'randomUUID' in crypto
					? crypto.randomUUID()
					: `${Date.now()}`
			dummyUserId = `guest_${generatedId}`
			window.localStorage.setItem(PRODUCT7_DUMMY_USER_KEY, dummyUserId)
		}
	} catch {
		/* empty */
	}

	return {
		user_id: dummyUserId,
		email: `${dummyUserId}@example.com`,
		name: 'Guest User',
		custom_fields: {
			segment: 'anonymous',
		},
	}
}

const markSurveyAsShown = (): void => {
	try {
		window.sessionStorage.setItem(SURVEY_DISMISSED_KEY, '1')
	} catch {
		/* empty */
	}
}

const shouldShowSurvey = (): boolean => {
	try {
		return window.sessionStorage.getItem(SURVEY_DISMISSED_KEY) !== '1'
	} catch {
		return true
	}
}

export const initProduct7 = async (): Promise<void> => {
	if (typeof window === 'undefined') {
		return
	}

	if (window.__product7) {
		return
	}

	const workspace = import.meta.env.VITE_PRODUCT7_WORKSPACE as
		| string
		| undefined
	const boardId = import.meta.env.VITE_PRODUCT7_BOARD_ID as string | undefined

	if (!workspace) {
		console.info(
			'Product7 SDK skipped: set VITE_PRODUCT7_WORKSPACE to enable feedback widgets.'
		)
		return
	}

	const urls = getProduct7BaseUrls()

	const sdk = FeedbackSDK.create({
		workspace,
		boardId: boardId || 'general',
		debug: false,
		userContext: buildDummyUserContext(),
	}) as unknown as Product7Sdk

	await sdk.init()

	const feedbackWidget = sdk.createWidget('button', {
		position: 'bottom-right',
		displayMode: 'panel',
		feedbackUrl: urls.feedbackUrl,
	})
	feedbackWidget.mount()

	const changelogWidget = sdk.createWidget('changelog', {
		position: 'bottom-left',
		triggerText: "What's New",
		showBadge: true,
		changelogUrl: urls.changelogUrl,
	})
	changelogWidget.mount()

	let surveyWidget: SurveyWidget | null = null
	if (shouldShowSurvey()) {
		surveyWidget = sdk.createWidget('survey', {
			surveyType: 'nps',
			position: 'center',
			title: 'How are we doing?',
			description: 'Your feedback helps us improve your shopping experience.',
			onSubmit: markSurveyAsShown,
			onDismiss: markSurveyAsShown,
		})
		surveyWidget.show()
	}

	window.__product7 = {
		destroy: () => {
			surveyWidget?.destroy()
			changelogWidget.destroy()
			feedbackWidget.destroy()
			sdk.destroy()
			window.__product7 = undefined
		},
	}
}

export const destroyProduct7 = (): void => {
	if (typeof window === 'undefined') {
		return
	}

	window.__product7?.destroy()
}
