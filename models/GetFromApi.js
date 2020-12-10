import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Alert, View } from 'react-native';

class dataa extends React.Component{
       getDataUsingGet(){
        //GET request 
        fetch('https://api.themoviedb.org/3/movie/122/videos?api_key=4cfb6a8cde1056e005bf8f84ff37f4a9&language=en-US', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            var results =JSON.stringify(responseJson);
            console.log(results);
        })
        .catch((error) => {
            alert(JSON.stringify(error));
            console.error(error);
        });
      };
      render(){
          return(
            <View style={styles.MainContainer}>
                <Button title='Données :' onPress={this.getDataUsingGet}/>
            </View>
          )
      }
};
const styles = StyleSheet.create({
    MainContainer :{
      justifyContent: 'center',
      flex:1,
      margin: 10
    }
  });

export default dataa;

