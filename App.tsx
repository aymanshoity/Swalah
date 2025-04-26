/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import './global.css';
import React from 'react';
import {

  Text,
  View,
} from 'react-native';
import { swalah } from './src/store/store';
import IntroduceSwalah from './src/screens/introductory_pages/IntroduceSwalah';
import Home from './src/screens/Home/Home';




function App(): React.JSX.Element {

  const isUser = swalah((state) => state.user.is_authenticated);

 

  return (
    <>
    {!isUser ? <IntroduceSwalah/>  : <Home/>}
    </>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
