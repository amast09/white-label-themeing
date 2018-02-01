// @flow
import type {ThemeType} from "../types/ThemeType";
import type {ThemeActionType} from "./ThemeActions";

export type ThemeReducerStateType = ThemeType;

const defaultState: ThemeType = {
  "primaryColor": "#008248",
  "secondaryColor": "#BA9653"
};

export const theme = (state: ThemeReducerStateType = defaultState, action: ThemeActionType) => {
  switch (action.type) {
    case "SET_THEME":
      return action.theme;
    case "SET_THEME_PRIMARY_COLOR":
      return {
        ...state,
        "primaryColor": action.primaryColor
      };
    case "SET_THEME_SECONDARY_COLOR":
      return {
        ...state,
        "secondaryColor": action.secondaryColor
      };
    case "CLEAR_THEME":
      return defaultState;
    default: (action: empty); // eslint-disable-line no-unused-expressions
      return defaultState;
  }
};
