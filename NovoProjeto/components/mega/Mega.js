import React from "react";
import { Text, TextInput, View } from "react-native";
import estilo from "../estilo";

export default class Mega extends React.Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
  };

  alterarQtdeNumero(quantidade) {
    this.setState({ qtdeNumeros: quantidade });
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
          value={this.state.qtdeNumeros}
          onChangeText={(qtde) => this.alterarQtdeNumero(qtde)}
        />
      </View>
    );
  }
}
