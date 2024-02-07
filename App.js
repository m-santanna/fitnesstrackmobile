import { StatusBar } from 'expo-status-bar'
import { Pressable, Text, SafeAreaView, StyleSheet } from 'react-native'
import LandingPage from './sections/LandingPage'
import { useState } from 'react'

export default function App() {
  const [page, setPage] = useState('landing')
  return (
    <SafeAreaView style={styles.container}>
      {page === 'landing' && <LandingPage setPage={setPage} />}
      {page === 'dashboard' && <LandingPage setPage={setPage} />}
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    color: 'white',
  },
})
