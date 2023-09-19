import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: themeColors.bg }]}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.flexRow}>
          <Image
            source={require('../assets/images/login.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>SPECTRA</Text>
          <Text style={styles.slogan}>OXYGEN LIMITED</Text>
          <Text style={styles.slogan1}>way ahead service & solution</Text>
        </View>
      </SafeAreaView>

      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}> Email Address </Text>
          <TextInput
            style={styles.input}
            placeholder="email"
            value="john@gmail.com"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="password"
            value="test12345"
          />
          
          <TouchableOpacity style={styles.loginButton}  onPress={()=> navigation.navigate('Home')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  iconContainer: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  companyInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  companyName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black', 
  },
  slogan: {
    fontSize: 15,
    color: 'white', 
  },
  slogan1: {
    fontSize: 10,
    color: 'white', 
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingTop: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: -100,
  },
  form: {
    marginTop: 20,
  },
  label: {
    color: 'gray',
    marginLeft: 20,
  },
  input: {
    backgroundColor: '#E5E5E5',
    color: 'gray',
    padding: 20,
    borderRadius: 20,
    marginBottom: 10,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  forgotPasswordText: {
    color: 'gray',
  },
  loginButton: {
    backgroundColor: 'yellow',
    borderRadius: 20,
    paddingVertical: 15,
    marginTop:20
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },
});
