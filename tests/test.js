/**
 * @jest-environment jsdom
 */
import { existsSync, readFileSync } from 'fs';
import { execSync } from 'child_process';
console.log("before-2");
import { _startExecution } from '../src/ldf-client-ui';
console.log("before-1");
import { TextEncoder, TextDecoder } from 'util';

describe('Build test: generate.js', () => {
    beforeAll(() => {
        // TODO remove
    });

    describe('generate.js', () => {
        describe('command line arguments', () => {
            beforeEach(() => {
                // TODO remove
            });

            afterEach(() => {
                // TODO remove
            });

            it('should correctly ........ ?????   ...', async() => {
                // document.getElementById('comunica-version').innerHTML = 'Comunica version: ' +

                const mockGetElementById = jest.fn(() => { console.log("MOCK"); return {"innerHTML": ""}});
                // mockGetElementById.mockImplementation((a, b) => {
                //     return {"innerHTML": ""}
                // });

                console.log("TextEncoder");
                console.log(TextEncoder);
                Object.assign(global, { TextDecoder, TextEncoder });
                global.TextEncoder = TextEncoder;
                global.TextDecoder = TextDecoder;


                console.log("before");
                let ui = LdfQueryUI();
                console.log("OH IT'S OVAH");
            });
        });
    });
});
