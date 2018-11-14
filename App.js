import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      weight: 0,
      height: 0,
      bmi: 0
    }
  }

  statusBMI = (bmi) =>{
    if(bmi < 18.5){
      Alert.alert('You are underweight!');
    } else if(bmi >= 18.5 && bmi <= 24.9){
      Alert.alert('You are having a normal weight. Well done!');
    } else if(bmi >= 25 && bmi <= 29.9){
      Alert.alert('You are overweight!');
    } else if(bmi >= 30){
      Alert.alert('You are obese. Please watch your diet!');
    }
  }

  calculateBMI = () => {
    let totalBMI = Number((this.state.weight/Math.pow(this.state.height,2)) * 10000).toFixed(1);
    this.setState({bmi: totalBMI}, this.statusBMI(this.state.bmi));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        <Text style={styles.welcome}>BMI Calculator</Text>
        </View>
        <View style={styles.container}>
        <TextInput onChangeText={(weight) => this.setState({weight})} style={styles.instructions} placeholder='Weight in KG'/>
        <TextInput onChangeText={(height) => this.setState({height})} style={styles.instructions} placeholder='Height in CM'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={styles.container}>
        <Button color="#841584" onPress={this.calculateBMI} title='Calculate'/>
        <Text></Text>
        <Text style={styles.instructions}>BMI: {this.state.bmi}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
