import copyfiles from 'copyfiles';
import { IArchiveBooklet } from './interface/IArchiveBooklet';

export class ArchiveManagementSystemCore {
  constructor(private readonly archiveBooklet: IArchiveBooklet) {
    this.archiveBooklet = archiveBooklet;
  }

  public async migrate(source: string[], destination: string) {
    const args = ['-f'];

    args.push(...source);
    args.push(destination);

    let options: copyfiles.Options = {
      all: true,
      soft: true,
      verbose: true,
    };

    process.chdir('../');

    copyfiles(args, options, () => {
        console.log(`Migration of ID:${this.archiveBooklet.archiveId} ${source} to ${destination} completed.`);
        console.log('File migration complete');
    });
  }
}