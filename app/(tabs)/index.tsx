import React, { useState } from 'react';
import { View, Text, Button, StyleSheet ,TouchableOpacity} from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);
  const[TotalCount, setTotalCount] = useState(0);
const increamentCount = () => {
  setCount(count + 1);
  setTotalCount(TotalCount + 1);
}
const decreamentCount = () => {
  if (count > 0) {
    setCount(count - 1);
    setTotalCount(TotalCount + 1);
  }
}
const resetCount = () => {
  setCount(0);
  setTotalCount(0);
}


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Click-O-Meter</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Text style={styles.counter}>Total Clicks: {TotalCount}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttoninfoContainer} onPress={increamentCount}>
         <Text style={styles.buttonText}>👆 Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttoninfoContainer} disabled={count<=0 ? true:false} onPress={decreamentCount}>)}>
      <Text  style={styles.buttonText}>👇 Decrease</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoninfoContainer} onPress={resetCount}>
  <Text style={styles.buttonText} >🔄Reset</Text>
</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
   backgroundColor: 'red',

  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'space-between',
    gap: 10,
    
    height: 100,

  },
  buttoninfoContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 100,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 50,
  },
});
