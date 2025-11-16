import { View, Text, StyleSheet } from 'react-native';

export default  function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
})
