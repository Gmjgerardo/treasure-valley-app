import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Animated, ScrollView, Dimensions, TouchableOpacity, SafeAreaView} from 'react-native';
import {assets} from './assets/information'

const {width} = Dimensions.get('window')
export default function () {
  const images = assets
  return (
    <SafeAreaView style={{flex: 0, backgroundColor: 'transparent'}}>
      <View style={styles.container}>
        <ScrollView
            style={{flex: 1, alignSelf: 'stretch'}}
            pagingEnabled
            onMomentumScrollBegin={() => {}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
        >
            {
              images.map((x, i) =>
                  <View style={{flex: 1}} key={x.id}>
                      <View style={styles.header}>
                          <Text>{x.title}</Text>
                      </View>
                  </View>
              )
            }

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header:{
    
      height: 'auto',
      width,
      paddingHorizontal: 'auto',
      justifyContent: 'center',
      alignContent: 'center',
      margin: 20
  }
});
