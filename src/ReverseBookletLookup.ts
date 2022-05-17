import * as fs from "fs";
import * as path from "path";
import * as os from "os";

import { IArchiveBooklet } from "./interface/IArchiveBooklet";

export class ReverseBookletLookup {
    private readonly bookletFileName = 'archive-booklet.json';

    constructor(private rootPath?: string) {
        if (!rootPath) {
            this.rootPath = process.cwd();
        }
    }
    public lookUp(): IArchiveBooklet {
        // First lookup in the current directory.
        let filePath = this.rootPath + '\\' + this.bookletFileName;
        let root = undefined;

        do {

            if (!root) {
                if (os.platform() === 'win32') {
                    root = path.parse(os.homedir()).root;
                } else {
                    root = '/';
                }
            }

           

            if (root === process.cwd()) {
                throw new Error('Could not find the archive-booklet.json file. \
                Please make sure you are in the correct directory.');
            }

            // If file does not exists in the current directory, then look in the parent directory.
            if (!fs.existsSync(filePath)) {
                process.chdir('../');
                filePath = process.cwd() + '/' + this.bookletFileName;
            } else {
                const data = fs.readFileSync(filePath, 'utf8');
                const metadata: IArchiveBooklet = JSON.parse(data);
                return metadata;
            }

        } while (true);
    }
}