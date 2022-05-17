export interface IArchiveBooklet {
    archiveId: string;
    metadata: IArchiveMetadata;
}

export interface IArchiveMetadata {
    archiveId: string;
    archiveName: string;
    archiveType: string;
    archivePath: string;
    archiveSize: number;
    archiveDate: Date;
    archiveDescription: string;
    archiveTags: string[];
    archiveStatus: string;
}