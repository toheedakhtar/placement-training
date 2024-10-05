import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal } from 'react-native';

let count = 0

export default function App() {

  const [open, setOpen] = useState(false)

  return (
    // <View style={styles.container}>

    <View style={{backgroundColor: "red", flex:1, padding : 30}}>
      <ScrollView>
      <Text>Hello Techno</Text>
      <Image source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 400 , height : 400}} />

      {/* <ImageBackground source={{uri : "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?cs=srgb&dl=clouds-conifer-daylight-371589.jpg&fm=jpg"}} style={{width : 400 , height : 400}}>
      
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>
      <Text>Hello Techno</Text>

      </ImageBackground> */}

      {/* <Text style={{fontSize: 40, color: "red" }}>This is a text</Text> */}

      <Button title='Click Me' onPress={()=>{count++ ; console.log('Button Clicked', count)}} />

      <Pressable style={{backgroundColor:"green", padding : 20, fontSize:30, color:"white"}} onPress={()=> {console.log("Pressable Component")}}><Text>Pressable Component</Text></Pressable>

      <Button title='Open Model' onPress={()=>(setOpen(true))}/>
      <Modal visible={open} animationType='slide'>
      <View style={{padding:50}}>
        <Button title='Close Model' onPress={()=>{setOpen(false)}} />
      </View>
      </Modal>

      <View style={{backgroundColor:"pink", width: 300, height: 300, borderWidth:10, borderRadius:20}}>
        <Text style={{backgroundColor:"green", padding:20, color: "white" }}>Box</Text>
      </View>

    </ScrollView>
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
