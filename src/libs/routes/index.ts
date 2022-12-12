import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type IRouteList = {
    Shuttles: undefined;
    Shuttle: ShuttleParams;
};

type ShuttleParams = {
    shuttleId: string;
    scheduleIds: Array<string>;
};

export interface IRouteProps extends NativeStackScreenProps<IRouteList, any> {}

export default IRouteList;
