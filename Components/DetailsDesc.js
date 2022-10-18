import { View, Text } from 'react-native'
import React from 'react'
import { EthPrice,NFTTitle } from './SubInfo'

import { useState } from 'react'
import { SIZES } from '../constants'
const DetailsDesc = ({data}) => {
  return (
    <>
    <View style={{
      width:'1005',
      flexDirection:'row',
      justifyContent:'space-between',
    }}>
      <NFTTitle>
        title={data.name}
        subTitle={data.creator}
        titleSize={SIZES.extraLarge}
        subTitleSize={SIZES.font}

      </NFTTitle>
    </View>
    </>
  )
}

export default DetailsDesc