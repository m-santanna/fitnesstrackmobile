import { View, Text, Pressable } from 'react-native'
import styles from '../globals'

const LandingPage = ({ setPage }) => {
	return (
		<View>
			<Text>Dashboard!</Text>
			<Pressable onPress={() => setPage('main')}>
				<Text>Main</Text>
			</Pressable>
		</View>
	)
}

export default LandingPage
