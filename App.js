import React from 'react'
import MainStack from './src/Navigator/MainStack.js'
import { SafeAreaView } from 'react-native';
import Teacher from './src/screen/Teacher.jsx'
import SupporRequest from './src/screen/SupportRequest.jsx';
import SupportClassrooms from './src/screen/SupportClassrooms.jsx';

export default function App() {
  return <MainStack/>
 // return <Teacher/>
  //return <SupporRequest/>
  //return<SupportClassrooms/>
}