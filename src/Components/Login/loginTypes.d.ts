export type InitialState = {
    username: string;
    password: string;
}
export type LoginAction =
    | {type: "USERNAME"; payload: string;}
    | {type: "PASSWORD"; payload:string;}


export type LocationState = {
  from : string;
}