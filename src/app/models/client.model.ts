export interface IClientModel {

    id?: number;

    description: string;

    identityDocument: {
        code: string;
        name?: string;
    };

    identityNumber: string;

    phone: string;

    active: boolean;

}