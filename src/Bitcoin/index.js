import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

//import do arquivo api
import api from '../services/api';

class Bitcoin extends Component {
    constructor(){
        super();

        //criando as variaveis de estado
        this.state = {
            vbitcoin: 0
        }

        //Precisamos fazer um bind para que os métodos possam acessar os states e as props
        this.consultaPrecoBitcoin = this.consultaPrecoBitcoin.bind(this);
    }
    //Manipulando o componentDidMount para fazer a requisição
    async componentDidMount(){
        const response = await api.get('ticker');

        let valor = response.data.BRL['buy'];
        this.setState({
            vbitcoin: valor
        });
    }
    //Criando o método para consultar o preco do bitcoin
    async consultaPrecoBitcoin(){
        const response = await api.get('ticker');
        let valor = response.data.BRL['buy'];
        this.setState({
            vbitcoin: valor
        });

        alert('preço atualizado!');
    }
    //Construindo a interface gráfica
    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bitcoin.png')} style={{width:400, height:119}} resizeMode='center'/>
                <Text style={styles.textoBitcoin}>R$ {this.state.vbitcoin}</Text>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Atualizar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Bitcoin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBitcoin:{
        fontSize: 32,
        color: '#363636',
    },

    botao:{
        backgroundColor: '#FFA500',
        marginTop:50,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    textoBotao:{
        fontSize: 32,
        color: '#fff',
    },
});