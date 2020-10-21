import React,{Component}from 'react';
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
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/myheader';

    export default class TeacherScreen extends Component{
        constructor(){
            super()
            this.state={
                subject:'',
                homework:'',
            }
        }
        dispalyData=async()=>{
            alert("homework assigned")
db.collection('Teacher').update({
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
    title="Teacher" navigation={this.props.navigation}
    ></MyHeader>


<Image source={ 
require('../assets/teacherimage.png') }
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
    placeholder=' assign homework'
multiline={true}
onChangeText={(text)=>{
    this.setState({
        homework:text
    })
}}
    >
</TextInput>

<TouchableOpacity 
style={styles.teacher}
onPress={()=>{
    this.dispalyData()
}}
>
<Text
style={styles.teacherText}
>Assign Homework</Text>
</TouchableOpacity>
</View>
            ) }
        
    }
    const styles = StyleSheet.create({
        teacher:{
    
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
              teacherText:{
    color:'black',
    alignText:'center',
    fontSize:20,
    fontWeight:'bold',
              },
    
    
    
    })