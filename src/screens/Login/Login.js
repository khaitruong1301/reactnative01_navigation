import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native'

const { textInputStyle, titleStyle, buttonStyle, textButtonStyle } = StyleSheet.create({
    textInputStyle: {
        borderBottomWidth: 3,
        borderBottomColor: '#9999FF',
        width: Dimensions.get('window').width * 0.75,
        fontSize: 20,
        marginTop: '5%'
    },
    titleStyle: {
        fontSize: 50,
        alignContent: 'center'
    }, buttonStyle: {
        marginTop: 10,
        width: Dimensions.get('window').width / 3,
        height: 50,
        padding: 10,
        backgroundColor: '#9999FF',
        alignItems: 'center',
        borderRadius: 5
    },
    textButtonStyle: {
        color: '#fff',
        fontSize: 20
    }
})
export default class Login extends Component {

    state = {
        email: 'Cybersoft@gmail.com',
        password: 'Cybersoft@123'
    }

    handleSubmit = () => {
        let {navigation,route} = this.props;
        let { email, password } = this.state;
        if (email == 'Cybersoft@gmail.com' && password == 'Cybersoft@123') {
            Alert.alert('Thông báo', 'Đăng nhập thành công !');
            navigation.navigate('home',{params:{email:email}})
        } else {
            Alert.alert('Thông báo', 'Email hoặc mật khẩu không đúng!');

        }
    }
    handleChangeText = (name, value) => {
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[titleStyle]}> Login </Text>
                <TextInput defaultValue={this.state.email} style={[textInputStyle]} placeholder='email' onChangeText={(value) => {
                    this.handleChangeText('email', value)
                }} />
                <TextInput defaultValue={this.state.password} secureTextEntry={true} style={[textInputStyle]} placeholder='password' onChangeText={(value) => {
                    this.handleChangeText('email', value)

                }} />
                <TouchableOpacity onPress={this.handleSubmit}>
                    <View style={[buttonStyle]}><Text style={[textButtonStyle]}>Login</Text></View>
                </TouchableOpacity>
            </View>
        )
    }
}
