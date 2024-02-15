import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import LandingPage from './sections/LandingPage'
import LoginPage from './sections/LoginPage'
import SignUpPage from './sections/SignUpPage'
import DashboardPage from './sections/DashboardPage'
import { appStyles } from './globals'

export default function App() {
	const [page, setPage] = useState('dashboard')
	return (
		<SafeAreaView style={appStyles.appContainer}>
			{page === 'landing' && <LandingPage setPage={setPage} />}
			{page === 'login' && <LoginPage setPage={setPage} />}
			{page === 'sign-up' && <SignUpPage setPage={setPage} />}
			{page === 'dashboard' && <DashboardPage setPage={setPage} />}
			<StatusBar style="auto" />
		</SafeAreaView>
	)
}
