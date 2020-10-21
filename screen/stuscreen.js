import React,{Component}from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import MyHeader from '../components/myheader';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import firebase from 'firebase';

    import db from '../config';

    export default class StuScreen extends Component{
        constructor(){
            super()
            this.state={
                subject:'',
                homework:'',
            }
        }
        dispalyData=async()=>{
            alert("homework submitted")
db.collection('Student').update({
    'Subject':this.state.subject,
    'Homework':this.state.homework
})

            this.setState({
                subject:'',
                homework:''
            })
        }
        render(){
            return(
                
<View> 
<MyHeader 
title="Student" navigation={this.props.navigation}
>

</MyHeader>
<Image source={ 
require('../assets/student2.png') }
style={{width:100,
height:100}}
/>   
    <TextInput
    placeholder='enter subject name'
maxLength={12}
onChangeText={(text)=>{
    this.setState({
        subject:text
    })
}}
    >
</TextInput>

<TextInput
    placeholder=' submit  your homework'
multiline={true}
onChangeText={(text)=>{
    this.setState({
        homework:text
    })
}}
    >
</TextInput>

<TouchableOpacity 
style={styles.stu}
onPress={()=>{
    this.dispalyData()
}}
>
<Text
style={styles.stuText}
>Submit</Text>
</TouchableOpacity>
</View>
            ) }
        
    }
    const styles = StyleSheet.create({
        stu:{
    
            backgroundColor:'white',
            width:'60%',
            justifyContent:'center',
            marginLeft:50,
         alignItems:'center',
         height:80,
         borderRadius:50,
         borderWidth:4,
    
        },
        
            container:{
                flex:1,
                backgroundColor:'#000000',
                alignItems: 'center',
                justifyContent: 'center'
              },
              stuText:{
    color:'black',
    alignText:'center',
    fontSize:20,
    fontWeight:'bold',
              },
    
    
    
    })