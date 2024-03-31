import { StyleSheet, Text, View, SafeAreaView, Button, Platform, StatusBar } from 'react-native';

export default function App() {
  console.log(StatusBar.currentHeight)
  const handlePress = () => (console.log("like handle press!"))

  return (
    <SafeAreaView style={styles.container}>
      <Button title="tab me" onPress={() => (alert("button tabed"))} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
