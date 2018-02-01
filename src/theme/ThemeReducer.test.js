// @flow
import {Theme} from "./ThemeReducer";
import type {ThemeType} from "../types/ThemeType";
import type {
  SetThemeActionType,
  SetThemePrimaryColorActionType,
  SetThemeSecondaryColorActionType,
  ClearThemeActionType
} from "./ThemeActions";
import type {ThemeReducerStateType} from "./ThemeReducer";

const defaultState: ThemeReducerStateType = Object.freeze({
  "primaryColor": "#008248",
  "secondaryColor": "#BA9653"
});

const newTheme: ThemeType = Object.freeze({
  "primaryColor": "#0C2340",
  "secondaryColor": "#C8102E"
});

describe("Theme Reducer", () => {
  describe("undefined state", () => {
    it("should return the default theme", () => {
      const initialState = undefined;
      const action: ClearThemeActionType = {"type": "CLEAR_THEME"};
      const expectedNextState: ThemeReducerStateType = defaultState;

      expect(Theme(initialState, action)).toEqual(expectedNextState);
    });
  });

  describe("SET_THEME action", () => {
    it("should return the new theme", () => {
      const initialState: ThemeReducerStateType = defaultState;
      const action: SetThemeActionType = {"type": "SET_THEME", theme: newTheme};
      const expectedNextState: ThemeReducerStateType = newTheme;

      expect(Theme(initialState, action)).toEqual(expectedNextState);
    });
  });

  describe("SET_THEME_PRIMARY_COLOR action", () => {
    it("should return the theme with the primary color correctly updated", () => {
      const initialState: ThemeReducerStateType = defaultState;
      const action: SetThemePrimaryColorActionType = {
        "type": "SET_THEME_PRIMARY_COLOR",
        "primaryColor": "#F66733"
      };
      const expectedNextState: ThemeReducerStateType = {
        ...initialState,
        "primaryColor": action.primaryColor
      };

      expect(Theme(initialState, action)).toEqual(expectedNextState);
    });
  });

  describe("SET_THEME_SECONDARY_COLOR action", () => {
    it("should return the theme with the secondary color updated correctly", () => {
      const initialState: ThemeReducerStateType = defaultState;
      const action: SetThemeSecondaryColorActionType = {
        "type": "SET_THEME_SECONDARY_COLOR",
        "secondaryColor": "#522D80"
      };
      const expectedNextState: ThemeReducerStateType = {
        ...initialState,
        "secondaryColor": action.secondaryColor
      };

      expect(Theme(initialState, action)).toEqual(expectedNextState);
    });
  });


  describe("CLEAR_THEME action", () => {
    it("should return the default theme", () => {
      const initialState: ThemeReducerStateType = newTheme;
      const action: ClearThemeActionType = {"type": "CLEAR_THEME"};
      const expectedNextState: ThemeReducerStateType = defaultState;

      expect(Theme(initialState, action)).toEqual(expectedNextState);
    });
  });
});
