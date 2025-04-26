/* eslint-disable semi */
import { View, Text ,TouchableOpacity,Button,TextInput} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Login = () => {
   const navigation=useNavigation()
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
 
   const handleLogin = () => {
     // Your login logic
   };
 
   const handleGoogleLogin = () => {
     // Your Google login logic
   };
  return (
   <View className="flex-1 justify-center px-6 bg-white">
   <Text className="text-2xl font-bold mb-6 text-center">Login</Text>

   <TextInput
     placeholder="Email"
     value={email}
     onChangeText={setEmail}
     className="border border-gray-300 rounded-lg p-3 mb-4"
     keyboardType="email-address"
   />
   <TextInput
     placeholder="Password"
     value={password}
     onChangeText={setPassword}
     className="border border-gray-300 rounded-lg p-3 mb-4"
     secureTextEntry
   />

   <Button title="Login" onPress={handleLogin} />

   <View className="my-4" />

   <TouchableOpacity
     onPress={handleGoogleLogin}
     className="bg-red-500 p-3 rounded-lg"
   >
     <Text className="text-white text-center font-medium">Continue with Google</Text>
   </TouchableOpacity>

   <View className="mt-6">
     <Text className="text-center">
       Don't have an account?
       <Text className="text-blue-500" onPress={() => navigation.navigate('Signup')}> Sign Up</Text>
     </Text>
   </View>
 </View>
  )
}

export default Login;