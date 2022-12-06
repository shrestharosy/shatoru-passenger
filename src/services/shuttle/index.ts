import { AxiosResponse } from 'axios';
import axiosInstance from 'src/libs/util/axios';
import { IStop, IShuttleResponse, IScheduleResponse } from './shuttle.type';

const fetchStops = async () => {
    const response: AxiosResponse<Array<IStop>> = await axiosInstance.get(
        `/stops/`
    );
    return response.data;
};

const fetchShuttles = async () => {
    const response: AxiosResponse<Array<IShuttleResponse>> =
        await axiosInstance.get(`/shuttles/`);
    return response.data;
};

const fetchSchedule = async (id: string) => {
    const response: AxiosResponse<IScheduleResponse> = await axiosInstance.get(
        `/shuttles/schedules/${id}/`
    );
    return response.data;
};

export const shuttleService = {
    fetchStops,
    fetchShuttles,
    fetchSchedule,
};
