import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet, Dimensions } from 'react-native'
import IconAnd from 'react-native-vector-icons/AntDesign';
const {buttonStyle,textButtonStyle} = StyleSheet.create({
    buttonStyle:{
        marginTop:10,
        width:Dimensions.get('window').width/3,
        height:50,
        padding:10,
        backgroundColor:'#9999FF',
        alignItems:'center',
        borderRadius:5
    },
    textButtonStyle: {
        color:'#fff',
        fontSize:20
    }
})
export default class Home extends Component {

    state = {
        email:''
    }

    redirectHomeScreen = () => {
        let {navigation} = this.props;
        navigation.navigate('login');
    }
    
    componentDidMount() {
        let {navigation,route} = this.props;
        // console.log(this.props)
        //Lấy params dựa vào this.props.route
        let {email} = route.params;
        this.setState({
            email:email
        })
    }


    render() {
        console.log(this.props)
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>{this.state.email}</Text>
                <TouchableOpacity onPress={this.redirectHomeScreen}>
                    <View style={[buttonStyle]}><Text style={[textButtonStyle]}>Login</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('register')}}>
                    <View style={[buttonStyle]}><Text style={[textButtonStyle]}>Register</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <View style={[buttonStyle]}><Text style={[textButtonStyle]}><IconAnd name='menufold' size={30} /></Text></View>
                </TouchableOpacity>
            </View>
        )
    }
}
