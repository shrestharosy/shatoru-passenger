import { Button, ListItem, Text } from '@rneui/themed';
import React from 'react';
import { View, Pressable } from 'react-native';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import { useNavigation } from '@react-navigation/native';

interface IShuttleRowProps {
    shuttle: IShuttleResponse;
}

const ShuttleRow = (props: IShuttleRowProps) => {
    const { shuttle } = props;

    const navigation = useNavigation<any>();

    return (
        <>
            <Pressable
                onPress={() =>
                    navigation.navigate('ScheduleList', {
                        shuttleId: shuttle.id,
                        scheduleIds: JSON.stringify(shuttle.schedules),
                    })
                }
            >
                <ListItem.Content>
                    <Text>{shuttle.name}</Text>
                </ListItem.Content>
            </Pressable>
            <ListItem.Chevron />
        </>
    );
};

export default ShuttleRow;
