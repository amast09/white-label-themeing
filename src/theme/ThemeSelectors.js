// @flow
import {createSelector} from "reselect";
import tinycolor from "tinycolor2";
import type {ReduxStoreStateType} from "../types/ReduxStoreStateType";
import type {ThemeType} from "../types/ThemeType";
import type {ThemeColorPaletteType} from "../types/ThemeColorPaletteType";

const generateColorPaletteFromTheme = (theme: ThemeType): ThemeColorPaletteType => ({
  "primaryColor": theme.primaryColor,
  "lightenedPrimaryColor": tinycolor(theme.primaryColor).lighten(15).toString(),
  "darkenedPrimaryColor": tinycolor(theme.primaryColor).darken(15).toString(),
  "secondaryColor": theme.secondaryColor,
  "lightenedSecondaryColor": tinycolor(theme.secondaryColor).lighten(15).toString(),
  "darkenedSecondaryColor": tinycolor(theme.secondaryColor).darken(15).toString()
});

export const themeColorPaletteSelector: ((state: ReduxStoreStateType) => ThemeColorPaletteType) =
  createSelector([(state: ReduxStoreStateType) => state.theme], generateColorPaletteFromTheme);
