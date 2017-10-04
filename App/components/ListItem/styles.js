import {
    StyleSheet,
    Dimensions
} from 'react-native'
const { width, height } = Dimensions.get("window");
export default styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    margin:8,
    backgroundColor:'#bdc3c7'
    
  },
  cardContainer:{
    backgroundColor: "#fff",
    borderRadius: 2,
    elevation:2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
    height: 1,
    width: 0.3,
    }
  },
  heading:{
    fontSize:18,
    color:'#000000AA',
    fontWeight:'500',
    
  },
  subHeading:{
    fontSize:14,
    color:'#000000AA',
  },
  subHead:{
    fontSize:12 ,
    color:'#000000AA',
  },
  smallHead:{
    fontSize:10,
    color:'#000000Af'
  },
  smallText:{
    fontSize:8,
    color:'#000000Af'
  },
  mainImg:{
    width: 120,
    height: 120
  },
  smallImg: {
    width: 20,
    height: 20,
    opacity:.75,
    //borderRadius:13
  },
  fields:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  headings:{
    flex:2,
    marginLeft:8,
    marginTop:5,
  }

});
