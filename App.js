import * as React from 'react';

import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather} from '@expo/vector-icons'





 /////////////////////////////////////// TELA HOME //////////////////////////////////////////////
 function HomeScreen(){
   return(
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
  <TouchableOpacity>
  <View style={navbar.rectangle4}>
    <Text style={navbar.novidadesText}>Novidade</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={navbar.rectangle5}>
  <Text style={navbar.allText}>All</Text>
  </View>
  </TouchableOpacity>
  <TouchableOpacity>
  <View style={navbar.rectangle6}>
    <Text style={navbar.altaText}>Alta</Text>
  </View>
  </TouchableOpacity>

</View>
<View>
  <TouchableOpacity>
  <Image
    source={require('./img/streetman.png')} // Substitua o caminho pela localização correta da imagem
    style={img.imageStreet}
  />
  <Text style={img.streetText}>Street Masculino</Text>
  </TouchableOpacity>

</View>
<View>
  <TouchableOpacity>
  <Image
    source={require('./img/streetwom.png')} // Substitua o caminho pela localização correta da imagem
    style={img.imageStreetW}
  />
  <Text style={img.streetTextW}>Street Feminino</Text>
  </TouchableOpacity>

</View>
<View>
  <TouchableOpacity>
  <Image
    source={require('./img/casualman.png')} // Substitua o caminho pela localização correta da imagem
    style={img.imageCasualM}
  />
  <Text style={img.casualMasculinoText}>Casual Masculino</Text>
  </TouchableOpacity>

</View>
<View>
  <TouchableOpacity>
  <Image
    source={require('./img/casualwom.png')} // Substitua o caminho pela localização correta da imagem
    style={img.imageCasualW}
  />
  <Text style={img.casualTextW}>Casual Feminino</Text>
  </TouchableOpacity>

</View>
  
 
</View>
   )
  
 }


 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  titulo:{
    position: 'absolute',
    width: 163,
    height: 41,
    left: 108.13,
    top: 62,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
    transform: [{ rotate: '0.18deg' }],

  },
  subtitulo:{
    position: 'absolute',
    width: 232,
    height: 28,
    left: 72,
    top: 117,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: -0.333333,

    color: '#000000',
  },
  barraPesquisa:{
    position: 'absolute',
    width: 315,
    height: 40,
    left: 30,
    top: 161,
    backgroundColor: '#000000',
    borderRadius: 20,
    color: '#fff'
  },
  nav:{
    backgroundColor: "#000"
  }
  
  

    
  
  
});


