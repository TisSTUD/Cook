import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'

export default function Splash({navigation}) {
  return (
    <View style={styles.mainContainer} >
    {/* handshake image */}
    <View style={styles.imgContainer} >
        <Image source={require('../../assets/food1.jpg')}
        style={styles.image}  />
    </View>

    {/* button and text */}
    <View style={styles.body} >
        {/* Text part */}
    
        <View style={styles.textContainer} >    
          <Text style={{color:"#EECACB",fontWeight: 'bold',fontSize:18}} > 30K+ premium reciepes </Text>
          <Text style={{marginTop:25,fontWeight: 'bold',color:'#3c444c',fontSize:60}} >Cook like a chef </Text>
        </View>   

        {/* Button */}
        <View style={styles.buttonContainer} >
            <TouchableOpacity style={styles.button} 
                onPress={()=>navigation.navigate("Home")}
            >
                <Text style={styles.buttonText} >Get Started</Text>
            </TouchableOpacity> 
            {/* <Buttons btn_text={"Get Started"}  /> */}
        </View>

    </View>
            
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    padding: 10,
    backgroundColor:'#fff'
  },

  imgContainer:{
    flex:3,
    flexDirection:"column",
    alignItems: 'center',
  },

  image: {
    flex:1,
    width:'100%',
    resizeMode: 'contain',
  },

  body: {
    flex:2,
    flexDirection:'column',
    justifyContent: 'center',
    marginHorizontal:30
  },

  textContainer:{
    flex:1,
    marginLeft:10,
    flexDirection:'column',
    alignItems:'flex-start'
    // backgroundColor: 'beige',
  },

  buttonContainer: {
    flex:1/2,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },

  button: {
    justifyContent:'center',
    width:'100%',
    backgroundColor:'#F96163',
    height:60,
    borderRadius: 50,
  },

  buttonText: {
    fontSize:18,
    fontWeight: 'bold',
    textAlign:'center',
    position:'relative',
    color:"white"
  },
  
});
