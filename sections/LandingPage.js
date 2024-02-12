import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { zincText, landingStyles } from '../globals'
import { FontAwesome5 } from '@expo/vector-icons'

const LandingPage = ({ setPage }) => {
	const [currState, setCurrState] = useState('initial')
	return (
		<View style={landingStyles.landingPageContainer}>
			{currState === 'initial' && (
				<>
					<Text style={landingStyles.landingPageTitle}>
						Welcome to FitnessTrack!
					</Text>
					<Pressable
						style={landingStyles.landingPageButton}
						onPress={() => setCurrState('show-options')}
					>
						<Text style={landingStyles.landingPageButtonText}>
							Let's get started
						</Text>
					</Pressable>
				</>
			)}
			{currState === 'show-options' && (
				<>
					<Text style={landingStyles.landingPageTitle}>
						An account. Do you have one?
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<Pressable
							style={landingStyles.landingPageOptionsButton}
							onPress={() => setPage('login')}
						>
							<Text style={landingStyles.landingPageOptionsButtonText}>
								Yes!!!
							</Text>
							<FontAwesome5 name="smile-wink" size={30} color={zincText} />
						</Pressable>
						<Pressable
							style={landingStyles.landingPageOptionsButton}
							onPress={() => setPage('sign-up')}
						>
							<Text style={landingStyles.landingPageOptionsButtonText}>
								Nop..
							</Text>
							<FontAwesome5 name="sad-tear" size={30} color={zincText} />
						</Pressable>
					</View>
				</>
			)}
		</View>
	)
}

export default LandingPage
