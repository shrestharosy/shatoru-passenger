import React, { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { shuttleService } from 'src/services/shuttle';
import { IShuttle } from 'src/services/shuttle/shuttle.type';
import { IMAGE } from 'src/images/image';
import tw from 'src/styles/tailwind';

export default function SelectShuttleAndPickup() {
    const [isLoading, setIsLoading] = useState(false);
    const [shuttles, setShuttles] = useState<Array<IShuttle>>([]);

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
        <View>
            <View style={tw`rounded-xl w-full`}>
                <Image source={IMAGE.STOPWAITING} style={tw`w-full`} />
            </View>
            <View style={tw`mt-8`}>
                <Text style={tw`text-slate-400 text-base`}>
                    Select a shuttle
                </Text>
                <View style={tw`flex mt-4`}>
                    {shuttles.map((shuttle) => (
                        <Pressable
                            style={tw`w-full p-2 border border-1 rounded-md mb-4`}
                        >
                            <Text style={tw`text-xl text-center`}>
                                {shuttle.shuttle}
                            </Text>
                        </Pressable>
                    ))}
                </View>
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
        </View>
    );
}
