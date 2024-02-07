import { View, Text, Pressable } from 'react-native'

const LandingPage = ({ setPage }) => {
  return (
    <View>
      <Text>Welcome to FitnessTrack!</Text>
      <Pressable onPress={() => setPage('dashboard')}>
        <Text>Go to Vapo</Text>
      </Pressable>
    </View>
  )
}

export default LandingPage
