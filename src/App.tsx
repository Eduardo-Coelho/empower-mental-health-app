import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [clicks, setclicks] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text> Count: {clicks} </Text>
      <Button title={'Click Me!!'} onPress={() => setclicks(clicks + 1)} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
