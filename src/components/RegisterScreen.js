import  React from  'react';

import { StyleSheet, View ,Text, Pressable,TextInput,radioButton} from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const register = () => {
    alert("Register success");
    navigation.navigate("MainScreen");
  };

   return(
    <View>
        <Text style={styles.textHeader}>REGISTER</Text>

        <View>
         <TextInput style={styles.text} placeholder="Name"/>  
          <TextInput style={styles.text} placeholder="Phone"/>  
          <TextInput style={styles.text} placeholder="Email"/>  
          <TextInput style={styles.text} placeholder="Password"/>
          <Icon style={styles.eyeIcon}
            name={"eye-slash"}
            size={30}
            color="#000"
          />
          <TextInput style={styles.text} placeholder="Birthday"/>  
        <View style={styles.radioContainer}>
        <RadioButton ></RadioButton><Text style={styles.textRadio}>Male</Text>
        <RadioButton ></RadioButton><Text style={styles.textRadio}>Female</Text>
        </View>
       
        <Pressable style={styles.button} onPress={register}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </Pressable>

      <Text style={styles.textFooter}>When you agree to terms and condition</Text>

    </View>
    </View>

   );
 }
 const styles = StyleSheet.create({
  textHeader: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "#55DAF7",
    textAlign: "center",
    marginBottom: 20,
  },

  text:{
    fontWeight: "bold",
    paddingLeft: 20,
    width: "92%",
    height: 60,
    borderColor: "#000",
    backgroundColor: "#C4C4C4",
    marginTop: 15,
    padding: 0,
    marginLeft: 15,
    fontSize: 20,
  },
  eyeIcon: {
    position: "absolute",
    marginTop: 250,
    marginLeft: "85%",
  },
  button: {
    marginTop: 30,
    marginLeft: 30,
    width: "84%",
    height: 60,
    backgroundColor: "red",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
  },
  radioContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "94%",
    marginLeft: 25,
    marginTop: 20,
  },
  radioButton: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  textRadio :{
    fontSize: 20,
    marginLeft: 10,
    paddingRight: 20,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    marginTop: 30,
    marginLeft: 20,
    width: "90%",
    height: 60,
    backgroundColor: "red",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  textFooter: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 15,
    fontWeight: "bold",
  },
 });
export default RegisterScreen;