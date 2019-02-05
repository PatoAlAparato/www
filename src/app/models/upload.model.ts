export class Upload {
    key: string;
    nameImg: string;
    url: string;
    file: File;
    constructor(file: File) {
        this.file = file;
    }
}
