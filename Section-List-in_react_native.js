import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

// Make SectionData with Array
// Use SectionList
// Render Item and Header

export default App = () => {

  const users = [
    {
      id: 1,
      name: "sam",
      data: ["css", "java", "php"]
    },
    {
      id: 2,
      name: "roham",
      data: ["html", "react", "php"]
    },
    {
      id: 3,
      name: "bros",
      data: ["java", "bootstrap", "php"]
    },

  ]

  return (
    <View style={{ marginTop: 40 }}>
      <Text>Hello,World!</Text>
      <SectionList 
      sections={users}
      renderItem={ ({item})=><Text style={{fontSize:20, marginLeft:10}}> {item} </Text> } 
      renderSectionHeader={({section:{name}})=> <Text style={{fontSize:25 , color:'red'}}>{name}</Text>} />

    </View>
  )
}