const navbar = StyleSheet.create({
  rectangle4: {
    position: 'absolute',
    width: 131,
    height: 31,
    left: 29,
    top: 217,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  rectangle6: {
    position: 'absolute',
    width: 84,
    height: 31,
    left: 260,
    top: 217,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  altaText: {
   textAlign: 'center',
   fontSize: 20
   
  },
  rectangle5: {
    position: 'absolute',
    width: 64,
    height: 31,
    left: 178,
    top: 217,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  allText: {
    textAlign: 'center',
    fontSize: 20
  },
  novidadesText: {
    textAlign: 'center',
    fontSize: 20
  },

})


const img = StyleSheet.create({
  imageStreet:{
    position: 'absolute',
    width: 152,
    height: 211,
    left: 25,
    top: 269,
    borderRadius: 5,
    overflow: 'hidden'
  },
  streetText:{
    position: 'absolute',
    width: 114,
    height: 21,
    left: 41,
    top: 480,
    fontFamily: 'Rosarivo',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  imageStreetW:{
    position: 'absolute',
    width: 152,
    height: 211,
    left: 197,
    top: 269,
    borderRadius: 5,
    overflow: 'hidden',
  },
  streetTextW:{
    position: 'absolute',
    width: 110,
    height: 21,
    left: 215,
    top: 480,
    fontFamily: 'Rosarivo',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000'
  },
  imageCasualM:{
    position: 'absolute',
    width: 152,
    height: 211,
    left: 25,
    top: 509,
    borderRadius: 5,
    overflow: 'hidden',
  },
  casualMasculinoText: {
    position: 'absolute',
    width: 119,
    height: 21,
    left: 37,
    top: 720,
    fontFamily: 'Rosarivo',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  imageCasualW:{
    position: 'absolute',
    width: 152,
    height: 211,
    left: 199,
    top: 509,
    borderRadius: 5,
    overflow: 'hidden',
  },
  casualTextW:{
    position: 'absolute',
    width: 115,
    height: 21,
    left: 213,
    top: 720,
    fontFamily: 'Rosarivo',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  }
  


})

 /////////////////////////////////////// TELA LOGIN //////////////////////////////////////////////







function LoginScreen(){
  const navigation = useNavigation();



  return(
    <View style={login.body}>
    <Text style= {styles.titulo}>
    Dowtown
  </Text>
    <Text style={login.loginText}>
      LOGIN
    </Text>
    <TextInput style={login.labelEmail}>
      <Text>Digite seu email</Text>
    </TextInput>
    <TextInput style={login.labelSenha}>
      <Text>Digite sua Senha</Text>
    </TextInput>
    <TouchableOpacity>
    <Text style={login.esquecerSenha}>
      Esqueceu sua senha?
    </Text>
    </TouchableOpacity>
    
    <TouchableOpacity style={login.butto}>
      <Text style={login.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('CreateAccontScreen')}>
    <Text style={login.criarConta}>
      Criar Conta
    </Text>
    </TouchableOpacity>
   
    </View>
    
   
  )
}

const login = StyleSheet.create({
  body:{
    backgroundColor: "#FFF"
  },
  loginText:{
    position: 'absolute',
    width: 268,
    height: 42,
    left: 55.1,
    top: 163.17,
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
    transform: [{ rotate: '0.18deg' }],
  },
  labelEmail:{
    position: 'absolute',
    width: 343,
    height: 52,
    left: 17.86,
    top: 237.05,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2, // Adicionando uma borda com largura de 1
    borderColor: '#000000', // Cor da borda
  },
  labelSenha:{
    position: 'absolute',
    width: 343,
    height: 52,
    left: 19,
    top: 330.06,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2, // Adicionando uma borda com largura de 1
    borderColor: '#000000', // Cor da borda
  },
  esquecerSenha:{
    position: 'absolute',
    width: 272,
    height: 35,
    left: -49.63,
    top: 390.82,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
    transform: [{ rotate: '0.18deg' }],
  },
  butto:{
    position: 'absolute',
    width: 196,
    height: 50,
    left: 93.47,
    top: 457.6,
    transform: [{ rotate: '0.18deg' }],
    backgroundColor: '#000', // Cor de fundo do botão (azul neste exemplo)
    borderRadius: 10, // Bordas arredondadas
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  buttonText:{
    color: '#ffffff', // Cor do texto (branco neste exemplo)
    fontWeight: 'bold', // Texto em negrito
    fontSize: 18, // Tamanho da fonte
  },
  criarConta:{
    position: 'absolute',
    width: 80,
    height: 20,
    left: 151.27,
    top: 521.79,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
    transform: [{ rotate: '0.18deg' }],
  }
})

/////////////////////////////////////// TELA CRIAR CONTA //////////////////////////////////////////////


function CreateAccontScreen(){
  return(
    <View>
      <Text>Dowtown</Text>
    </View>
  )
}


function BagScreen(){
  return(
    <View>
      <Text>CARRINHO</Text>
    </View>
  )
}

function ListaScreen(){
  return(
    <View>
      <Text>CARRINHO</Text>
    </View>
  )
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false,
                                      tabBarStyle:{
                                        backgroundColor:"#D2CCCC"
                                      }}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color,size,focused}) =>  {
              if(focused){
                return <Feather name='home' color={'#BD192B'} size={size} />
                
                
              }
              return   <Feather name='home' color={color} size={size} />
            },
            tabBarLabel: ""
            
          }}                      
        />
        <Tab.Screen
          name="Lista"
          component={ListaScreen}
          options={{
            tabBarIcon: ({color,size,focused}) =>  {
              if(focused){
                return <Feather name='align-justify' color={'#BD192B'} size={size} />
                
                
              }
              return   <Feather name='align-justify' color={color} size={size} />
            },
            tabBarLabel: ""
            
          }}                      
        />
        <Tab.Screen
          name="Carrinho"
          component={BagScreen}
          options={{
            tabBarIcon: ({color,size,focused}) =>  {
              if(focused){
                return <Feather name='shopping-bag' color={'#BD192B'} size={size} />
                
                
              }
              return   <Feather name='shopping-bag' color={color} size={size} />
            },
            tabBarLabel: ""
            
          }}                      
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({color,size,focused}) =>  {
              if(focused){
                return <Feather name='user' color={'#BD192B'} size={size} />
                
                
              }
              return   <Feather name='user' color={color} size={size} />
            },
            tabBarLabel: ""
            
          }}                      
        />
      </Tab.Navigator>
    </NavigationContainer>
 
 
  );
}










