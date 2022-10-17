import React from 'react'
import { useState } from 'react'
import { Text,SafeArea,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS,NFTData } from '../constants'
import { NFTCard,HomeHeader,FocusedStatusBar } from '../Components'
import { View } from 'react-native'


const Home = ({ navigation }) => {
  console.log( "hiiiiiiiiiiii" ,navigation );
  return (
   <SafeAreaView style={{flex:1}}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{flex:1}}>
        <View style={{zIndex:0}}>
          <FlatList 
            data={NFTData}
            renderItem={({item})=><NFTCard data={item} navigation={ navigation } />}
            keyExtractor={(item)=>item.id}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader/>}
          />
        </View>
        <View style={{
          position:'absolute',
          top:0,
          bottom:0,
          right:0,
          left:0,
          zIndex:-1
        }}>
          <View style={{height:300,background:COLORS.primary}} />
          <View style={{flex:1,background:COLORS.white}} />
        </View>
      </View>
   </SafeAreaView>
  )
}

export default Home;