import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  //STORING THE BACKGROUND COLOR
  const [bgColor, setBgColor] = useState('#FF9F43');

  //LOGIC FOR GENERATING RANDOM BACKGROUND COLOR
  const generateColor = () => {
    let color = '#';
    let hex = '0123456789ABCDEF';

    for (let i = 0; i < 6; i++) {
      let ind = Math.floor(Math.random() * 16);
      color += hex.charAt(ind);
    }

    setBgColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <TouchableOpacity onPress={generateColor} style={styles.btn}>
          <Text style={styles.btnText}>Change Color</Text>
        </TouchableOpacity>
        <Text selectable style={styles.result}>
          {bgColor}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 190,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 9,
    backgroundColor: '#c8d6e5',
  },
  btnText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000000',
    opacity: 1,
  },
  result: {
    backgroundColor: '#c8d6e5',
    color: '#000000',
    fontSize: 16,
    paddingHorizontal: 17,
    paddingVertical: 2,
  },
});

export default App;
