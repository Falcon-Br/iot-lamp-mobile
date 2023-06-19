import {Image, TouchableHighlight, View} from 'react-native'
import Estilos from './estilo'
import {db} from './config'
import { ref, update} from "firebase/database";

export default function imageOn(){

    function updateData(){    
        update(ref(db, 'lampada/'), {
          lampada: 'off'
        })
      }

    return(
        <View>
            <TouchableHighlight onPress={updateData}>
                <Image source ={require('./assets/on.jpg')} style={Estilos.toggle}/>
            </TouchableHighlight>
        </View>
    )
}