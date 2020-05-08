export interface UserModel {
    gender: string;
    name: {
        first: string;
        last: string;
    };
    location?: {
        street?: string;
        city?: string;
        state?: string;
        postcode?: string;
        coordinates?: {
            latitude: string;
            longitude: string;
        };
    };
    email?: string;
    login: {
        uid: number,
        username: string;
        password?: string;
    };
    dob?: {
        date: Date;
        age: number;
    };
    phone?: string;
    cell?: string;
    doc: {
        id: number;
        name: string;
        value: string;
    };
    picture?: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
}