import  React from  'react';

import { StyleSheet, View ,Text, Pressable,TextInput, Linking,Image,Button} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

import { useNavigation } from "@react-navigation/native";

const LoginScreen3 = () => {
  const navigation = useNavigation();
  const fbReg = () => {
    Linking.openURL("https://www.facebook.com/");
  }
  const gmailReg = () => {
    Linking.openURL("https://mail.google.com/");
  }
  const register = () => {
    navigation.navigate("RegisterScreen");
  }
  const handleForgetPS = () => {
    navigation.navigate("ForgetScreen");

  };
  const login = () => {
    navigation.navigate("LoginScreen");
  };
  const handleRegister = () => {
    navigation.navigate("RegisterScreen");
  };

   return(
    <View style={styles.container}>
         <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('/assets/eye.png')} />
      </View>
      <TextInput style={styles.text} placeholder="Please input user name" />    
         <Icon
            name={"user"}
            size={50}
            color="blue"
            style={styles.iconUser}
          /> {`\n`}   
          <TextInput style={styles.text} placeholder="Please input password" />
          <Icon
            name={"lock"}
            size={50}
            color="blue"
            style={styles.iconLock}
          />
                  <Pressable style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </Pressable>      

     <View style={styles.textContainer}>
        <Text style={styles.textLeft} onPress={handleRegister}>Register</Text>
        <Text style={styles.textRight} onPress={handleForgetPS}>Forget Password?</Text>
     </View>
     <View style={styles.containerLoginMethod}>
      <View style={styles.line} />
      <Text style={styles.textMethodLogin}>Other Login Method</Text>
      <View style={styles.line} />
    </View>
    <View style={styles.containerImage}>
    <Pressable onPress={register}><Image  style={styles.logoFooter} source={require('/assets/add.png')} /></Pressable>
    <Pressable onPress={gmailReg}> <Image  style={styles.logoFooter} source={require('/assets/wifi.png')} /> </Pressable>
    <Pressable onPress = {fbReg}> <Image onPress = {fbReg} style={styles.logoFooter} source={require('/assets/fb.png')} /></Pressable>

    </View>

    </View>
   );
 }
 const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: "100%",
    },
    logoContainer: {
        alignItems: "center",
        marginTop: 20,
      },
      logo: {
        width: 250,
        height: 150,
      },
      iconLock: {
        position: "absolute",
        marginLeft: 40,
        marginTop: 310,
      },
      iconUser: {
        position: "absolute",
        marginLeft: 40,
        marginTop: 210,
      },
      logoFooter:{
        width: 80,
        height: 70,
        marginTop: 20,
      },

    containerImage:{
        marginTop: 60,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
  text:{
    width: "86%",
    height: 60,
    borderColor: "black",
    borderBottomWidth: 0.5,
    marginTop: 30,
    marginBottom: 10,
    paddingLeft: 60,
    marginLeft: 30,
    fontSize: 20,
    fontWeight: "100"
  },
  eyeIcon: {
    position: "absolute",
    marginTop: 150,
    marginLeft: "85%",
  },
 
  textContainer: {
    marginTop: 20,
  },
 
  button: {
    marginTop: 50,
    marginLeft: 30,
    width: "87%",
    height: 60,
    backgroundColor: "#386FFC",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textLeft: {
    fontFamily: "Roboto",
    marginTop: 0,
    width: 120,
    height: 50,
  
    fontSize: 18, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "center",
    justifyContent: "center",
  },
  textRight: {
    fontFamily: "Roboto",
    marginTop: -50,
    width: 300,
    height: 50,
    marginLeft: 150,
    fontSize: 18, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    lineHeight: "23px",
    letterSpacing: "0em",
    textAlign: "center",
    justifyContent: "center",
  },
  containerLoginMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    margin: 10,
  },
  textMethodLogin: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  containerImage:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
 });
export default LoginScreen3;