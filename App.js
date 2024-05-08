import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { auth } from './src/firebase.config';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

;


/////////////////////////////////////// TELA HOME //////////////////////////////////////////////

function HomeScreen() {
  const navigation = useNavigation();

  const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dowtown</Text>
       <TouchableOpacity onPress={navigateToOtherScreen}> 
       <View style={{
            position: 'absolute',
            width: 42,
            height: 42,
            left: 319,
            top: 62,
            backgroundColor: '#D9D9D9',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center', // Half of width/height to make it a circle
       }}>
         <Feather name="user" size={20} color="#000" />
       
       </View>
       </TouchableOpacity>
      <Text style={styles.subtitulo}>Faça seu estilo</Text>
      <TextInput style={styles.barraPesquisa} placeholder={'pesquisar'} placeholderTextColor={'white'} />
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
        <TouchableOpacity onPress={navigateToOtherScreen}>
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
  );
}

/////////////////////////////////////// TELA LOGIN //////////////////////////////////////////////

function LoginScreen() {
  
  const [userEmail, setUserEmail]  = useState('');
  const [userPass, setUserPass]  = useState('');
  

  const navigation = useNavigation();

  function userLogin(){
   signInWithEmailAndPassword(auth, userEmail, userPass)
   .then((userCredential) => {
    const user = userCredential.user;
    alert('Login feito')
    navigation.navigate('Conta')
   })
   .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    alert(errorMessage)
   })
  }

 

  const handleOnClick = () => {
    navigation.navigate('CriarConta');
  }

  const ForgotPassword = () => {
    navigation.navigate('RecuperarSenha')
  }

  const Account = () => { 
    navigation.navigate('Conta')
  }


  return (
    <View style={login.body}>
      <Text style={styles.titulo}>Dowtown</Text>
      <Text style={login.loginText}>LOGIN</Text>
      <TextInput style={login.labelEmail} placeholder={'Digite seu email'}  keyboardType='email-address' autoCapitalize='none' autoComplete='email' value={userEmail} onChangeText={setUserEmail} />
      <TextInput style={login.labelSenha} placeholder={'Digite sua Senha'} autoCapitalize='none' secureTextEntry  value={userPass} onChangeText={setUserPass}/>
      <TouchableOpacity onPress={ForgotPassword}>
        <Text style={login.esquecerSenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={login.butto} onPress={userLogin}>
        <Text style={login.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleOnClick} >
        <Text style={login.criarConta}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

/////////////////////////////////////// TELA CRIAR CONTA //////////////////////////////////////////////

function CreateAccountScreen() {

  const navigation = useNavigation();

  const [userName, setUserName] = useState('')
  const [userNewEmail, setNewEmail] = useState('')
  const [userNewPass, setUserNewPass] = useState('')
  

  const ContaCriada = () => {
    if(userName === '' ||userNewEmail === '' || userNewPass === '' ){
        alert('TODOS OS CAMPOS DEVEM SER PREENCHIDOS');
        return
    } else{
        alert('Sua conta foi criada com sucesso' +  '' + userName);
        navigation.navigate('Home')
      
      
    }
    
  }
  
  
  return (
    <View style={styles.container}>
       <Text style={CreatAccont.titulo}>Dowtown</Text>
       <Text style={CreatAccont.cadastro}>Cadastro</Text>
     
       <TextInput style={CreatAccont.labelNome} placeholder={'Digite seu Nome Completo'}  value={userName} onChangeText={setUserName}/>
       
      <TextInput style={CreatAccont.labelEmail} placeholder={'Digite seu Email'} keyboardType='email-address' autoCapitalize='none' autoComplete='email'  value={userNewEmail} onChangeText={setNewEmail}/>
      
      <TextInput style={CreatAccont.labelSenha} placeholder={'Digite sua Senha'} autoCapitalize='none' secureTextEntry  value={userNewPass} onChange={setUserNewPass}/>
      <TouchableOpacity style={CreatAccont.button} onPress={ContaCriada}>
        <Text style={CreatAccont.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
}

/////////////////////////////////////// RECUPERAR SENHA  //////////////////////////////////////////////
function ForgotPasswordScreen() {

  const [userEmail, setUserEmail]  = useState('');


  const navigation = useNavigation();

  function RecuperarSenha() {
    if(userEmail != ''){
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          alert('Foi enviado um email para: ' + userEmail + " Verifique sua caixa de email")
          navigation.navigate('Login')
        })
        .catch((err) => {
          const errorMessage = err.message;
          alert("Ops! Alguama coisa nao deu certo" + errorMessage )
        })
    }else{
      alert('É preciso informa um email válido para efutar a reefinição de senha'
     
      );
      return;
    }
  }
  
  return (
    <View style={styles.container}>
    <Text style={styles.titulo}>Dowtown</Text>
    <Text style={CreatAccont.cadastro}>Recuperar Senha</Text>
    <Text style={Password.textEmail}> Digite seu email</Text>
    <TextInput style={Password.labelEmail} placeholder={'Digite seu Email'}  keyboardAppearance='email-address' autoCapitalize='none' autoComplete='email' value={userEmail} onChangeText={setUserEmail}/>
    <TouchableOpacity style={Password.button} onPress={RecuperarSenha}>
        <Text style={Password.buttonText}>Enviar</Text>
      </TouchableOpacity>
     
    </View>
  );
}
/////////////////////////////////////// TELA CONTA LOGADA //////////////////////////////////////////////


function Account(){


  
  const navigation = useNavigation();


  const AcessarDadaos = () => {
    navigation.navigate('DadoUser')
  }

  const SairConta = () => {
    navigation.navigate('Home')
    alert('VOCE SAIU DA SUA CONTA!')
  }

 

  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Dowtown</Text>
      <View style={account.foto}>
        <Image
        source={require('./img/karina.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        />
      </View>
      <TouchableOpacity onPress={AcessarDadaos}>
        <View style={account.labeldado}></View>
        <View style={account.dados}>
        <Text style={account.dadosTexto} >SEUS DADOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={account.labelpedido}></View>
        <View style={account.seusPedidos}>
        <Text style={account.pedidosText}> SEUS PEDIDOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={account.labellista}></View>
        <View style={account.lista}>
        <Text style={account.listaText}> LISTA DE DESEJOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={SairConta}>
       
        <View style={account.sair}>
          <Text style={account}>SAIR DA CONTA</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

/////////////////////////////////////// TELA CONTA LOGADA SEUS DADOS //////////////////////////////////////////////

function DadosPessoais(){ 
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Dowtown</Text>
      <View style={account.foto}>
        <Image
        source={require('./img/karina.png')}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
        />
      </View>
      <TouchableOpacity>
        <View style={account.labeldado}></View>
        <View style={account.dados}>
        <Text style={account.dadosTexto} >KARINA </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={account.labelpedido}></View>
        <View style={account.seusPedidos}>
        <Text style={account.pedidosText}> katarinabluu@gmail.com</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={account.labellista}></View>
        <View style={account.lista}>
        <Text style={account.listaText}> SÃO PAULO , SP</Text>
        </View>
      </TouchableOpacity>
     
    </View>

    )
  
  
}


/////////////////////////////////////// TELA CONTA LOGADA SEUS PEDIDOS //////////////////////////////////////////////

/////////////////////////////////////// TELA CONTA LOGADA SEUA LISTA //////////////////////////////////////////////


/////////////////////////////////////// TELA LISTA //////////////////////////////////////////////

function ListaScreen() {
  return (
    <View>
      <Text>CARRINHO</Text>
    </View>
  );
}

/////////////////////////////////////// TELA CARRINHO //////////////////////////////////////////////

function BagScreen() {
  return (
    <View>
      <Text>CARRINHO</Text>
    </View>
  );
}

/////////////////////////////////////// NAVEGAÇÃO //////////////////////////////////////////////

const Stack = createStackNavigator();






export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Lista" component={ListaScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carrinho" component={BagScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true, title: 'LOGIN' }} // Mostra o cabeçalho com o título "Login"
        />
        <Stack.Screen
          name="CriarConta"
          component={CreateAccountScreen}
          options={{ headerShown: true, title: 'Criar Conta' }} // Mostra o cabeçalho com o título "Criar Conta"
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={ForgotPasswordScreen}
          options={{ headerShown: true, title: 'Recuperar Senha' }} // Mostra o cabeçalho com o título "Recuperar Senha"
        />
        <Stack.Screen
        name='Conta'
        component={Account}
        options={{headerShown: true, title: 'Conta'}}  // Mostra o cabeçalho com o título "Recuperar Senha"
        />
         <Stack.Screen
        name='DadoUser'
        component={DadosPessoais}
        options={{headerShown: true, title: 'Seus Dados'}}  // Mostra o cabeçalho com o título "Recuperar Senha"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/////////////////////////////////////// ESTILOS //////////////////////////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
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
  subtitulo: {
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
  barraPesquisa: {
    position: 'absolute',
    width: 315,
    height: 40,
    left: 30,
    top: 161,
    backgroundColor: '#000000',
    borderRadius: 20,
    color: '#fff'
  },
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
});

const img = StyleSheet.create({
  imageStreet: {
    position: 'absolute',
    width: 152,
    height: 211,
    left: 25,
    top: 269,
    borderRadius: 5,
    overflow: 'hidden'
  },
  streetText: {
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
  imageStreetW: {
    position: 'absolute',
    width: 152,
    height: 211,
    left: 197,
    top: 269,
    borderRadius: 5,
    overflow: 'hidden',
  },
  streetTextW: {
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
  imageCasualM: {
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
  imageCasualW: {
    position: 'absolute',
    width: 152,
    height: 211,
    left: 199,
    top: 509,
    borderRadius: 5,
    overflow: 'hidden',
  },
  casualTextW: {
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
});

const login = StyleSheet.create({
  body: {
    backgroundColor: "#FFF"
  },
  loginText: {
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
  labelEmail: {
    position: 'absolute',
    width: 343,
    height: 52,
    left: 17.86,
    top: 237.05,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2,
    borderColor: '#000000',
  },
  labelSenha: {
    position: 'absolute',
    width: 343,
    height: 52,
    left: 19,
    top: 330.06,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2,
    borderColor: '#000000',
  },
  esquecerSenha: {
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
  butto: {
    position: 'absolute',
    width: 196,
    height: 50,
    left: 93.47,
    top: 457.6,
    transform: [{ rotate: '0.18deg' }],
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  criarConta: {
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
});


const CreatAccont = StyleSheet.create({ 
  titulo:{
    position: 'absolute',
    width: 163,
    height: 41,
    left: 108.43,
    top: 61.34,
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
  labelNome:{
    position: 'absolute',
    width: 343,
    height: 52,
    left: 20.17,
    top: 247,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2,
    borderColor: '#000000',
  },
  labelEmail:{
    position: 'absolute',
        width: 343,
        height: 52,
        left: 20.17,
        top: 342,
        transform: [{ rotate: '0.18deg' }],
        borderWidth: 2,
        borderColor: '#000000',
  },
  labelSenha:{
    position: 'absolute',
    width: 343,
    height: 52,
    left: 20.17,
    top: 437,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2,
    borderColor: '#000000',
  },
 
  cadastro:{
    position: 'absolute',
    width: 268,
    height: 42,
    left: 55.1,
    top: 163.17,
    transform: [{ rotate: '0.18deg' }],
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  button:{
    position: 'absolute',
    width: 196,
    height: 50,
    left: 96.16,
    top: 522,
    transform: [{ rotate: '0.18deg' }],
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    position: 'absolute',
    left: '39.13%',
    right: '39.95%',
    top: '37.03%',
    bottom: '32.97%',
    transform: [{ rotate: '0.18deg' }],
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  }
  
})

const Password = StyleSheet.create({
  textEmail:{
    position: 'absolute',
    width: 107,
    height: 18,
    left: 20.31,
    top: 255.6,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',

  },
  
  labelEmail:{
    position: 'absolute',
    width: 343,
    height: 52,
    left: 20.48,
    top: 284.6,
    transform: [{ rotate: '0.18deg' }],
    borderWidth: 2,
    borderColor: '#000000',
  },
  button:{
    position: 'absolute',
    width: 196,
    height: 50,
    left: 88.47,
    top: 360.6,
    transform: [{ rotate: '0.18deg' }],
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonText:{
    position: 'absolute',
    left: '39.13%',
    right: '39.95%',
    top: '37.03%',
    bottom: '32.97%',
    transform: [{ rotate: '0.18deg' }],
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 13,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
    color: '#FFFFFF',
  },
  login:{
    position: 'absolute',
    width: 104,
    height: 20,
    left: 141.59,
    top: 426.92,
    transform: [{ rotate: '0.18deg' }],
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 17,
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  }
  
})


const account = StyleSheet.create({
    foto:{
      position: 'absolute',
      width: 103,
      height: 95,
      left: 136.31,
      top: 150.6,
      borderRadius: 95 / 2, // half of the height
      overflow: 'hidden', // to ensure the image is clipped to the circle
      borderWidth: 1,
      borderColor: '#000000',
    },
    labeldado:{
      position: 'absolute',
      width: 316,
      height: 50,
      left: 29.31,
      top: 300.6,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 50,
    },
    dados:{
      position: 'absolute',
      width: 83,
      height: 15,
      left: 145.31,
      top: 317.6,
    },
    dadosTexto:{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 13,
      lineHeight: 15,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 0.04,
      textTransform: 'uppercase',
      color: '#000000',
     
      

    },
    labelpedido:{
      position: 'absolute',
          width: 316,
          height: 50,
          left: 29.31,
          top: 370.6,
          backgroundColor: '#FFFFFF',
          borderWidth: 1,
          borderColor: '#000000',
          borderRadius: 50,

    },
    seusPedidos:{
      position: 'absolute',
      width: 95,
      height: 15,
      left: 140.31,
      top: 388.6,
    },
    pedidosText:{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 13,
      lineHeight: 15,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 0.04,
      textTransform: 'uppercase',
      color: '#000000',

    },
    labellista:{
      position: 'absolute',
      width: 316,
      height: 50,
      left: 29.31,
      top: 443.6,
      backgroundColor: '#FFFFFF',
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 50,

    },
    lista:{
      position: 'absolute',
          width: 121,
          height: 15,
          left: 122.31,
          top: 460.6,

    },
    listaText:{ 
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 13,
      lineHeight: 15,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 0.04,
      textTransform: 'uppercase',
      color: '#000000',
      
    },
    sair:{
      position: 'absolute',
      width: 196,
      height: 50,
      left: 89.47,
      top: 520.6,
      transform: [{ rotate: '0.18deg' }],
      backgroundColor: '#000',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sairTex:{
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: '900',
      fontSize: 110,
      lineHeight: 15,
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center',
      letterSpacing: 0.04,
      textTransform: 'uppercase',
      color: '#FFFFFF',
    }

})
