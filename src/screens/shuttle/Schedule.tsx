import { Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import CustomMultiSelect from 'src/components/form/CustomMultiSelect';
import { parseTime } from 'src/libs/util/datetime';
import {
    IOption,
    IScheduleObject,
    IScheduleResponse,
} from 'src/services/shuttle/shuttle.type';
import tw from 'src/styles/tailwind';

interface IScheduleProps {
    schedule: IScheduleResponse;
}

interface IStop {
    stop_abbr: string;
    stop_name: string;
}

const Schedule = (props: IScheduleProps) => {
    const { schedule } = props;

    const [stops, setStops] = useState<Array<IOption>>([]);
    const [schedules, setSchedules] = useState<Array<IScheduleObject>>([]);
    const [selectedOptions, setSelectedOptions] = React.useState<Array<string>>(
        []
    );

    useEffect(() => {
        const uniqueScheduleStops = [
            ...new Map(schedule.schedule.map((s) => [s.stop_name, s])).values(),
        ];
        const uniqueStops = uniqueScheduleStops.map((schedule) => ({
            value: schedule.stop_abbr,
            label: schedule.stop_name,
        }));
        setStops(uniqueStops);
        setSchedules(schedule.schedule);
    }, [schedule]);

    useEffect(() => {
        if (selectedOptions.length > 0) {
            setSchedules(
                schedule.schedule.filter((s) =>
                    selectedOptions.includes(s.stop_abbr)
                )
            );
        } else {
            setSchedules(schedule.schedule);
        }
    }, [selectedOptions]);

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
                <View style={tw`mb-4`}>
                    <CustomMultiSelect
                        options={stops}
                        showSelectedOptionsAsTags={true}
                        selectedOptions={selectedOptions}
                        onChange={(item) => {
                            setSelectedOptions(item);
                        }}
                    />
                </View>
                <ScrollView>
                    {schedules.map((s, index) => (
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
