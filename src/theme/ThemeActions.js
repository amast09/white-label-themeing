// @flow
import type {ThemeType} from "../types/ThemeType";
export type SetThemeActionType = {type: "SET_THEME", theme: ThemeType};
export type SetThemePrimaryColorActionType = {type: "SET_THEME_PRIMARY_COLOR", primaryColor: string};
export type SetThemeSecondaryColorActionType = {type: "SET_THEME_SECONDARY_COLOR", secondaryColor: string};
export type ClearThemeActionType = {type: "CLEAR_THEME"};
export type ThemeActionType = SetThemeActionType |
  ClearThemeActionType |
  SetThemePrimaryColorActionType |
  SetThemeSecondaryColorActionType;

export const setTheme = (theme: ThemeType): SetThemeActionType => ({
  theme,
  "type": "SET_THEME"
});

export const setThemePrimaryColor = (primaryColor: string): SetThemePrimaryColorActionType => ({
  primaryColor,
  "type": "SET_THEME_PRIMARY_COLOR"
});

export const setThemeSecondaryColor = (secondaryColor: string): SetThemeSecondaryColorActionType => ({
  secondaryColor,
  "type": "SET_THEME_SECONDARY_COLOR"
});

export const clearTheme = (): ClearThemeActionType => ({
  "type": "CLEAR_THEME"
});
