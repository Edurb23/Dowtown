import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style= {styles.titulo}>
        Dowtown
      </Text>
      <Text style={styles.subtitulo}>
        Faça seu estilo
      </Text>
      <TextInput style={styles.barraPesquisa}  placeholder={'pesquisar'}  placeholderTextColor={'white'}>
        </TextInput>
    <View>
      <View style={navbar.rectangle4}>
        <Text style={navbar.novidade}>Novidade</Text>
      </View>
      <View>
        <Text>All</Text>
      </View>
      <View>
        <Text>Alta</Text>
      </View>
    </View>
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  titulo:{
    fontSize: 30,
    fontStyle: 'normal',
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    position: 'absolute',
    width: 163,
    height: 41,
    left: 110,
    top: 61

  },
  subtitulo:{
      fontStyle: 'normal',
      fontSize: 24,
      lineHeight: 28,
      textAlign: 'center',
      position: 'absolute',
      width: 232,
      height: 28,
      left: 76,
      top: 119
  },
  barraPesquisa:{
    borderRadius: 20,
    backgroundColor: 'black',
    color : 'white',
    position: 'absolute',
    width: 315,
    height: 40,
    left: 35,
    top: 164
  }
  
  

    
  
  
});


const navbar = StyleSheet.create({
  rectangle4:{
    position : 'absolute',
    width: 131,
    height: 31,
    left: 29,
    top: 217,
    backgroundColor: '#BCA3A3',
    borderRadius: 18
},
  novidade:{
    fontSize: 20,
    fontStyle: 'normal',
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#0000'

  }

})
