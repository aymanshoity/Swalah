import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const SignUp = () => {
   const navigation = useNavigation();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSignup = () => {
     // Your signup logic
   };

   const handleGoogleSignup = () => {
     // Your Google signup logic
   };
  return (
   <View className="flex-1 justify-center px-6 bg-white">
   <Text className="text-2xl font-bold mb-6 text-center">Sign Up</Text>

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

   <Button title="Sign Up" onPress={handleSignup} />

   <View className="my-4" />

   <TouchableOpacity
     onPress={handleGoogleSignup}
     className="bg-red-500 p-3 rounded-lg"
   >
     <Text className="text-white text-center font-medium">Continue with Google</Text>
   </TouchableOpacity>

   <View className="mt-6">
     <Text className="text-center">
       Already have an account?
       <Text className="text-blue-500" onPress={() => navigation.navigate('Login')}> Login</Text>
     </Text>
   </View>
 </View>
  );
};

export default SignUp;
