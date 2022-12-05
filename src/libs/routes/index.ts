import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type IRouteList = {
   
    Shuttle: undefined;
    
};

type ScheduleListParams = {
    shuttleId: number;
};

export interface IRouteProps extends NativeStackScreenProps<IRouteList, any> {}

export default IRouteList;
