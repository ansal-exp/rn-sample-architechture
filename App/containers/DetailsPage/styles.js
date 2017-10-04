import {
    StyleSheet,
    Dimensions
} from 'react-native'
const { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
  },

  mainImage:{

  },
  mainImg:{
    width: width,
    height: height/2.5
  },

  heading:{
    fontSize:26,
    color:'#000000',
    fontWeight:'bold',
    marginBottom:24,
    marginTop:16,
  },
  subHeading:{
    fontSize:16,
    color:'#7f8c8d'
  },
  subHead:{
    fontSize:14 ,
    color:'#7f8c8d'
  },

  description:{
    fontSize:14 ,
    color:'#000000',
    marginTop:8
  },
  card: {
  margin:2,
  padding:4,
  elevation:2,
  backgroundColor: "#FFFFFF",
  borderRadius: 2,
  shadowColor: "#000000",
  shadowOpacity: 0.3,
  shadowRadius: 1,
  shadowOffset: {
    height: 1,
    width: 0.3,
  }
},

});
