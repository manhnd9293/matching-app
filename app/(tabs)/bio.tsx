import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { PRIMARY_COLOR } from '@/utils/constants';

type FormData = {
  firstName: string
  lastName: string
}

export default function BioScreen() {
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
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.formField}>
          <Text style={styles.fieldLabel}>First Name</Text>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder={'First Name'}
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
          <Text style={styles.fieldLabel}>Last Name</Text>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                placeholder={'Last Name'}
                style={styles.textInput}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name={'lastName'}/>
          {errors.lastName && <Text style={{color: 'red'}}>This field is required.</Text>}
        </View>

        <View style={{
          marginTop: 16,
          backgroundColor: PRIMARY_COLOR,
          borderRadius: 8,
        }}>
          <Button title="Update"
                  onPress={handleSubmit(onSubmit)}
                  color={'white'}
          />
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  card: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    width: '100%'
  },
  formField: {
    width: '80%',
  },
  fieldLabel: {
    marginTop: 8,
    marginBottom: 4,
  },
  textInput: {
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#bebbbb',
    backgroundColor: '#ffffff',
    borderRadius: 8,
  }
})

