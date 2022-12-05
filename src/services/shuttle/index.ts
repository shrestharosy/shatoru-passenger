import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { IStop, IShuttle } from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

const fetchShuttles = async () => {
    const response: AxiosResponse<Array<IShuttle>> = await axiosInstance.get(
        `/shuttles/schedules/`
    );
    return response.data;
};

export const shuttleService = {
    fetchStops,
    fetchShuttles,
};
