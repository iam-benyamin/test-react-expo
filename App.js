import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => (console.log("like handle press!"))

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress} >Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World! Hello, World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50
  },
});
