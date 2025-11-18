import { View, Text, StyleSheet, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { PRIMARY_COLOR } from '@/utils/constants';

type FormData = {
  firstName: string;
  lastName: string;
  bio: string;
}

export default function ProfileScreen() {
  const {
    control, handleSubmit,
    formState: {errors},
    reset: resetForm
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });

  const onSubmit = handleSubmit((data) => console.log(data))

  useEffect(() => {
    return () => {
      console.log('reset form')
      resetForm()
    }
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{fontWeight: 'bold', fontSize: 20, marginVertical: 4}}>Your profile</Text>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>First name</Text>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder={'First name'}
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name={'firstName'}/>
            {errors.firstName && <Text style={{color: 'red'}}>This is required.</Text>}
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Last name</Text>
            <Controller
              control={control}
              rules={{
                required: true
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder={'Last name'}
                  style={styles.textInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name={'lastName'}/>
            {errors.lastName && <Text style={{color: 'red'}}>This field is required.</Text>}
          </View>
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Biography</Text>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  placeholder={'Biography'}
                  style={styles.textAreaInput}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  multiline={true}
                />
              )}
              name={'bio'}/>
            {errors.bio && <Text style={{color: 'red'}}>This field is required.</Text>}
          </View>
          <View style={{
            marginTop: 16,
            backgroundColor: PRIMARY_COLOR,
            borderRadius: 8,
            width: 320,
            marginHorizontal: 'auto'
          }}>
            <Button title="Update profile"
                    onPress={onSubmit}
                    color={'white'}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 16,
    minHeight: '100%',

  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    width: '100%'
  },
  formField: {
    width: '80%',
  },
  fieldLabel: {
    marginTop: 12,
    marginBottom: 4,
  },
  textInput: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#bebbbb',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  textAreaInput: {
    height: 80,
    padding: 8,
    borderWidth: 1,
    borderColor: '#bebbbb',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  }
})

