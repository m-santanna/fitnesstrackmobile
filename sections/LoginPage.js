import React from 'react'

const LoginPage = ({ setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const login = () => {
		console.log('logging in')
	}
	return (
		<View>
			<Text style={styles.text}>Log in</Text>
			<View>
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
				<Pressable style={styles.button} onPress={() => login()}>
					<Text style={styles.buttonText}>Log in</Text>
				</Pressable>
			</View>
			<Text>Don't have an account?</Text>
			<Pressable onPress={() => setCurrState('signing-up')}>
				<Text>Sign up</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => setPage('sign-up')}>
				<Text style={styles.buttonText}>Wait, I don't have an account</Text>
			</Pressable>
		</View>
	)
}

export default LoginPage
