import { ListItem, Text } from '@rneui/themed';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { parseTime } from 'src/libs/util/datetime';
import { IScheduleResponse } from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IScheduleListRowProps {
    index: number;
    schedule: IScheduleResponse;
    onDelete: (id: string) => Promise<void>;
}

const ScheduleListRow = (props: IScheduleListRowProps) => {
    const { index, schedule, onDelete } = props;

    return (
        <ScrollView>
            <ListItem.Content>
                <Text style={tw`mb-2`}>{schedule.shuttle}</Text>
                <Text style={tw`mb-2`}>
                    From {parseTime(schedule.start_time)} to{' '}
                    {parseTime(schedule.end_time)}
                </Text>
                <View style={tw`flex-row justify-between`}>
                    {schedule.days.map((day, index) => (
                        <View
                            key={`${day}-${index}`}
                            style={tw`flex-row justify-center items-center rounded-2xl bg-main shadow-sm mr-2 px-2 py-2`}
                        >
                            <Text style={tw`text-white`}>{day}</Text>
                        </View>
                    ))}
                    {/* <Text style={tw`ml-12`}>
                            {parseTime(new Date(schedule.start_time))} -{' '}
                            {parseTime(new Date(schedule.end_time))}
                        </Text> */}
                </View>
                {schedule.schedule.map((s) => (
                    <View style={tw`flex-row justify-between p-2 mt-2`}>
                        <Text>{s.stop_abbr}</Text>
                        <Text style={tw`ml-5`}>
                            {parseTime(new Date(s.time))}
                        </Text>
                    </View>
                ))}
            </ListItem.Content>
        </ScrollView>
    );
};

export default ScheduleListRow;
