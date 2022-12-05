export interface IStop {
    id: string;
    name: string;
    abbreviation: string;
}

export interface IScheduleObject {
    stop_name: string;
    stop_abbr: string;
    time: string;
}

export interface IShuttleSchedulePayload {
    shuttle: string;
    start_time: Date;
    end_time: Date;
    // stops: IStopJSON;
    schedule: Array<IScheduleObject>;
    days: Array<string>;
}

export interface IShuttleResponse {
    id: number;
    name: string;
    schedules: Array<string>;
}

export interface IScheduleResponse extends IShuttleSchedulePayload {
    id: string;
}

export interface IStopJSON {
    // key : id pf shuttle stop
    // value: interval
    [key: string]: number;
}
