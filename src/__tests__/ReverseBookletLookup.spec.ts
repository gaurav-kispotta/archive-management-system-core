import { ReverseBookletLookup } from "../ReverseBookletLookup";
import { fs, vol } from "memfs";

const json = {
    './README.md': '1',
    './src/index.js': '2',
    './node_modules/debug/index.js': '3',
};

describe(`Reverse booklet lookup`, () => {
    beforeAll(() => {
        vol.fromJSON(json, '/app');

        vol.readFileSync('/app/src/index.js', 'utf8'); // 2

        // Mock the fs module.
        jest.mock("fs", () => fs);
    });
    //#region placeholder
    it(`should create look for a archive-booklet.json in reverse order`, () => {
        let reverseBookletLookup = new ReverseBookletLookup(process.cwd() + "\\src\\__tests__\\data\\LookupExists\\L1\\L2\\L3\\");
        reverseBookletLookup.lookUp();
    });
    //#endregion
  });
  