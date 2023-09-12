/** Action type for buying a ship */
export const BUY_SHIP_ACTION: "A";
/** Action type for buying a good */
export const BUY_WARE_ACTION: "B";
/** Action type for buying another level for a warehouse */
export const BUY_WAREHOUSE_LEVEL_ACTION: "C";
/** Action type to check whether conditions for navigating to game over are met */
export const CHECK_ON_GAMEOVER_CONDITION_ACTION: "D";
/** Action type to check whether conditions for navigating to win are met */
export const CHECK_ON_WIN_CONDITION_ACTION: "E";
/** Action type for deleting a save game */
export const DELETE_GAME_ACTION: "F";
/** Fallback ship name because TypeScript (should never happen) */
export const FALLBACK_SHIP_NAME: "The Flying Dutchman";
/** Action type to move the calendar forward a month */
export const FORWARD_TO_NEXT_MONTH_ACTION: "G";
/** Action type to load a game from localStorage */
export const LOAD_GAME_ACTION: "H";
/** Action type to load a good onto a ship */
export const LOAD_SHIP_ACTION: "I";
/** Key for reading from and writing to localStorage */
export const LOCAL_STORAGE_KEY: "THE_BALTIC_LEAGUE";
/** Text to console.warn in case the city was not found (should never happen) */
export const NO_CITY: "Could not find city";
/** Action type to reset state to initial one */
export const RESET_ACTION: "J";
/** Action type to save a game into localStorage */
export const SAVE_GAME_ACTION: "K";
/** Action type to sell a good on a market */
export const SELL_ACTION: "L";
/** Action type to send a ship to another city */
export const SEND_SHIP_ACTION: "M";
/** Action type to switch color theme */
export const SET_COLOR_PREFERENCE_ACTION: "N";
/** Action type to select either free-play or tutorial */
export const SET_LEVEL_SCENARIO_ACTION: "O";
/** Action type to set the chosen player name */
export const SET_PLAYERNAME_ACTION: "P";
/** Action type to set ship name of new ship */
export const SET_SHIP_NAME_ACTION: "Q";
/** Action type to set ship type of new ship */
export const SET_SHIP_TYPE_ACTION: "R";
/** Action type to set tutorial flags */
export const SET_TUTORIAL_ACTION: "S";
/** Action type to switch to another scene */
export const SWITCH_TO_SCENE_ACTION: "T";
/** Action type to switch to another view within level scene */
export const SWITCH_TO_VIEW_ACTION: "U";
/** Action type to unload a ship into a warehouse in that city */
export const UNLOAD_SHIP_ACTION: "V";
/** Action type to unlock historic events */
export const UNVEIL_HISTORY_ACTION: "W";
/** Action type to update the position of all ships */
export const UPDATE_SHIPS_ACTION: "X";
