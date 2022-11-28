import React from 'react'
import {SafeAreaView, View} from 'react-native';
import tw from '../../styles/tailwind';

interface IComponentWrapperProps {
    children: JSX.Element;
}

export default function ComponentWrapper(props: IComponentWrapperProps) {
  return (
    <SafeAreaView>
        <View style={tw`py-8 px-4`}>
            {props.children}
        </View>
    </SafeAreaView>
  )
}