import React, { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { authStyles } from '../globals'

const LoginPage = ({ setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const login = () => {
		console.log('logging in')
	}
	return (
		<View>
			<Text style={authStyles.text}>Log in</Text>
			<View>
				<TextInput
					placeholder="Username"
					onChangeText={setUsername}
					value={username}
					style={authStyles.textInput}
				/>
				<TextInput
					placeholder="Password"
					onChangeText={setPassword}
					value={password}
					style={authStyles.textInput}
				/>
				<Pressable style={authStyles.button} onPress={() => login()}>
					<Text style={authStyles.buttonText}>Log in</Text>
				</Pressable>
			</View>
			<Text>Don't have an account?</Text>
			<Pressable onPress={() => setCurrState('signing-up')}>
				<Text>Sign up</Text>
			</Pressable>
			<Pressable style={authStyles.button} onPress={() => setPage('sign-up')}>
				<Text style={authStyles.buttonText}>Wait, I don't have an account</Text>
			</Pressable>
		</View>
	)
}

export default LoginPage
