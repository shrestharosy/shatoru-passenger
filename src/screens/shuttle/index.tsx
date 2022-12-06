import { Card } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import ShuttleRow from 'src/components/Shuttle/ShuttleRow';
import { IRouteProps } from 'src/libs/routes';
import { shuttleService } from 'src/services/shuttle';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';

interface IShuttleProps extends IRouteProps {
    location: string;
}

function Shuttle(props: IShuttleProps) {
    const { navigation } = props;

    const [isLoading, setIsLoading] = useState(false);
    const [shuttles, setShuttles] = useState<Array<IShuttleResponse>>([]);

    useEffect(() => {
        getShuttles();
    }, []);

    const getShuttles = async () => {
        try {
            setIsLoading(true);
            const response = await shuttleService.fetchShuttles();
            setShuttles(response);
        } catch (error: any) {
            console.log(error.message??"Error while fetching shuttles");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView>
            <Card>
                {isLoading && <Text>Loading...</Text>}
                {!isLoading &&
                    shuttles.length > 0 &&
                    shuttles.map((shuttle) => (
                        <ShuttleRow
                            key={shuttle.id}
                            shuttle={shuttle}
                        />
                    ))}
                {!isLoading && shuttles.length === 0 && (
                    <View>
                        <Text>No shuttle found</Text>
                    </View>
                )}
            </Card>
        </SafeAreaView>
    );
}

export default Shuttle;
