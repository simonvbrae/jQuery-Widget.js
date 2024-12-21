/**
 * @jest-environment jsdom
 */
import { existsSync, readFileSync } from 'fs';
import { execSync } from 'child_process';
console.log("before-2");

Object.defineProperty(window.document, 'getElementById', {
    writable: true,
    value: function(){
        console.log("CALLED");
        if (id === "comunica-version") {
            return {"innerHTML": ""}
        }
    }
});

import { LdfQueryUI } from '../src/ldf-client-ui';
console.log("before-1");
import { TextEncoder, TextDecoder } from 'util';

describe('Build test: generate.js', () => {
    console.log("describe1");
    beforeAll(() => {
        console.log("beforeAll");
        // TODO remove
    });
    
    describe('generate.js', () => {
        describe('command line arguments', () => {
            console.log("describe2");
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

                // global.document = {getElementById: (id) => {
                //     console.log("CALLED");
                //     if (id === "comunica-version") {
                //         return {"innerHTML": ""}
                //     }
                // }};
                
                // Object.defineProperty(global, 'document', {getElementById: (id) => {
                //     console.log("CALLED");
                //     if (id === "comunica-version") {
                //         return {"innerHTML": ""}
                //     }
                // }});

                // Object.defineProperty(window.document, 'getElementById', {
                //     writable: true,
                //     value: function(){
                //         console.log("CALLED");
                //         if (id === "comunica-version") {
                //             return {"innerHTML": ""}
                //         }
                //     }
                // });

                window.document.appendChild("<div id='comunica-version'><div></div></div>")

                console.log("before");
                let ui = LdfQueryUI();
                console.log("OH IT'S OVAH");
            });
        });
    });
});
