import React from 'react'
import {SafeAreaView, View} from 'react-native';
import tw from '../../styles/tailwind';

interface IComponentWrapperProps {
    children: JSX.Element;
}

export default function ComponentWrapper(props: IComponentWrapperProps) {
  return (
    <SafeAreaView>
        <View style={tw`py-6 px-2`}>
            {props.children}
        </View>
    </SafeAreaView>
  )
}