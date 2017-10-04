import {
    StyleSheet,
    Dimensions
} from 'react-native'
const { width, height } = Dimensions.get("window");

export default styles = StyleSheet.create({
  mainContainer: { flex: 5 },
  flexOneContainer: { flex: 1 },
  portraitContainer: { flex: 2, flexDirection: 'row'}
 })