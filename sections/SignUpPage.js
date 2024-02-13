import React, { useState } from 'react'
import { View, Text, Pressable, TextInput } from 'react-native'
import { authStyles } from '../globals'

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
				style={authStyles.textInput}
			/>
			<TextInput
				placeholder="Password"
				onChangeText={setPassword}
				value={password}
				style={authStyles.textInput}
			/>
			<TextInput
				placeholder="Confirm Password"
				onChangeText={setConfirmPassword}
				value={confirmPassword}
				style={authStyles.textInput}
			/>
			<Pressable style={authStyles.button} onPress={signUp}>
				<Text style={authStyles.buttonText}>Sign up</Text>
			</Pressable>
			<Pressable style={authStyles.button} onPress={() => setPage('login')}>
				<Text style={authStyles.buttonText}>Wait, I have an account</Text>
			</Pressable>
			<Pressable style={authStyles.button} onPress={() => setPage('landing')}>
				<Text style={authStyles.buttonText}>Go to menu!</Text>
			</Pressable>
		</View>
	)
}

export default SignUpPage
