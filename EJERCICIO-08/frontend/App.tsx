import { useEffect, useState } from 'react';
import { Button, FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';

type Cancion = { id: number; titulo: string; artista: string };
type Playlist = { id: number; nombre: string; canciones: Cancion[] };
const API_URL = 'http://192.168.1.41:3000';

export default function App() {
  const [playlist, setPlaylist] = useState<Playlist | null>(null);
  const [titulo, setTitulo] = useState('');
  const [artista, setArtista] = useState('');

  async function cargar() {
    const r = await fetch(API_URL + '/playlists/1');
    setPlaylist(await r.json());
  }
  useEffect(() => {
    cargar();
  }, []);

  async function anadirCancion() {
    if (!playlist) return;
    await fetch(API_URL + '/playlists/canciones', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        titulo: titulo || 'Nueva Canción',
        artista: artista || 'Artista',
        playlistId: playlist.id,
      }),
    });
    setTitulo('');
    setArtista('');
    cargar();
  }

  if (!playlist) return <Text>Cargando...</Text>;

  return (
    <SafeAreaView>
      <Text>🎵 {playlist.nombre}</Text>
      <TextInput
        placeholder="Título de la canción"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        placeholder="Artista"
        value={artista}
        onChangeText={setArtista}
      />
      <Button title="Añadir canción" onPress={anadirCancion} />
      <FlatList
        data={playlist.canciones}
        keyExtractor={(x) => String(x.id)}
        renderItem={({ item }) => (
          <View>
            <Text>{item.titulo}</Text>
            <Text>{item.artista}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
