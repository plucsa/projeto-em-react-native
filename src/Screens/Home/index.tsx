import React from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { Participant } from "../../Components/Participant/Index";

import { styles } from "./styles";

export default function Home(){

  function handleParticipantAdd(){
    console.log('Você clicou no botão de adicionar');
  }


  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
        nome do evento
      </Text>


      <Text style={styles.eventDate}>
        sexta, 4 de novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor='#6B6B6B'
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


      <Participant />
      <Participant />
    </View>
  )
}