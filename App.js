import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { auth } from './src/firebase.config';
import api from './src/api';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';



/////////////////////////////////////// TELA HOME //////////////////////////////////////////////

function HomeScreen() {
  const navigation = useNavigation();

   const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };

  const navigateToStreetM = () => {
    navigation.navigate("StreetM")
  }

  const navigateToStreetW = () => {
    navigation.navigate("StreetW")
  }

  const navigateToCasualM = () => {
    navigation.navigate("CasualM")
  }

  const navigateToCasualF = () => {
    navigation.navigate("CasualF")
  }

  

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
        <TouchableOpacity onPress={navigateToStreetM}>
          <Image
            source={require('./img/streetman.png')} // Substitua o caminho pela localização correta da imagem
            style={img.imageStreet}
          />
          <Text style={img.streetText}>Street Masculino</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToStreetW}>
          <Image
            source={require('./img/streetwom.png')} // Substitua o caminho pela localização correta da imagem
            style={img.imageStreetW}
          />
          <Text style={img.streetTextW}>Street Feminino</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToCasualM} >
          <Image
            source={require('./img/casualman.png')} // Substitua o caminho pela localização correta da imagem
            style={img.imageCasualM}
          />
          <Text style={img.casualMasculinoText}>Casual Masculino</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={navigateToCasualF}>
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

/////////////////////////////////////// TELA STREET WEAR  MASCULINO //////////////////////////////////////////////

function StreetPage(){

  const navigation = useNavigation();
  
  const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };

  const compras = () => {
    navigation.navigate("Compra")
  }
  
  
  return(
    <View style={product.container}>
    <Text style={product.downtown}>Downtown</Text>
    <TouchableOpacity onPress={navigateToOtherScreen}> 
       <View style={{
            position: 'absolute',
            width: 42,
            height: 42,
            left: 319,
            top: 50,
            backgroundColor: '#D9D9D9',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center', // Half of width/height to make it a circle
       }}>
         <Feather name="user" size={20} color="#000" />
       
       </View>
       </TouchableOpacity>
    <Text style={product.streetMasculino}>STREET MASCULINO</Text>


    <TouchableOpacity>
    <View style={product.rectangle4} />
    <Text style={product.novidades}>Novidades</Text>
    </TouchableOpacity>   

    <TouchableOpacity>
    <View style={product.rectangle6} />
    <Text style={product.alta}>Alta</Text>
    </TouchableOpacity> 

    <TouchableOpacity>
    <View style={product.rectangle5} />
    <Text style={product.all}>All</Text>
    </TouchableOpacity>  
    
    <TouchableOpacity>
    <Image source={require('./img/JeansReta.png')} style={product.image1}/>
    <Text style={product.jeansReta}>Jeans Reta</Text>
    <Text style={product.price1}>R$ 250,00</Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={compras}>
    <Image source={require('./img/CamisetaOversize.png')} style={product.image2}/>
    <Text style={product.camisetaOversize}>Camiseta OVERSIZE</Text>
    <Text style={product.price2}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/ConjuntoStreet.png')} style={product.image4}/>
      <Text style={product.conjutoStreet}>CONJUTO STREET</Text>
    <Text style={product.price3}>R$ 350,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/CamisetaYe.png')} style={product.image3}/>
  
    <Text style={product.camisetaYe}>Camiseta YE</Text>
    <Text style={product.price4}>R$ 150,00</Text>
      </TouchableOpacity>

  </View>
  )
}

/////////////////////////////////////// TELA STREET WEAR  Feminino //////////////////////////////////////////////

