export const CREATE = 'NEW_BUCKET';
export const VIEW = 'VIEW_ALL_BUCKET';
export const BUCKETS = 'BUCKETS';
export const ERRORS = 'BUCKET_ERRORS';

export interface IBuckets{
    name: string;
}

interface IView{
    type: typeof VIEW;
    payload: Array<IBuckets>;
}

interface ICreate{
    type: typeof CREATE;
    payload: string;
}

interface IErrors{
    type: typeof ERRORS;
    payload: string;
}

export type IBucketType = IView | ICreate | IErrors;