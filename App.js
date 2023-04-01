import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/title';
import Form from './src/components/Form';



export default function App() {

  
  return (
    <View style={styles.container}>

      <Title/>
      <Form/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    paddingTop:80
  },
  
});