function StreetWoPage(){

  const navigation = useNavigation();
  
  const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };

  return(
    <View style={product.container}>
    <Text style={product.downtown}>Downtown</Text>
    <TouchableOpacity onPress={navigateToOtherScreen}> 
       <View style={{
            position: 'absolute',
            width: 42,
            height: 42,
            left: 319,
            top: 50,
            backgroundColor: '#D9D9D9',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center', // Half of width/height to make it a circle
       }}>
         <Feather name="user" size={20} color="#000" />
       
       </View>
       </TouchableOpacity>
    <Text style={product.streetMasculino}>Street Feminino</Text>


    <TouchableOpacity>
    <View style={product.rectangle4} />
    <Text style={product.novidades}>Novidades</Text>
    </TouchableOpacity>   

    <TouchableOpacity>
    <View style={product.rectangle6} />
    <Text style={product.alta}>Alta</Text>
    </TouchableOpacity> 

    <TouchableOpacity>
    <View style={product.rectangle5} />
    <Text style={product.all}>All</Text>
    </TouchableOpacity>  
    
    <TouchableOpacity>
    <Image source={require('./img/croppedMoletom.png')} style={product.image1}/>
    <Text style={product.jeansReta}>Cropped Moletom</Text>
    <Text style={product.price1}>R$ 250,00</Text>

    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./img/calcaGrunge.png')} style={product.image2}/>
    <Text style={product.camisetaOversize}>Calça Grunge</Text>
    <Text style={product.price2}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/calcaCargo.png')} style={product.image4}/>
      <Text style={product.conjutoStreet}>Calça Cargo</Text>
    <Text style={product.price3}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/moletomNarcissist.png')} style={product.image3}/>
  
    <Text style={product.camisetaYe}>Moletom Narcissist</Text>
    <Text style={product.price4}>R$ 450,00</Text>
      </TouchableOpacity>

  </View>
  )
}


/////////////////////////////////////// TELA CASUAL  MASCULINO //////////////////////////////////////////////

function CasualPage(){

  const navigation = useNavigation();
  
  const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };

  return(
    <View style={product.container}>
    <Text style={product.downtown}>Downtown</Text>
    <TouchableOpacity onPress={navigateToOtherScreen}> 
       <View style={{
            position: 'absolute',
            width: 42,
            height: 42,
            left: 319,
            top: 50,
            backgroundColor: '#D9D9D9',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center', // Half of width/height to make it a circle
       }}>
         <Feather name="user" size={20} color="#000" />
       
       </View>
       </TouchableOpacity>
    <Text style={product.streetMasculino}>Casual Mascullino</Text>


    <TouchableOpacity>
    <View style={product.rectangle4} />
    <Text style={product.novidades}>Novidades</Text>
    </TouchableOpacity>   

    <TouchableOpacity>
    <View style={product.rectangle6} />
    <Text style={product.alta}>Alta</Text>
    </TouchableOpacity> 

    <TouchableOpacity>
    <View style={product.rectangle5} />
    <Text style={product.all}>All</Text>
    </TouchableOpacity>  
    
    <TouchableOpacity>
    <Image source={require('./img/camisetaSocial.png')} style={product.image1}/>
    <Text style={product.jeansReta}>Camiseta Social</Text>
    <Text style={product.price1}>R$ 250,00</Text>

    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./img/camisetaLisa.png')} style={product.image2}/>
    <Text style={product.camisetaOversize}>Camiseta Lisa</Text>
    <Text style={product.price2}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/conjuntoMoletom.png')} style={product.image4}/>
      <Text style={product.conjutoStreet}>Conjuto Moletom</Text>
    <Text style={product.price3}>R$ 350,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/camisaPolo.png')} style={product.image3}/>
  
    <Text style={product.camisetaYe}>Camisa Polo</Text>
    <Text style={product.price4}>R$ 150,00</Text>
      </TouchableOpacity>

  </View>
  )
}

/////////////////////////////////////// TELA CASUAL  Feminino //////////////////////////////////////////////

function CasualWoPage(){


  const navigation = useNavigation();
  
  const navigateToOtherScreen = () => {
    navigation.navigate("Login"); // Navega para a tela 'Login'
  };


  



  return(
    <View style={product.container}>
    <Text style={product.downtown}>Downtown</Text>
    <TouchableOpacity onPress={navigateToOtherScreen}> 
       <View style={{
            position: 'absolute',
            width: 42,
            height: 42,
            left: 319,
            top: 50,
            backgroundColor: '#D9D9D9',
            borderRadius: 21,
            justifyContent: 'center',
            alignItems: 'center', // Half of width/height to make it a circle
       }}>
         <Feather name="user" size={20} color="#000" />
       
       </View>
       </TouchableOpacity>
    <Text style={product.streetMasculino}>Casual Feminino</Text>


    <TouchableOpacity>
    <View style={product.rectangle4} />
    <Text style={product.novidades}>Novidades</Text>
    </TouchableOpacity>   

    <TouchableOpacity>
    <View style={product.rectangle6} />
    <Text style={product.alta}>Alta</Text>
    </TouchableOpacity> 

    <TouchableOpacity>
    <View style={product.rectangle5} />
    <Text style={product.all}>All</Text>
    </TouchableOpacity>  
    
    <TouchableOpacity>
    <Image source={require('./img/calcaJeans.png')} style={product.image1}/>
    <Text style={product.jeansReta}>Calça Jeans</Text>
    <Text style={product.price1}>R$ 250,00</Text>

    </TouchableOpacity>
    <TouchableOpacity>
    <Image source={require('./img/moletomAzul.png')} style={product.image2}/>
    <Text style={product.camisetaOversize}>Moletom Azul</Text>
    <Text style={product.price2}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/moletomCinza.png')} style={product.image4}/>
      <Text style={product.conjutoStreet}>Moletom Cinza</Text>
    <Text style={product.price3}>R$ 150,00</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('./img/conjuntoSocial.png')} style={product.image3}/>
  
    <Text style={product.camisetaYe}>conjuto Social</Text>
    <Text style={product.price4}>R$ 450,00</Text>
      </TouchableOpacity>

  </View>
  )
}

