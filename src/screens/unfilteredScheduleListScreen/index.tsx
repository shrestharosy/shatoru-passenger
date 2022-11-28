import React,{useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import ComponentBackButton from '../../components/component-backButton';
import ComponentWrapper from '../../components/component-wrapper';
import tw from '../../styles/tailwind';

interface IScheduleListProps {
    time: any;
    location: string;
}

export default function UnfilteredScheduleList() {
    const [scheduleList, setScheduleList] = useState<IScheduleListProps[]>([
        { time: '12:00 AM', location: 'Fairlane Woods' },
        { time: '12:10 AM', location: 'Fairlane Meadows' },
        { time: '12:20 AM', location: 'University Center' },
        { time: '12:30 AM', location: 'Fairlane Apartment' },
        { time: '12:40 AM', location: 'Fairlane Woods' },
        { time: '12:50 AM', location: 'Fairlane Meadows' },
        { time: '1:00 AM', location: 'University Center' },
        { time: '1:10 AM', location: 'Fairlane Apartment' },
    ]);
  return (
    <ComponentWrapper>
        <View>
        <ComponentBackButton/>
        <View style={tw`mt-8`}>
                    <Text style={tw`text-2xl text-slate-400`}>
                        Select a schedule.
                    </Text>
                    <View style={tw`flex flex-row mt-2`}>
                        <Pressable style={tw`flex-1 bg-main p-4 border border-1 rounded-md mr-2`}>
                            <Text style={tw`text-xl`}>Blue Shuttle</Text>
                        </Pressable>
                        <Pressable style={tw`flex-1 border border-1 p-4 rounded-md`}>
                            <Text style={tw`text-xl`}>Maize Shuttle</Text>
                        </Pressable>
                    </View>
        </View>
        <View style={tw`mt-6`}>
                    <Text style={tw`text-2xl mb-4`}>Details</Text>
                    {scheduleList?.map(
                        (item: IScheduleListProps, index: number) => (
                            <View key={index} style={tw`flex flex-row pb-2`}>
                                <Text
                                    style={tw`w-24 ${
                                        index === 0
                                            ? 'text-xl'
                                            : index > 3
                                            ? 'text-sm text-slate-500'
                                            : 'text-lg text-slate-400'
                                    }`}
                                >
                                    {item?.time}
                                </Text>
                                <Text
                                    style={tw`flex-1 ${
                                        index === 0
                                            ? 'text-xl'
                                            : index > 3
                                            ? 'text-sm text-slate-500'
                                            : 'text-lg text-slate-400'
                                    }`}
                                >
                                    {item?.location}
                                </Text>
                            </View>
                        )
                    )}
                </View>
        </View>
    </ComponentWrapper>
  )
}
