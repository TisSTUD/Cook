import { useState } from "react";
import { StyleSheet, View,Text, ScrollView,Dimensions, TextInput, ImageBackground, TouchableOpacity } from "react-native";


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePress = (categoryId) => {
    setSelectedCategory(categoryId);
  };
  const categories = [
    {id: 1, name: 'All'},
    {id: 2, name: 'Breakfast'},
    {id: 3, name: 'Lunch'},
    {id: 4, name: 'Diner'},
    {id: 5, name: 'salad'}
  ]

  let width = Dimensions.get('screen').width
  return (           
    <View style={styles.mainContainer} >
      
      <ImageBackground style={{ 
        height:800, 
        width: 360, 
        position: 'absolute',     
        top: 0,
        left: 0,
        right: 0,
        bottom: 0}} 
        source={require('../../assets/blobHome.png')}
      /> 
      <ScrollView >

        {/* navbar */}
        <View style={styles.navContainer}>
          <Text>Hillaaaww</Text>
          {/* <View></View>
          <View></View> */}
        </View>

        {/* title */}
        <View style={{flex:1, }}>
          <Text style={{color:'#7c858f', fontSize:16, fontWeight: 600}}>Delicious</Text>
          <Text style={{color:'#3c444c', fontSize:24 , fontWeight:800}}>Easy to cook menu</Text>
        </View>

        {/* search bar */}
        <View style={styles.searchContainer}>
          <TextInput
          style={{flex: 1, fontSize: 16 }}
            placeholder="Search your perfect recipe"
          />
        </View>

        {/* categories */}
        <View style={styles.categoriesContainer}>
          <Text style={{color:'#3c444c', fontSize:22 , fontWeight:700, marginBottom:15}}>Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories?.map(category => (
          <TouchableOpacity key={category.id} onPress={() => handlePress(category.id)}>
            <View style={[
              styles.category,
              selectedCategory === category.id ? styles.categorySelected : null,
            ]}>
              <Text style={[
                styles.textCategory,
                selectedCategory === category.id ? styles.textCategorySelected : null,
              ]}>{category.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
        </View>

        {/* popular */}
        <View style={styles.popularContainer}>

        </View>       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, 
    flexDirection: 'column',
    paddingTop: 40,
    paddingHorizontal:20,
    backgroundColor: '#faf9fc'
  },
  navContainer: {
    flex: 1,
    // backgroundColor:'#12df120',
    width:'100%'
  },
  searchContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius:15,
    paddingHorizontal: 18,
    paddingVertical:12,
    marginVertical:10,
    backgroundColor:'#ffffff'
  },
  categoriesContainer:{
    flex: 1,
    marginVertical: 10,
    // backgroundColor: 'pink'
  },
  category: {
    marginRight: 15,
    padding: 20, 
    backgroundColor: '#ffffff', 
    borderRadius: 20,
  },
  textCategory: {
    color:'#3c444c', 
    fontSize:15 , 
    fontWeight:500
  },
    categorySelected: {
    backgroundColor: '#F96163',
  },
    textCategorySelected: {
    color: 'white',
  },

});
