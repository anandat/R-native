import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, createStackNavigator, createRootNavigator, createAppContainer ,createBottomTabNavigator, withNavigation} from 'react-navigation';
import {Icon} from 'react-native-elements';

import Bookcase from './screens/bookcase';
import Explore from './screens/explore';
import AddBook from './screens/addBook';
import Lists from './screens/lists';
import Profile from './screens/profile';
import EditBook from './screens/editBook'

let screen = Dimensions.get('window');

 const Tabs = createBottomTabNavigator({
    'Bookcase': {
        screen: Bookcase,
        navigationOptions: {
            tabBarLabel: 'Meetings',
            tabBarIcon: ({tintColor}) => <Icon name="open-book" type="entypo" size={28} color={tintColor}/>
        },
    },
    'Explore': {
        screen: Explore,
        navigationOptions: {
            tabBarLabel: 'Survey',
            tabBarIcon: ({tintColor}) => <Icon name="ios-map" type="ionicon" size={28} color={tintColor}/>
        },
    },
    'Add Book': {
        screen: AddBook,
        navigationOptions: {
            tabBarLabel: 'Reports',
            tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle-outline" type="ionicon" size={28}
                                               color={tintColor}/>
        },
    },
    'Lists': {
        screen: Lists,
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({tintColor}) => <Icon name="list" type="entypo" size={28} color={tintColor}/>
        },
    },
    'My Profile': {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({tintColor}) => <Icon name="ios-person" type="ionicon" size={28} color={tintColor}/>
        },
    },
});



 const RootStack = createStackNavigator({
    Bookcase: {
        screen: Bookcase,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },

    EditBook: {
        screen: EditBook,
        navigationOptions: ({navigation}) => ({
            header: null,
            tabBarVisible: false,
            gesturesEnabled: false
        }),
    },
});

export default createAppContainer(createBottomTabNavigator({
    Tabs,
    RootStack,
   
}));

// const RootNavigator = createRootNavigator ({
    
        
//             Tabs: {
//                 screen: Tabs,
//                 navigationOptions: ({navigation}) => ({
//                     gesturesEnabled: false,
//                 })
//             },
//             BookcaseStack: {
//                 screen: BookcaseStack,
//                 navigationOptions: ({navigation}) => ({
//                     gesturesEnabled: false,
//                 })
//             },

        
   
// });

