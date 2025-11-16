import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default  function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text>Message Screen</Text>
      <Link href={'/bio'}>Bio</Link>
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
