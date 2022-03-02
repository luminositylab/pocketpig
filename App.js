import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Level1 from './components/Level1'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Pocket Pig is ready for development! :)</Text> */}
      <Level1/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 0
  },
});
