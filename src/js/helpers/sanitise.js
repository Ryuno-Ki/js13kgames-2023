/**
 * Helper function to sanitise user input by removing potentially dangerous characters.
 *
 * @argument {string} rawString
 * @returns {string}
 */
export function sanitise (rawString) {
  return rawString
    .replace(/</g, '')
    .replace(/>/g, '')
    .replace(/{/g, '')
    .replace(/}/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/"/g, '')
    .replace(/'/g, '')
    .replace(/%/g, '')
    .replace(/&/g, '')
    .replace(/=/g, '')
    .replace(/\$/g, '')
    .replace(/\//g, '')
    .replace(/\\/g, '')
    .replace(/\s+/, ' ')
}
