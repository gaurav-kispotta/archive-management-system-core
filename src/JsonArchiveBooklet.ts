import uuid from "uuid";
import { IArchiveBooklet, IArchiveMetadata } from "./interface/IArchiveBooklet";

export class JsonArchiveBooklet implements IArchiveBooklet {

    archiveId: string;
    metadata: IArchiveMetadata;

    constructor() {
        this.archiveId = uuid.v4();
        this.metadata = new JsonArchiveMetaData();
    }
}

export class JsonArchiveMetaData implements IArchiveMetadata {
    archiveId: string;
    archiveName: string;
    archiveType: string;
    archivePath: string;
    archiveSize: number;
    archiveDate: Date;
    archiveDescription: string;
    archiveTags: string[];
    archiveStatus: string;

    constructor(){
        this.archiveId = uuid.v4();
        this.archiveName = "";
        this.archiveDescription = "";
        this.archiveDate = new Date();
        this.archivePath = "";
        this.archiveType = "";
        this.archiveSize = 0;
        this.archiveTags = [];
        this.archiveStatus = "";
    }
}