import { useState, useEffect } from 'react';
import {View} from 'react-native';
import Estilos from './componets/estilo'
import imageOff from './componets/imageOff';
import imageOn from './componets/imageOn';
import { ref, onValue } from "firebase/database";
import {db} from './componets/config';

export default function App() {

  const [toggle, setToggle] = useState()
  console.log(toggle)

  useEffect(()=>{
    const starCountRef = ref(db, 'lampada/');

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setToggle(data.lampada)
    });
  })
    
 function exibir(){
    if(toggle == "on"){
      return(imageOn())
    }else{
      return(imageOff())
    } 
  }

  return (
    <View style={Estilos.container}>
      {exibir()}
    </View>
  );
}