/////////////////////////////////////// TELA DE COMPRA PRODUTO //////////////////////////////////////////////

function Compra(){
  const navigation = useNavigation();

  const carrinho = () => {
    navigation.navigate("Carrinho");
  }

  return(
    <View style={compras.container}>
    <Text style={compras.downtown}>Downtown</Text>

    <TouchableOpacity>
    <View style={compras.ellipse2} />
    <Text style={compras.pp}>PP</Text>
      </TouchableOpacity>
    <TouchableOpacity>
    <View style={compras.ellipse3} />
    <Text style={compras.p}>P</Text>
    </TouchableOpacity>
     <TouchableOpacity>
    <View style={compras.ellipse4} />
    <Text style={compras.m}>M</Text>
    </TouchableOpacity>
      <TouchableOpacity>
    <View style={compras.ellipse5} />
    <Text style={compras.g}>G</Text>
    </TouchableOpacity>
  

    <Image source={require('./img/CamisetaOversize.png')} style={compras.image}/>
    
    <View style={compras.rectangle}>
    
      <Text style={compras.camisetaOversize}>Camiseta Oversize</Text>
      <Text style={compras.tamanho}>Tamanho</Text>
      <Text style={compras.price}>R$ 150,00</Text>
    </View>

    <View style={compras.ellipse6} />
    <Text style={compras.cor}>COR</Text>


    <TouchableOpacity onPress={carrinho}>
    <View style={compras.rectangle16}>
      <Text style={compras.addToCart}>Adicionar ao Carrinho</Text>
    </View>
    </TouchableOpacity>

   

    






    
  </View>
  )
}





/////////////////////////////////////// TELA LOGIN //////////////////////////////////////////////

