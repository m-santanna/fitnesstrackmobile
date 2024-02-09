import { View, Text, Pressable } from 'react-native'

const LandingPage = ({ setPage }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Welcome to FitnessTrack!</Text>
			<Text style={styles.buttonText}>Let's get started</Text>
			<Pressable style={styles.button} onPress={() => setPage('login')}>
				<Text style={styles.buttonText}>I have an account</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => setPage('sign-up')}>
				<Text style={styles.buttonText}>I don't have one</Text>
			</Pressable>
		</View>
	)
}

export default LandingPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		color: 'white',
	},
	text: {
		color: 'white',
		fontSize: 20,
	},
	button: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: 'black',
	},
})
