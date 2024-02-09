import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet } from 'react-native'
import LandingPage from './sections/LandingPage'
import LoginPage from './sections/LoginPage'
import SignUpPage from './sections/SignUpPage'

export default function App() {
	const [page, setPage] = useState('landing')
	return (
		<SafeAreaView style={styles.container}>
			{page === 'landing' && <LandingPage setPage={setPage} />}
			{page === 'dashboard' && <LandingPage setPage={setPage} />}
			{page === 'login' && <LoginPage setPage={setPage} />}
			{page === 'sign-up' && <SignUpPage setPage={setPage} />}
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		color: 'white',
	},
})
