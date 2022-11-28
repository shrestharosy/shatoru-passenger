import React from 'react';
import { View, Image, Text } from 'react-native';
import tw from '../../styles/tailwind';
import { IMAGE } from '../../images/image';

export default function ComponentBackButton() {
    return (
        <View style={tw`w-full flex flex-row`}>
            <View style={tw`w-8 rounded-full`}>
                <Image
                    source={IMAGE.LEFTARROW}
                    style={tw`w-6 h-4`}
                />
            </View>
            <Text style={tw`w-32`}>Back</Text>
        </View>
    );
}
