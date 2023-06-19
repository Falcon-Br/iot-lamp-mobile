import {Image, TouchableHighlight, View} from 'react-native'
import Estilos from './estilo'
import {db} from './config'
import { ref, update} from "firebase/database";

export default function imageOff(){

    function updateData(){    
        update(ref(db, 'lampada/'), {
          lampada: 'on'
        })
      }

    return(
        <View>
            <TouchableHighlight onPress={updateData}>
                <Image source ={require('./assets/off.jpg')} style={Estilos.toggle}/>
            </TouchableHighlight>
        </View>
    )
}