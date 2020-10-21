import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import TeacherScreen from '../screen/teacherscreen';
import StuScreen from '../screen/stuscreen';




export const AppTabNavigator = createBottomTabNavigator({
    subject : {
    screen: StuScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/student.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Student",
    }
  },
  homework: {
    screen: TeacherScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/teacher2.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Teacher",
    }
  }
});