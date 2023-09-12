/** Action type for buying a ship */
export const BUY_SHIP_ACTION: "BUY_SHIP_ACTION";
/** Action type for buying a good */
export const BUY_WARE_ACTION: "BUY_WARE_ACTION";
/** Action type for buying another level for a warehouse */
export const BUY_WAREHOUSE_LEVEL_ACTION: "BUY_WAREHOUSE_LEVEL_ACTION";
/** Action type to check whether conditions for navigating to game over are met */
export const CHECK_ON_GAMEOVER_CONDITION_ACTION: "CHECK_ON_GAMEOVER_CONDITION_ACTION";
/** Action type to check whether conditions for navigating to win are met */
export const CHECK_ON_WIN_CONDITION_ACTION: "CHECK_ON_WIN_CONDITION_ACTION";
/** Action type for deleting a save game */
export const DELETE_GAME_ACTION: "DELETE_GAME_ACTION";
/** Fallback ship name because TypeScript (should never happen) */
export const FALLBACK_SHIP_NAME: "The Flying Dutchman";
/** Action type to move the calendar forward a month */
export const FORWARD_TO_NEXT_MONTH_ACTION: "FORWARD_TO_NEXT_MONTH_ACTION";
/** Action type to load a game from localStorage */
export const LOAD_GAME_ACTION: "LOAD_GAME_ACTION";
/** Action type to load a good onto a ship */
export const LOAD_SHIP_ACTION: "LOAD_SHIP_ACTION";
/** Key for reading from and writing to localStorage */
export const LOCAL_STORAGE_KEY: "THE_BALTIC_LEAGUE";
/** Text to console.warn in case the city was not found (should never happen) */
export const NO_CITY: "Could not find city";
/** Action type to reset state to initial one */
export const RESET_ACTION: "RESET_ACTION";
/** Action type to save a game into localStorage */
export const SAVE_GAME_ACTION: "SAVE_GAME_ACTION";
/** Action type to sell a good on a market */
export const SELL_ACTION: "SELL_ACTION";
/** Action type to send a ship to another city */
export const SEND_SHIP_ACTION: "SEND_SHIP_ACTION";
/** Action type to switch color theme */
export const SET_COLOR_PREFERENCE_ACTION: "SET_COLOR_PREFERENCE_ACTION";
/** Action type to select either free-play or tutorial */
export const SET_LEVEL_SCENARIO_ACTION: "SET_LEVEL_SCENARIO_ACTION";
/** Action type to set the chosen player name */
export const SET_PLAYERNAME_ACTION: "SET_PLAYERNAME_ACTION";
/** Action type to set tutorial flags */
export const SET_TUTORIAL_ACTION: "SET_TUTORIAL_ACTION";
/** Action type to switch to another city */
export const SWITCH_TO_CITY_ACTION: "SWITCH_TO_CITY_ACTION";
/** Action type to switch to another scene */
export const SWITCH_TO_SCENE_ACTION: "SWITCH_TO_SCENE_ACTION";
/** Action type to switch to another view within level scene */
export const SWITCH_TO_VIEW_ACTION: "SWITCH_TO_VIEW_ACTION";
/** Action type to unload a ship into a warehouse in that city */
export const UNLOAD_SHIP_ACTION: "UNLOAD_SHIP_ACTION";
/** Action type to unlock historic events */
export const UNVEIL_HISTORY_ACTION: "UNVEIL_HISTORY_ACTION";
/** Action type to update the position of all ships */
export const UPDATE_SHIPS_ACTION: "UPDATE_SHIPS_ACTION";
