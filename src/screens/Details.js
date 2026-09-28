import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const jogadores = [
  {
    id: '1',
    nome: 'Tiago Luchtenberg',
    status: 'Disponível',
    imagem: require('../../assets/avatar-tiago.png'),
  },
  {
    id: '2',
    nome: 'Rodrigo Gonçalves',
    status: 'Ocupado',
    imagem: require('../../assets/avatar-rodrigo.png'),
  },
  {
    id: '3',
    nome: 'Diego Fernandes',
    status: 'Ocupado',
    imagem: require('../../assets/avatar-diego.png'),
  },
];

export default function Details({ onBack }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <FontAwesome5 name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Detalhes</Text>
        <TouchableOpacity>
          <FontAwesome5 name="share-alt" size={20} color="#E51C44" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
        <Image
          source={require('../../assets/banner-detalhes.png')}
          style={styles.banner}
        />
        <View style={styles.conteudo}>
          <Text style={styles.titulo}>Lendários</Text>
          <Text style={styles.descricao}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>

          
          <View style={styles.jogadoresTitulo}>
            <Text style={styles.jogadoresTituloTexto}>Jogadores</Text>
            <Text style={styles.jogadoresTotal}>Total 3</Text>
          </View>

          {jogadores.map((item) => (
            <View key={item.id} style={styles.jogador}>
              
              <Image
                source={item.imagem}
                style={styles.jogadorAvatar}
              />
              <Text style={styles.jogadorNome}>{item.nome}</Text>
              <View style={styles.jogadorStatusArea}>
                <View
                  style={[
                    styles.jogadorBolita,
                    {
                      backgroundColor:
                        item.status === 'Disponível' ? '#32BD50' : '#E51C44',
                    },
                  ]}
                />
                <Text style={styles.jogadorStatus}>{item.status}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

     
      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botao}>
          <FontAwesome5 name="discord" size={24} color="#fff" />
          <Text style={styles.botaoTexto}>Entrar na partida</Text>
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
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  iconHeader: {
    width: 20,
    height: 20,
  },
  iconDiscord: {
    width: 24,
    height: 24,
  },
  headerTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  banner: {
    width: '100%',
    height: 200,
    backgroundColor: '#1D2766',
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#DDE3F0',
    fontSize: 14,
    lineHeight: 22,
    marginTop: 8,
  },
  jogadoresTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 15,
  },
  jogadoresTituloTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  jogadoresTotal: {
    color: '#DDE3F0',
    fontSize: 13,
  },
  jogador: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171F52',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  jogadorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#0E1338',
  },
  jogadorNome: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 12,
  },
  jogadorStatusArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jogadorBolita: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  jogadorStatus: {
    color: '#DDE3F0',
    fontSize: 13,
  },
  rodape: {
    padding: 20,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E51C44',
    borderRadius: 8,
    height: 56,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});