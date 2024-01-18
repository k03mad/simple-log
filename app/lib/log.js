/* eslint-disable no-console */

import {getDateYMDHMS} from '@k03mad/simple-date';

const convertToArray = elem => Array.isArray(elem) ? elem : [elem];

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const log = msg => convertToArray(msg)
    .forEach(elem => console.log(elem));

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const logError = msg => [`\n[${getDateYMDHMS()}]`, convertToArray(msg)]
    .flat()
    .forEach(elem => console.error(elem));

/**
 * @param {any|any[]} msg
 * @returns {void}
 */
export const logErrorExit = msg => {
    logError(msg);
    process.exit(1);
};
