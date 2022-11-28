import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import { IMAGE } from '../../images/image';
import tw from '../../styles/tailwind';

export default function SelectShuttleAndPickup() {
  return (
    <View>
    <View style={tw`bg-lightGray rounded-xl w-full`}>
        <Text
        style={tw`text-brownRed text-lg mt-2 font-bold`}
        >
        UMD Shuttle Service
        </Text>
        <Image source={IMAGE.STOPWAITING} style={tw`w-full`} />
    </View>
    <View style={tw`mt-8`}>
        <Text style={tw`text-slate-400 text-base`}>Select a shuttle</Text>
        <View style={tw`flex mt-4`}>
            <Pressable style={tw`w-full p-2 border border-1 rounded-md mb-4`}>
                <Text style={tw`text-xl text-center`}>Blue Shuttle</Text>
            </Pressable>
            <Pressable style={tw`p-2 border border-1 rounded-md`}>
                <Text style={tw`text-xl text-center`}>Maize Shuttle</Text>
            </Pressable>
        </View>
        <View style={tw`mt-4`}>
            <Text style={tw`text-slate-400 text-base`}>Pickup Location</Text>
            <Pressable style={tw`p-2 mt-2 border border-1 rounded-md`}>
                <Text style={tw`text-lg`}>Fairlane Woods</Text>
            </Pressable> 
        </View>
        <View style={tw`mt-12`}>
            <Pressable style={tw`p-2 rounded-md bg-main`}>
                <Text style={tw`text-lg text-black text-center`}>View Schedule</Text>
            </Pressable>
        </View>
    </View>
    </View>

  )
}
