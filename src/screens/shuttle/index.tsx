import { Card, Text } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IScheduleResponse } from 'src/services/shuttle/shuttle.type';
import ScheduleListRow from './ScheduleListRow';

interface IScheduleProps extends IRouteProps {}

const Schedule = (props: IScheduleProps) => {
    const [schedules, setSchedules] = useState<Array<IScheduleResponse>>([]);
    const [isLoading, setIsLoading] = useState(false);

    const { navigation } = props;

    useEffect(() => {
        const scheduleIds: Array<string> = props?.route?.params?.scheduleIds;
        if (scheduleIds) {
            request(scheduleIds);
        }
    }, []);

    const request = async (scheduleIds: Array<string>) => {
        try {
            await fetchSchedules(scheduleIds);
        } catch (error) {
            alert('Error while fetching schedule. Please try again later');
        }
    };

    const onDelete = async (id: string) => {};

    const fetchSchedules = async (scheduleIds: Array<string>) => {
        try {
            let schedulesList: Array<IScheduleResponse> = [];

            await Promise.all(
                scheduleIds.map(async (scheduleId) => {
                    const schedule = await fetchSchedule(scheduleId);
                    schedulesList.push(schedule);
                    return schedule;
                })
            );

            setSchedules(schedulesList);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    const fetchSchedule = async (id: string) => {
        try {
            const response = await shuttleService.fetchSchedule(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return (
        <>
            <SafeAreaView>
                {isLoading && (
                    <Card>
                        <Text>Loading...</Text>{' '}
                    </Card>
                )}
                {!isLoading &&
                    schedules.length > 0 &&
                    schedules.map((schedule, index) => (
                        <Card key={schedule.id}>
                            <ScheduleListRow
                                index={index + 1}
                                schedule={schedule}
                                onDelete={onDelete}
                            />
                        </Card>
                    ))}
                {!isLoading && schedules.length === 0 && (
                    <Card>
                        <View>
                            <Text>No schedule found</Text>
                        </View>
                    </Card>
                )}
            </SafeAreaView>
        </>
    );
};

export default Schedule;
