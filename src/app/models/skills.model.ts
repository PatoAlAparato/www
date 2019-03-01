export class Skills {
    key: string;
    profile: string;
    clientName: string;
    data_init: string;
    data_end: string;
    description: string;
    skillList: {};
    urls: {};
    actually: boolean;
    nameImg: string;
    urlImg: string;    
    active = true;
}


export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }
