import React, { useState } from 'react'
import { authStyles, zincText } from '../globals'
import {
	View,
	Text,
	Pressable,
	TextInput,
	Keyboard,
	TouchableWithoutFeedback,
} from 'react-native'

const LoginPage = ({ setPage }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const login = () => {
		console.log('logging in')
	}
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={authStyles.authPageContainer}>
				<Text style={authStyles.titleText}>Login</Text>
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
						value={password}
						secureTextEntry={true}
						style={authStyles.textInput}
						placeholderTextColor={zincText}
					/>
					<View style={authStyles.swapAuthButtonView}>
						<Pressable onPress={() => setPage('sign-up')}>
							<Text style={authStyles.swapAuthText}>
								I don't have an account
							</Text>
						</Pressable>
					</View>
					<View style={authStyles.authButtonView}>
						<Pressable onPress={login} style={authStyles.authButton}>
							<Text style={authStyles.authText}>Log in</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default LoginPage
