import { StyleSheet } from 'react-native'

export const zincText = '#d4d4d8'
export const zincDark = '#27272a'
export const zingBackground = '#52525b'

export const appStyles = StyleSheet.create({
	appContainer: {
		flex: 1,
		backgroundColor: zingBackground,
	},
})

export const landingStyles = StyleSheet.create({
	landingPageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	landingPageTitle: {
		color: zincText,
		fontSize: 40,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 20,
	},
	landingPageButton: {
		borderRadius: 40,
		width: '50%',
		padding: 13,
		marginHorizontal: 10,
		backgroundColor: zincDark,
	},
	landingPageButtonText: {
		color: zincText,
		fontSize: 20,
		fontWeight: '400',
		textAlign: 'center',
	},
	landingPageOptionsButton: {
		borderRadius: 40,
		padding: 10,
		marginHorizontal: 7,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		width: '35%',
		backgroundColor: zincDark,
	},
	landingPageOptionsButtonText: {
		color: zincText,
		fontSize: 20,
		fontWeight: '400',
	},
})

export const authStyles = StyleSheet.create({
	authPageContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	titleText: {
		color: zincText,
		fontSize: 40,
		fontWeight: '600',
		textAlign: 'center',
		marginBottom: 20,
	},
	textInput: {
		backgroundColor: zincDark,
		fontSize: 16,
		color: zincText,
		padding: 10,
		margin: 5,
		borderRadius: 10,
	},
	authContainer: {
		width: '80%',
	},
	authButtonView: {
		marginTop: 25,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	swapAuthButtonView: {
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'center',
	},
	authButton: {
		borderRadius: 40,
		padding: 10,
		marginHorizontal: 10,
		backgroundColor: zincDark,
		width: '35%',
	},
	authText: {
		color: zincText,
		fontSize: 18,
		fontWeight: '400',
		textAlign: 'center',
	},
	swapAuthText: {
		fontSize: 16,
		fontWeight: '400',
	},
})
