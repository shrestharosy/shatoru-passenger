import React,{useState} from 'react';
import {View,Text,Image} from 'react-native';
import ComponentBackButton from '../../components/component-backButton';
import ComponentWrapper from '../../components/component-wrapper';
import { IMAGE } from '../../images/image';
import tw from '../../styles/tailwind';
import { IScheduleListProps } from '../unfilteredScheduleListScreen';

export default function FilteredScheduleList() {
    const [scheduleList, setScheduleList] = useState<IScheduleListProps[]>([
        { time: '12:00 PM', location: 'Fairlane Woods' },
        { time: '12:50 PM', location: 'Fairlane Woods' },
        { time: '01:40 PM', location: 'Fairlane Woods' },
        { time: '02:20 PM', location: 'Fairlane Woods' },
    ]);
  return (
    <View>
        <View>
            <ComponentBackButton/>
            <View style={tw`rounded-xl w-full mt-2`}>
                <Image source={IMAGE.BUS} style={tw`mx-auto`} />
             </View>
            <View>
                  <Text style={tw`text-slate-400 text-center mt-4 text-lg font-semibold`}>Blue shuttle arrives Fairlane woods at</Text>
                <Text style={tw`font-bold text-6xl mt-4 text-center`}>8:00</Text>
            </View>
            <View style={tw`mt-6`}>
                    <Text style={tw`text-2xl mb-4 font-bold`}>Details</Text>
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
    </View>

  )
}
