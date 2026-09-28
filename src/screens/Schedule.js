import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Schedule({ onBack }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Agendar partida</Text>
        <View style={{ width: 20 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Text style={styles.label}>Categoria</Text>
        <View style={styles.categorias}>
          <TouchableOpacity style={styles.categoriaCard}>
            <Image
              source={require('../../assets/Ranqueada.png')}
              style={styles.categoriaIcone}
            />
            <Text style={styles.categoriaNome}>Ranqueada</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaCard}>
            <Image
              source={require('../../assets/espadas.png')}
              style={styles.categoriaIcone}
            />
            <Text style={styles.categoriaNome}>Duelo 1x1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoriaCard}>
            <Image
              source={require('../../assets/diversao.png')}
              style={styles.categoriaIcone}
            />
            <Text style={styles.categoriaNome}>Diversão</Text>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.label}>Servidor</Text>
        <TouchableOpacity style={styles.servidor}>
          <Text style={styles.servidorTexto}>Selecione um servidor</Text>
          <FontAwesome5 name="chevron-right" size={14} color="#ABB1CC" />
        </TouchableOpacity>

        
        <View style={styles.linhaDataHora}>
          <View style={{ flex: 1, marginRight: 30 }}>
            <Text style={styles.label}>Dia e mês</Text>
            <View style={styles.dataHora}>
              <TextInput
                style={styles.inputDataHora}
                keyboardType="numeric"
                maxLength={2}
              />
              <Text style={styles.barra}>/</Text>
              <TextInput
                style={styles.inputDataHora}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>Hora e minuto</Text>
            <View style={styles.dataHora}>
              <TextInput
                style={styles.inputDataHora}
                keyboardType="numeric"
                maxLength={2}
              />
              <Text style={styles.barra}>:</Text>
              <TextInput
                style={styles.inputDataHora}
                keyboardType="numeric"
                maxLength={2}
              />
            </View>
          </View>
        </View>

       
        <View style={styles.descricaoTitulo}>
          <Text style={styles.label}>Descrição</Text>
          <Text style={styles.maxCaracteres}>Max 100 caracteres</Text>
        </View>
        <TextInput
          style={styles.inputDescricao}
          multiline
          maxLength={100}
        />
      </ScrollView>

      
      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.botaoTexto}>Agendar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1338',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  label: {
    color: '#DDE3F0',
    fontSize: 15,
    marginBottom: 10,
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoriaIcone: {
    width: 36,
    height: 36,
    marginBottom: 8,
  },
  categoriaCard: {
    width: '31%',
    height: 110,
    borderRadius: 8,
    backgroundColor: '#1D2766',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriaNome: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 8,
  },
  servidor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1D2766',
    borderRadius: 8,
    height: 60,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  servidorTexto: {
    color: '#ABB1CC',
    fontSize: 15,
  },
  linhaDataHora: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dataHora: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputDataHora: {
    flex: 1,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#1D2766',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  barra: {
    color: '#ABB1CC',
    fontSize: 18,
    marginHorizontal: 8,
  },
  descricaoTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  maxCaracteres: {
    color: '#ABB1CC',
    fontSize: 12,
    marginBottom: 10,
  },
  inputDescricao: {
    height: 110,
    borderRadius: 8,
    backgroundColor: '#1D2766',
    color: '#fff',
    padding: 15,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  rodape: {
    paddingVertical: 15,
  },
  botao: {
    backgroundColor: '#E51C44',
    borderRadius: 8,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});