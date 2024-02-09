import React from 'react'
import { TextInput } from 'react-native'

const SignUpPage = ({ setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const signUp = () => {
		console.log('signing up')
	}
	return (
		<View>
			<Text>Sign up</Text>
			<TextInput
				placeholder="Username"
				onChangeText={setUsername}
				value={username}
				style={styles.textInput}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={setPassword}
				value={password}
				style={styles.textInput}
			/>
			<TextInput
				placeholder="Confirm Password"
				onChangeText={setConfirmPassword}
				value={confirmPassword}
				style={styles.textInput}
			/>
			<Pressable style={styles.button} onPress={signUp}>
				<Text style={styles.buttonText}>Sign up</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => setPage('login')}>
				<Text style={styles.buttonText}>Wait, I have an account</Text>
			</Pressable>
		</View>
	)
}

export default SignUpPage
