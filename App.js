import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput } from 'react-native';
import { useState } from 'react';
export default function App() {
const [isChecked, setChecked] = useState(false);
return (        
  <View style={styles.container}>
  
  
      <Image  source ={require("./assets/saveImage.jpeg")}
      style={{width:350,height:170,marginTop:70,padding:70,alignItems:'center'}}
      resizeMode='contain'/>
  
      <View style={styles.container3}>
    <TouchableOpacity style={styles.button1}>
      <Text style={styles.buttonText}>DONOR</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button2}>
      <Text style={styles.buttonText}>ORGANIZATION</Text>
    </TouchableOpacity>
    </View>
    
    <Text style={styles.container4}>Registration</Text>
    
    <TextInput 
    placeholder='Enter Your Mobile Number'
    style={styles.input}
    underlineColorAndroid="black"/>

<View style={{marginRight:150,flexDirection:'row',marginTop:15}}>
  <TouchableOpacity
      style={styles.checkboxContainer}
      onPress={() => setChecked(!isChecked)}>
      <View style={styles.checkbox}>
        {isChecked && <Text>X</Text>}
      </View>
      </TouchableOpacity>
    <Text > Terms & conditions</Text>
  </View>
  
  <View style={{flexDirection:'row',marginTop:30}}>
  <Text>Time Remaining 01:50</Text>
  <Text style={{color:'blue',marginLeft:100}}>Resend OTP</Text>
  </View>

  <TouchableOpacity style={styles.btngenotp}>
      <Text style={styles.buttonText}>Generate OTP</Text>
    </TouchableOpacity>

  <TextInput
  placeholder="Enter OTP"
  style={styles.input}
  underlineColorAndroid='black'/>

    <TouchableOpacity style={styles.submit}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>

    <Text style={{marginTop:20,alignItems:'center'}}> Already register? Login</Text>
    
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'top',
  
},

container1:{
  color:'red',
  fontStyle:'italic',
  padding: 30,
  borderRadius: 10,
  fontSize: 20,
  
  },
  container2:{
    fontSize:30,
    paddingTop:30,
    paddingBottom:20,
    color:'blue',
    fontStyle:'italic'

  },
  container3:{
    flexDirection:'row',
    marginTop:40,
    marginRight:100

  },
  container4:{
    alignSelf:'flex-start',
    marginLeft:20,
    color:'red'
  },
photo: {
alignItems:'center',
width:400,
height:150,
padding:10,
marginTop:20,
  },

button1: {
marginTop:30,
justifyContent:'flex-left',
backgroundColor: 'black',
paddingVertical: 10,
paddingHorizontal:20,
borderRadius: 5,
marginVertical: 10,

},
button2: {
marginTop:30,
backgroundColor: 'red',
paddingVertical: 10,
paddingHorizontal:20,
borderRadius: 5,
marginVertical: 10,

},

btngenotp: {
marginTop:10,
backgroundColor: 'orange',
paddingVertical: 10,
paddingHorizontal:20,
borderRadius: 5,
marginVertical: 10,


},
submit: {
marginTop:10,
backgroundColor: 'skyblue',
paddingVertical: 10,
paddingHorizontal:20,
borderRadius: 5,
marginVertical: 10,

},

buttonText: {
color: 'white',
fontSize: 14,
textAlign: 'center',
},
input: {
height:40,
borderColor: 'green',
paddingLeft: 10,
paddingRight: 30,

},
bottomLine: {
borderBottomColor: 'green',
borderBottomWidth: 1,
},

checkbox: {
marginLeft:5,
width: 15,
height: 15,
borderWidth: 1,
borderColor: 'black',
marginRight:5,
justifyContent: 'center',
alignItems: 'center',
},

});
