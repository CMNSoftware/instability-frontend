import React from 'react'
import { StyleSheet } from 'react-native';
import Router from './src/Router'

export default function App() {

  return (
    <Router style={styles.backgroundColor} />
  )
}

const styles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: "#1A1A1A",
    display: "flex",
    height: 200
  }
})