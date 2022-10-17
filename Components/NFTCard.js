import { View, Text ,Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {COLORS,SIZES,SHADOWS,assets} from '../constants'
import { CircleButton } from './Button'
import { SubInfo,EthPrice,NFTTitle } from './SubInfo'
import { RectButton } from '../Components/Button'


const NFTCard =({data ,navigation}) => {
  return (
    <View style={{
      backgroundColor:"lightblue",
      borderRadius:SIZES.font,
      marginBottom:SIZES.extraLarge,
      margin:SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{width:'100%',height:250}} >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width:"100%",
            height:"100%",
            borderTopLeftRadius:SIZES.font,
            borderTopRightRadius:SIZES.font,
          }}
          />
          <CircleButton  imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo/>
      <View style={{
        width:'100%',
        padding:SIZES.font
      }}
      >
        <NFTTitle
         title={data.name}
         subTitle={data.creater}
         titleSize={SIZES.large}
         subTitleSize={SIZES.small}
         />
         <View style={{ marginTop:SIZES.font,flexDirection:"row",justifyContent:"space-between", alignItems:'center'}}>
            <EthPrice EthPrice={data.price}/>
            <RectButton 
              minWidth={120}
              fontSize={SIZES.font}
              handlePress={()=>{
                console.log("pressed");
                navigation.navigate("Details");}}
            />
         </View>
      </View>
      
    </View>
  )
}

export default NFTCard