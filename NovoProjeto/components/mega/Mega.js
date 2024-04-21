import React from "react";
import { Button, Text, TextInput, View } from "react-native";
import estilo from "../estilo";

export default class Mega extends React.Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero(quantidade) {
    this.setState({ qtdeNumeros: +quantidade });
  }

  gerarNumeros() {
    qtd = this.state.qtdeNumeros;
    vetor = [];
    while (vetor.length < qtd) {
      temp = Math.round(Math.random() * 100);
      if (!vetor.includes(temp)) {
        vetor.push(temp);
      }
    }
    vetor.sort();
    console.log(vetor)
    this.setState({ numeros: vetor });
  }

  render() {
    return (
      <View>
        <Text style={estilo.textoGrande}>
          Gerador de Mega-Sena {this.state.qtdeNumeros}
        </Text>
        <TextInput
          keyboardType="numeric"
          placeholder="Qtde de Números"
          style={{ borderBottomWidth: 1 }}
          value={`${this.state.qtdeNumeros}`}
          onChangeText={(qtde) => this.alterarQtdeNumero(qtde)}
        />
        <Button title="Generate" onPress={() => this.gerarNumeros()}></Button>
      </View>
    );
  }
}
