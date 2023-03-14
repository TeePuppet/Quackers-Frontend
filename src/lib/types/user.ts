export interface User {
    uid: string,
    expiry_time: number,
    email: string | undefined,
    roles: string[];
}