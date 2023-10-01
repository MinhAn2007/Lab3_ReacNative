import React from 'react';
import { StyleSheet, View ,Text, Image,TextInput,Pressable} from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
const VerifyScreen = () => {
  const sendRequest = () => {
    alert("Verify code success");
  }

  return (
    <LinearGradient colors={["#a6f5f5", "#00CCF9"]} style={styles.container}>
 
      <Text style={styles.textHeader}>CODE</Text>
      <Text style={styles.text}>VERIFICATION</Text>
      <Text style={styles.bodySubText}>Enter onetime password send on ++84837710747</Text>

    <View style={styles.table}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.cellText}></Text>
        </View>
      </View>
      </View>
      <Pressable style={styles.button} onPress={sendRequest}>
        <Text style={styles.buttonText}>VERIFY CODE</Text>
      </Pressable>

        </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', // Đặt hiển thị thành flex
    flex: 1, // Đặt flex thành 1
    backgroundColor: "linear-gradient(135deg, #CBF4F6, #00CCF9)",
    width: '100%', // Đặt chiều rộng thành 100%
    height: '100%', // Đặt chiều cao thành 100%
  },
  textHeader: {
    textAlign: 'center', // Căn giữa theo chiều ngang
    justifyContent: 'center', // Căn giữa theo chiều dọc
    fontSize: 50, // Đặt kích thước font chữ
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    marginTop: 80,
  },
  text: {
    fontSize: 18,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    padding: 65,
  },
  bodySubText: {
    fontSize: 16,
    color: "#000000",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: 'bold', // Đặt độ đậm của font chữ
    marginLeft: 20,
},
  
  button :  {
    marginLeft: 20,
    marginTop: 50,
    width: "90%",
    height: 50,
    backgroundColor: "#E3C000",
  },
  buttonText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  table: {
    marginLeft: 30,
    marginTop: 40,
    borderWidth: 1,
    borderColor: 'black',
    width: '84%',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    height: 50,
  },
});

export default VerifyScreen;