function LoginScreen() {
  
  
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const userLogin = async () => {
    if (!userEmail || !userPass) {
      alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      const response = await api.post('/users/login', {
        email: userEmail,
        password: userPass,
      });

      const result = response.data;

      if (response.status === 200) {
        alert('Success', result.message);
        const token = result.token;
        // Salve o token localmente para futuras requisições
        await AsyncStorage.setItem('token', token);
        navigation.navigate('Conta'); // Navegar para a tela da conta após login bem-sucedido
      } else {
        alert('Error', result.error || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      alert('Error', 'An error occurred. Please try again.');
    }
  };


 

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

  const [userName, setUserName] = useState('');
  const [userNewEmail, setNewEmail] = useState('');
  const [userNewPass, setUserNewPass] = useState('');

  const ContaCriada = async () => {
    try {
      const response = await api.post('/api/users/register', {
        name: userName,
        email: userNewEmail,
        password: userNewPass,
      });

      if (response.status === 201) {
        ToastAndroid.show('Conta criada com sucesso!');
        navigation.navigate('Home')
      } else {
        alert('Erro ao criar conta');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert('Erro ao criar conta: ' + error.response.data.error);
      } else {
        alert('Erro ao criar conta: ' + error.message);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={CreatAccont.titulo}>Downtown</Text>
      <Text style={CreatAccont.cadastro}>Cadastro</Text>
      <TextInput
        style={CreatAccont.labelNome}
        placeholder="Digite seu Nome Completo"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={CreatAccont.labelEmail}
        placeholder="Digite seu Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email" // Alterado para autoCompleteType
        value={userNewEmail}
        onChangeText={setNewEmail}
      />
      <TextInput
        style={CreatAccont.labelSenha}
        placeholder="Digite sua Senha"
        autoCapitalize="none"
        secureTextEntry
        value={userNewPass}
        onChangeText={setUserNewPass}
      />
      <TouchableOpacity style={CreatAccont.button} onPress={ContaCriada}>
        <Text style={CreatAccont.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

  



/////////////////////////////////////// RECUPERAR SENHA  //////////////////////////////////////////////
function ForgotPasswordScreen() {

  const [userEmail, setUserEmail]  = useState('');


  const navigation = useNavigation();

  function RecuperarSenha() {
    if(userEmail != ''){
        sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          ToastAndroid.show('Foi enviado um email para: ' + userEmail + " Verifique sua caixa de email", ToastAndroid.CENTER)
          navigation.navigate('Login')
        })
        .catch((err) => {
          const errorMessage = err.message;
          alert("Ops! Alguama coisa nao deu certo" + errorMessage )
        })
    }else{
      ToastAndroid.show('É preciso informa um email válido para efutar a reefinição de senha',
      ToastAndroid.CENTER
     
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
    ToastAndroid.show("VOCE SAIU DA SUA CONTA",  ToastAndroid.CENTER)
  }

  const MeusPedidos = () =>{
    navigation.navigate('MinhasCompras')
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
      <TouchableOpacity onPress={MeusPedidos}>
      <View style={account.labelpedido}></View>
        <View style={account.seusPedidos}>
        <Text style={account.pedidosText}> MEUS PEDIDOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={account.labellista}></View>
        <View style={account.lista}>
        <Text style={account.listaText}> LISTA DE DESEJOS</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={SairConta} style={account.sair}>
        <Text style={account.sairTex}>LOGOUT</Text>
        
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
        <Text style={account.pedidosText}>karina@user.com</Text>
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

function Pedidos(){
  return (
    <View style={bag.container}>
  <Text style={bag.text}>Downtown</Text>
  
  <View style={bag.secondContainer}>
    {/* Ellipse 4 */}
    <View style={bag.ellipse4}></View>

    {/* Camisa Lisa */}
    <Text style={bag.camisaLisa}>Calça Cargo</Text>

    {/* R$ 150,00 */}
    <Text style={bag.price}>R$ 150,00</Text>

    {/* M */}
    <Text style={bag.size}>P</Text>

    {/* Ellipse 8 */}
    <View style={bag.ellipse8}></View>

    {/* fbc14974f308e5321ad7d2087d3dee34 5 */}
    <View style={bag.imageContainer}>
      <Image
        source={require('./img/calcaCargo.png')}
        style={bag.image}
      />
    </View>

    </View>

  </View>
    
    
);
}




/////////////////////////////////////// TELA CONTA LOGADA SEUA LISTA //////////////////////////////////////////////




/////////////////////////////////////// TELA CARRINHO //////////////////////////////////////////////

function BagScreen() {
 

  const navigation = useNavigation();

 
  
 
  const ConfimarCompra = () => {
      ToastAndroid.show("SUA COMPRA FOI CONCLUIDA", ToastAndroid.TOP)
      navigation.navigate('Home')
  }

 
 
  return (
      <View style={bag.container}>
    <Text style={bag.text}>Downtown</Text>
    
    <View style={bag.secondContainer}>
      {/* Ellipse 4 */}
      <View style={bag.ellipse4}></View>

      {/* Camisa Lisa */}
      <Text style={bag.camisaLisa}>Camisa Lisa</Text>

      {/* R$ 150,00 */}
      <Text style={bag.price}>R$ 150,00</Text>

      {/* M */}
      <Text style={bag.size}>M</Text>

      {/* Ellipse 8 */}
      <View style={bag.ellipse8}></View>

      {/* fbc14974f308e5321ad7d2087d3dee34 5 */}
      <View style={bag.imageContainer}>
        <Image
          source={require('./img/CamisetaOversize.png')}
          style={bag.image}
        />
      </View>

      <TouchableOpacity>

      <View style={{
         position: 'absolute',
         left: 280,
         top: 135,
      
      }}>
      <Feather name="trash" size={20} color="#000" />
      </View>
      </TouchableOpacity>
      </View>
      <View style={bag.priceContainer} >
      {/* Total */}
      <Text style={bag.total} >Total</Text>

      {/* Rectangle 17 */}
      <View style={bag.rectangle17} ></View>

      {/* R$ 650,00 */}
      <Text style={bag.totalprice} >R$ 150,00</Text>
    </View>
    <View style={bag.containerfinalizarCompra} >
      {/* Rectangle 16 */}
      <TouchableOpacity style={bag.botaoCompra} onPress={ConfimarCompra}>
      {/* Finalizar a Comra */}
      <Text style={bag.finalizarCompra}>Finalizar a Compra</Text>

      </TouchableOpacity>
    </View>
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
        <Stack.Screen name="Carrinho" component={BagScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true, title: 'LOGIN' }} 
        />
        <Stack.Screen
          name="CriarConta"
          component={CreateAccountScreen}
          options={{ headerShown: true, title: 'Criar Conta' }} 
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={ForgotPasswordScreen}
          options={{ headerShown: true, title: 'Recuperar Senha' }} 
        />
        <Stack.Screen
        name='Conta'
        component={Account}
        options={{headerShown: true, title: 'Conta'}}  
        />
         <Stack.Screen
        name='DadoUser'
        component={DadosPessoais}
        options={{headerShown: true, title: 'Seus Dados'}} 
        />
          <Stack.Screen
        name='StreetM'
        component={StreetPage}
        options={{headerShown: false, title: ''}}  
        />
         <Stack.Screen
        name='StreetW'
        component={StreetWoPage}
        options={{headerShown: false, title: ''}}  
        />
          <Stack.Screen
        name='CasualM'
        component={CasualPage}
        options={{headerShown: false, title: ''}}  
        />
           <Stack.Screen
        name='CasualF'
        component={CasualWoPage}
        options={{headerShown: false, title: ''}}  
        />

        <Stack.Screen
        name='Compra'
        component={Compra}
        options={{headerShown: true, title: ''}}  
        />

        <Stack.Screen
        name='MinhasCompras'
        component={Pedidos}
        options={{headerShown: true, title: 'MINHAS COMPRAS'}}  
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
      fontSize: 12,
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
      fontSize: 12,
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
      fontSize: 12,
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
      color: "#fff",
      fontSize: 14
    }

})

const product = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  downtown: {
    position: 'absolute',
    width: 163,
    height: 41,
    left: 108.13,
    top: 50,
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
  streetMasculino: {
    position: 'absolute',
    width: 232,
    height: 28,
    left: 82,
    top: 130,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 28,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  rectangle4: {
    position: 'absolute',
    width: 131,
    height: 31,
    left: 34,
    top: 185,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  rectangle6: {
    position: 'absolute',
    width: 84,
    height: 31,
    left: 265,
    top: 185,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  alta: {
    position: 'absolute',
    width: 35,
    height: 23,
    left: 289,
    top: 189,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  rectangle5: {
    position: 'absolute',
    width: 64,
    height: 31,
    left: 183,
    top: 185,
    backgroundColor: '#BCA3A3',
    borderRadius: 18,
  },
  all: {
    position: 'absolute',
    width: 23,
    height: 23,
    left: 203,
    top: 189,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  novidades: {
    position: 'absolute',
    width: 92,
    height: 23,
    left: 54,
    top: 189,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 23,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  image1: {
    position: 'absolute',
    width: 152,
    height: 211,
    left: 27,
    top: 250,
    
    borderRadius: 5,
  },
  image2: {
    position: 'absolute',
    width: 152,
    height: 211,
    left: 199,
    top: 250,
    
    borderRadius: 5,
  },
  image3: {
    position: 'absolute',
    width: 148,
    height: 182,
    left: 199,
    top: 514,
    
    borderRadius: 5,
  },
  image4: {
    position: 'absolute',
    width: 151,
    height: 182,
    left: 27,
    top: 510,
   
    borderRadius: 5,
  },
  jeansReta: {
    position: 'absolute',
    width: 76,
    height: 21,
    left: 34,
    top: 461,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price1: {
    position: 'absolute',
    width: 67,
    height: 21,
    left: 34,
    top: 482,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
  camisetaOversize: {
    position: 'absolute',
    width: 134,
    height: 21,
    left: 199,
    top: 461,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price2: {
    position: 'absolute',
    width: 64,
    height: 21,
    left: 210,
    top: 482,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
  conjutoStreet: {
    position: 'absolute',
    width: 117,
    height: 21,
    left: 27,
    top: 699,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price3: {
    position: 'absolute',
    width: 67,
    height: 21,
    left: 28,
    top: 720,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
  camisetaYe: {
    position: 'absolute',
    width: 87,
    height: 21,
    left: 199,
    top: 696,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price4: {
    position: 'absolute',
    width: 64,
    height: 21,
    left: 199,
    top: 717,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
});


const compras = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  downtown: {
    position: 'absolute',
    width: 163,
    height: 41,
    left: 108.13,
    top: 15,
    fontFamily: 'Open Sans',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
    transform: [{ rotate: '0.18deg' }],
  },
  ellipse2: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 17,
    top: 410,
    backgroundColor: '#D9D9D9',
    borderRadius: 21,
  },
  pp: {
    position: 'absolute',
    width: 18,
    height: 23,
    left: 29,
    top: 420,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 13,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  ellipse5: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 185,
    top: 410,
    backgroundColor: '#D9D9D9',
    borderRadius: 21,
  },
  ellipse4: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 129,
    top: 410,
    backgroundColor: '#D9D9D9',
    borderRadius: 21,
  },
  ellipse3: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 73,
    top: 410,
    backgroundColor: '#D9D9D9',
    borderRadius: 21,
  },
  p: {
    position: 'absolute',
    width: 10,
    height: 23,
    left: 89,
    top:  420,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  m: {
    position: 'absolute',
    width: 14,
    height: 23,
    left: 143,
    top:  420,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  g: {
    position: 'absolute',
    width: 12,
    height: 23,
    left: 200,
    top:  420,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  rectangle: {
    position: 'absolute',
    width: 400,
    height: 258,
    left: 0,
    top: 75,
    
    borderRadius: 5,
  },

  image:{
    position: 'absolute',
    width: 400,
    height: 258,
    left: 0,
    top: 75,
    
    borderRadius: 5,
  },


  camisetaOversize: {
    position: 'absolute',
    width: 206,
    height: 33,
    left: 3,
    top: 260,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  tamanho: {
    position: 'absolute',
    width: 107,
    height: 33,
    left: 10,
    top: 300,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price: {
    position: 'absolute',
    width: 111,
    height: 36,
    left: 258,
    top: 260,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
  ellipse6: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 22,
    top: 500,
    backgroundColor: '#928787',
    borderRadius: 21,
  },
  cor: {
    position: 'absolute',
    width: 48,
    height: 33,
    left: 17,
    top: 460,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  rectangle16: {
    position: 'absolute',
    width: 339,
    height: 75,
    left: 25,
    top: 570,
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  addToCart: {
    position: 'absolute',
    width: 263,
    height: 36,
    left: 40,
    top: 18,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 36,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#FFFFFF',
  },
  ellipse15: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 6,
    top: 105,
    backgroundColor: '#D9D9D9',
  },


});

const bag = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 163,
    height: 41,
    left: 113.13,
    top: 61,
    transform: [{ rotate: '0.18deg' }],
  },
  secondContainer:{
    position: 'relative',
    left: -90,
    top: -40
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 41,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  ellipse4: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 202,
    top: 199,
    backgroundColor: '#D9D9D9',
    borderRadius: 20
  },
  camisaLisa: {
    position: 'absolute',
    width: 109,
    height: 27,
    left: 142,
    top: 130,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  price: {
    position: 'absolute',
    width: 83,
    height: 27,
    left: 155,
    top: 157,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#9F9797',
  },
  size: {
    position: 'absolute',
    width: 14,
    height: 23,
    left: 216,
    top: 209,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  ellipse8: {
    position: 'absolute',
    width: 42,
    height: 42,
    left: 150,
    top: 199,
    backgroundColor: '#222020',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
  },
  imageContainer: {
    position: 'absolute',
    width: 99.41,
    height: 138,
    left: 26,
    top: 130,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  priceContainer: {
    position: 'relative',
  },
  total: {
    position: 'absolute',
    width: 45,
    height: 27,
    right: 180,
    top: 490,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
  rectangle17: {
    position: 'absolute',
    width: 201,
    height: 26,
    left: 50.5,
    top: 490,
    backgroundColor: '#D9D9D9',
  },
  totalprice: {
    position: 'absolute',
    width: 83,
    height: 27,
    left: 145.5,
    top: 490,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    letterSpacing: -0.333333,
    color: '#000000',
  },
    containerfinalizarCompra: {
    position: 'relative',
  },
  botaoCompra:{
      position: 'absolute',
    width: 303,
    height: 60,
    left: -60,
    top: 540,
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  finalizarCompra: {
    position:'relative',
    top: 15,
    fontSize: 24,
    textAlign: 'center',
    color: '#FFFFFF',
    letterSpacing: -0.333333,
    fontWeight: '600'
    
  },
 
  
});
