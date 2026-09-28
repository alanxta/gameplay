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

const partidas = [
  {
    id: '1',
    jogo: 'Lendários',
    categoria: 'Ranqueada',
    data: '18/06 às 21:00h',
    status: 'Anfitrião',
    imagem: require('../../assets/banner-lol.png'),
  },
  {
    id: '2',
    jogo: 'Yeah, boy',
    categoria: 'Diversão',
    data: '23/06 às 19:00h',
    status: 'Visitante',
    imagem: require('../../assets/banner-rdr.png'),
  },
  {
    id: '3',
    jogo: 'Rumo ao topo',
    categoria: '1x1',
    data: '20/06 às 09:00h',
    status: 'Anfitrião',
    imagem: require('../../assets/banner-csgo.png'),
  },
  {
    id: '4',
    jogo: 'Bora queimar tudo',
    categoria: 'Ranqueada',
    data: '20/06 às 14:20h',
    status: 'Anfitrião',
    imagem: require('../../assets/banner-apex.png'),
  },
  {
    id: '5',
    jogo: 'Valorosos',
    categoria: 'Diversão',
    data: '10/06 às 21:00h',
    status: 'Anfitrião',
    imagem: require('../../assets/banner-valorant.png'),
  },
];

export default function Home({ onOpenDetails, onSchedule }) {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Image
          source={require('../../assets/avatar.png')}
          style={styles.avatar}
        />
        <View style={styles.headerTextos}>
          <Text style={styles.saudacao}>Olá, Tiago</Text>
          <Text style={styles.mensagem}>Hoje é dia de vitória</Text>
        </View>
        <TouchableOpacity style={styles.botaoMais} onPress={onSchedule}>
          <FontAwesome5 name="plus" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        
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

        
        <View style={styles.listaTitulo}>
          <Text style={styles.listaTituloTexto}>Partidas agendadas</Text>
          <Text style={styles.listaTotal}>Total 6</Text>
        </View>

       
        {partidas.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.partida}
            onPress={onOpenDetails}
          >
            <Image source={item.imagem} style={styles.partidaImagem} />
            <View style={styles.partidaInfos}>
              <Text style={styles.partidaJogo}>{item.jogo}</Text>
              <View style={styles.partidaLinha}>
                <FontAwesome5 name="calendar" size={12} color="#E51C44" />
                <Text style={styles.partidaData}> {item.data}</Text>
              </View>
            </View>
            <View style={styles.partidaLado}>
              <Text style={styles.partidaCategoria}>{item.categoria}</Text>
              <View style={styles.partidaLinha}>
                <FontAwesome5
                  name="user"
                  size={12}
                  color={item.status === 'Anfitrião' ? '#E51C44' : '#32BD50'}
                />
                <Text
                  style={[
                    styles.partidaStatus,
                    {
                      color:
                        item.status === 'Anfitrião' ? '#E51C44' : '#32BD50',
                    },
                  ]}
                >
                  {' '}
                  {item.status}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    marginBottom: 25,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#1D2766',
  },
  headerTextos: {
    flex: 1,
    marginLeft: 15,
  },
  saudacao: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  mensagem: {
    color: '#DDE3F0',
    fontSize: 14,
    marginTop: 2,
  },
  botaoMais: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#E51C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categorias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoriaIcone: {
    width: 38,
    height: 38,
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
    marginTop: 10,
  },
  listaTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  listaTituloTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listaTotal: {
    color: '#DDE3F0',
    fontSize: 13,
  },
  partida: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#171F52',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
  },
  partidaImagem: {
    width: 55,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#0E1338',
  },
  partidaInfos: {
    flex: 1,
    marginLeft: 15,
  },
  partidaJogo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  partidaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  partidaData: {
    color: '#DDE3F0',
    fontSize: 12,
  },
  partidaLado: {
    alignItems: 'flex-end',
  },
  partidaCategoria: {
    color: '#ABB1CC',
    fontSize: 13,
    marginBottom: 8,
  },
  partidaStatus: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});