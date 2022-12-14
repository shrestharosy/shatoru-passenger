import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import { shuttleService } from 'src/services/shuttle';
import { IShuttleResponse } from 'src/services/shuttle/shuttle.type';
import { IMAGE } from 'src/images/image';
import tw from 'src/styles/tailwind';
import ComponentWrapper from 'src/components/component-wrapper';
import { IRouteProps } from 'src/libs/routes';
import Loader from 'src/components/loader';

interface IShuttlesProps extends IRouteProps {}

const Shuttles = (props: IShuttlesProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [shuttles, setShuttles] = useState<Array<IShuttleResponse>>([]);

    const { navigation } = props;

    useEffect(() => {
        getShuttles();
    }, []);

    const getShuttles = async () => {
        try {
            setIsLoading(true);
            const response = await shuttleService.fetchShuttles();
            setShuttles(response);
        } catch (error) {
            alert('Error while fetching shuttles');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ComponentWrapper>
            <View style={tw`rounded-xl w-full`}>
                <Image source={IMAGE.STOPWAITING} style={tw`w-full`} />
            </View>
            {isLoading && <Loader />}
            {!isLoading && shuttles.length > 0 && (
                <View style={tw`mt-8`}>
                    <Text style={tw`text-slate-400 text-base`}>
                        Select a shuttle
                    </Text>
                    <ScrollView style={tw`flex mt-4`}>
                        {shuttles.map((shuttle) => (
                            <Pressable
                                key={shuttle.id}
                                style={tw`w-full p-2 border rounded-md mb-4`}
                                onPress={() =>
                                    navigation.push('Shuttle', {
                                        shuttleId: shuttle.id,
                                        scheduleIds: shuttle.schedules,
                                    })
                                }
                            >
                                <Text style={tw`text-xl text-center`}>
                                    {shuttle.name}
                                </Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                    {/* <View style={tw`mt-4`}>
             <Text style={tw`text-slate-400 text-base`}>
                 Pickup Location
             </Text>
             <Pressable style={tw`p-2 mt-2 border border-1 rounded-md`}>
                 <Text style={tw`text-lg`}>Fairlane Woods</Text>
             </Pressable>
         </View>
         <View style={tw`mt-12`}>
             <Pressable style={tw`p-2 rounded-md bg-main`}>
                 <Text style={tw`text-lg text-black text-center`}>
                     View Schedule
                 </Text>
             </Pressable>
         </View> */}
                </View>
            )}
            {!isLoading && shuttles.length === 0 && (
                <Text>No shuttles found</Text>
            )}
        </ComponentWrapper>
    );
};

export default Shuttles;
