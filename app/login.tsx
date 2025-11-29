import { PRIMARY_COLOR } from "@/utils/constants";
import { useMutation } from '@tanstack/react-query';
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthService } from '@/services/auth.service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export interface LoginDto {
  email: string;
  password: string;
}

export default function LoginScreen() {

  const {mutateAsync: loginMutate, isPending, isError, error} = useMutation({
    mutationKey: ['login_mt'],
    mutationFn: AuthService.login
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset: resetForm,
  } = useForm<LoginDto>({
    defaultValues: {
      email: "m1@yopmail.com",
      password: "123123",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    const response = await loginMutate(data);
    const {atk, rtk} = response;
    console.log({atk, rtk})
    await AsyncStorage.setItem("accessToken", atk);
    await AsyncStorage.setItem("refreshToken", rtk);

    router.push('/');
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginVertical: 4 }}>
          Login
        </Text>
        <View style={styles.formField}>
          <Text style={styles.fieldLabel}>Email</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={"Email"}
                style={styles.textInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name={"email"}
          />
          {errors.email && (
            <Text style={{ color: "red" }}>This is required.</Text>
          )}
        </View>

        <View style={styles.formField}>
          <Text style={styles.fieldLabel}>Password</Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder={"Password"}
                style={styles.textInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name={"password"}
          />
          {errors.password && (
            <Text style={{ color: "red" }}>This field is required.</Text>
          )}
        </View>

        <View
          style={{
            marginTop: 16,
            backgroundColor: PRIMARY_COLOR,
            borderRadius: 8,
            width: 320,
            marginHorizontal: "auto",
          }}
        >
          <Button title="Login" onPress={onSubmit} color={"white"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    minHeight: "100%",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "100%",
  },
  formField: {
    width: "80%",
  },
  fieldLabel: {
    marginTop: 12,
    marginBottom: 4,
  },
  textInput: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: "#bebbbb",
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  textAreaInput: {
    height: 80,
    padding: 8,
    borderWidth: 1,
    borderColor: "#bebbbb",
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
});
