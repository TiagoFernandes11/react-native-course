import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import estilo from "../estilo";

export default class Mega extends React.Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    shouldShow: false,
    numeros: [],
  };

  alterarQtdeNumero(quantidade) {
    this.setState({ qtdeNumeros: +quantidade });
  }

  gerarNumeros() {
    qtd = this.state.qtdeNumeros;
    vetor = [];
    while (vetor.length < qtd) {
      temp = Math.round(Math.random() * 60) + 1;
      if (!vetor.includes(temp)) {
        vetor.push(temp + " ");
      }
    }
    vetor = vetor.sort();
    this.setState({ numeros: vetor });
    this.state.shouldShow = true;
  }

  render() {
    return (
      <View>
        <Text style={estilo.textoGrande}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Qtde de Números"
          style={{ borderBottomWidth: 1 }}
          value={`${this.state.qtdeNumeros}`}
          onChangeText={(qtde) => this.alterarQtdeNumero(qtde)}
        />
        <Button title="Generate" onPress={() => this.gerarNumeros()}></Button>
        {this.state.shouldShow ? (
          <Text>
            Resultado:
            {this.state.numeros}
          </Text>
        ) : null}
      </View>
    );
  }
}
