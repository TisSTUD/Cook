import { StyleSheet, View,Text, ScrollView } from "react-native";

export default function Home() {
  return (
    <ScrollView style={styles.mainContainer} >
      {/* navbar */}
      <View style={styles.navContainer}>
        <Text>Hillaaaww</Text>
        {/* <View></View>
        <View></View> */}
      </View>

      {/* title */}
      <View style={styles.title}>

      </View>

      {/* search bar */}
      <View style={styles.searchContainer}>

      </View>

      {/* categories */}
      <View style={styles.categoriesContainer}>

      </View>

      {/* popular */}
      <View style={styles.popularContainer}>

      </View>
            
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    paddingTop: 40,
    paddingHorizontal:20,
    backgroundColor:'#ff431f67'
  },
  navContainer: {
    flex: 1,
    backgroundColor:'#12df120',
    width:'100%'
  }
});
