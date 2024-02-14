import React, { useState } from 'react'
import { authStyles, zincText } from '../globals'
import {
	View,
	Text,
	Pressable,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from 'react-native'

const SignUpPage = ({ setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const signUp = () => {
		console.log('signing up')
	}
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={authStyles.authPageContainer}>
				<Text style={authStyles.titleText}>Sign up</Text>
				<View style={authStyles.authContainer}>
					<TextInput
						placeholder="Username"
						onChangeText={setUsername}
						value={username}
						style={authStyles.textInput}
						placeholderTextColor={zincText}
					/>
					<TextInput
						placeholder="Password"
						onChangeText={setPassword}
						secureTextEntry={true}
						value={password}
						style={authStyles.textInput}
						placeholderTextColor={zincText}
					/>
					<TextInput
						placeholder="Confirm Password"
						onChangeText={setConfirmPassword}
						secureTextEntry={true}
						value={confirmPassword}
						style={authStyles.textInput}
						placeholderTextColor={zincText}
					/>
					<View style={authStyles.swapAuthButtonView}>
						<Pressable onPress={() => setPage('login')}>
							<Text style={authStyles.swapAuthText}>I have an account</Text>
						</Pressable>
					</View>
					<View style={authStyles.authButtonView}>
						<Pressable style={authStyles.authButton} onPress={signUp}>
							<Text style={authStyles.authText}>Sign up</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default SignUpPage
