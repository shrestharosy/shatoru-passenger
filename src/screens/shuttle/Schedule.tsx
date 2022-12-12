import { Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { parseTime } from 'src/libs/util/datetime';
import { IScheduleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IScheduleProps {
    index: number;
    schedule: IScheduleResponse;
}

const Schedule = (props: IScheduleProps) => {
    const { index, schedule } = props;

    return (
        <View>
            <View>
                <Text style={tw`mb-2`}>
                    {schedule.shuttle} runs from{' '}
                    {parseTime(schedule.start_time)} to{' '}
                    {parseTime(schedule.end_time)}
                </Text>
                <View style={tw`flex-row mb-3`}>
                    {schedule.days.map((day, index) => (
                        <View
                            key={`${day}-${index}`}
                            style={tw`flex-row justify-center items-center rounded-2xl bg-main shadow-sm mr-2 px-2 py-1`}
                        >
                            <Text style={tw`text-white text-xs`}>{day}</Text>
                        </View>
                    ))}
                </View>
                <ScrollView>
                    {schedule.schedule.map((s, index) => (
                        <View
                            key={`${s.time}-${index}`}
                            style={tw`flex flex-row pb-2`}
                        >
                            <Text
                                style={tw`flex-1 ${
                                    index === 0
                                        ? 'text-base'
                                        : 'text-base text-slate-600'
                                }`}
                            >
                                {s?.stop_name}
                            </Text>
                            <Text
                                style={tw`w-24 ${
                                    index === 0
                                        ? 'text-base'
                                        : 'text-base text-slate-600'
                                }`}
                            >
                                {parseTime(new Date(s.time))}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

export default Schedule;
