import React from 'react';
import { 
  View, 
  Text, 
  Image,
  StatusBar,
} from 'react-native';


import { ButtonIcon } from '../../components/ButtonIcon';
import Illustration from '../../assets/illustration.png';
import { styles } from './styles';

export default function SingIn() {

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
        source={Illustration} 
        style={styles.image}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'} 
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon/>
      </View>
    </View>
  );
}