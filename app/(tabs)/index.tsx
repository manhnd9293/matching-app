import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { AuthService } from '@/services/auth.service';

export default function Index() {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['me'],
    queryFn: AuthService.me,
    retry: 0,
  });

  console.log({data})

  if (isError) {
    console.log({error})
  }

  return (
    <View style={styles.container}>
      <Text>Hello world from Manh Nguyen</Text>
      <Link href={'/message'}>Message</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
