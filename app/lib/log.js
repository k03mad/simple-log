/* eslint-disable no-console */

import {getDateYMDHMS} from '@k03mad/simple-date';

const convertToArray = elem => Array.isArray(elem) ? elem : [elem];

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const log = msg => console.log(
    convertToArray(msg)
        .join('\n'),
);

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const logError = msg => console.log(
    [`\n[${getDateYMDHMS()}]`, convertToArray(msg)]
        .flat()
        .join('\n'),
);

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const logErrorExit = msg => {
    logError(msg);
    process.exit(1);
};
