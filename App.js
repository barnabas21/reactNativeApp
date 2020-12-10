import React from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import data from './models/Data'


/*function getDataUsingGet(){
  fetch('https://api.themoviedb.org/3/movie/122/videos?api_key=4cfb6a8cde1056e005bf8f84ff37f4a9&language=en-US', {
      method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
    var results =JSON.parse(JSON.stringify(responseJson)) ;
    var resultats = results.results[0];
    console.log(results.results[0].id);
    return resultats;
  })
  .catch((error) => {
      alert(JSON.stringify(error));
      console.error(error);
  });  
};*/


function Home({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.button} 
        onPress={()=>navigation.navigate("FilmsList")}>
        <Text style={styles.text}> Charger la liste </Text>  
      </TouchableOpacity>
    </View>
  )
}

function FilmsList({navigation}) {
  class AFilm extends React.Component{
    render(){
      var data = this.props.data;
      return(
        
        <View style={styles.container}>
          <TouchableOpacity style={styles.datalist} 
          onPress={
            ()=>navigation.navigate("FilmsDetail", { dataId: data.id, dataTitle: data.name, Site: data.site, Size: data.size})
            }>
            <Text style={styles.text}> {data.id} </Text>
            <Text style={styles.text}> {data.name} </Text>
            <Text style={styles.text}> {data.site} </Text>
            <Text style={styles.text}> {data.size} </Text> 
          </TouchableOpacity>
           
        </View>
      )
    }
  };
  
  
  return(
    <View style={styles.container}>
      <View style={styles.text}> 
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <AFilm data={item}/>}
          />  
      </View> 
    </View>

    /*<dataa/>*/
  )
  
}

function FilmsDetail({ route, navigation }) {


  const { dataId } = route.params;
  const { dataTitle, Size, Site } = route.params;
  const { dataCountry } = route.params;
  console.log(dataId);
  var date = Date().toString();
  console.log(date);
  return(
    <View style={styles.container}>
          <TouchableOpacity style={styles.datalist1}>
            <Text style={styles.text1}> ID: {dataId} </Text>
            <Text style={styles.text1}> Title : { dataTitle }</Text>
            <Text style={styles.text1}> Date : {Site} </Text>
            <Text style={styles.text1}> Country : { Size } </Text>
            
          </TouchableOpacity>
           
    </View>
  )
  

}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FilmsList" component={FilmsList} options={{ title: 'Films' }} />
        <Stack.Screen name="FilmsDetail" component={FilmsDetail} options={{ title: 'Infos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
    fontSize: 15,
  },
  text1: {
    color: "white",
    fontSize: 20,
    marginBottom:12
  },
  touchableOpacity:{
    backgroundColor: "gray"
  },
  button: {
    backgroundColor: "gray",
    height: 35,
    width: 200,
    justifyContent: 'center', 
    alignItems:'center'
  },
  datalist:{
    padding:10,
    margin: 5,
    justifyContent: 'center', 
    alignItems:'center',
    backgroundColor: "gray",
    width: 300,

  },
  datalist1:{
    padding:10,
    paddingLeft: 20,
    margin: 5,
    justifyContent: 'center', 
    alignItems:'flex-start',
    backgroundColor: "gray",
    width: 300,
    height: 270

  }
});
