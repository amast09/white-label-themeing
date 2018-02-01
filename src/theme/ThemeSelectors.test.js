// @flow
import {themeColorPaletteSelector} from "./ThemeSelectors";
import type {ReduxStoreStateType} from "../types/ReduxStoreStateType";
import type {ThemeColorPaletteType} from "../types/ThemeColorPaletteType";

const theme1State: ReduxStoreStateType = {
  "theme": {
    "primaryColor": "#EC407A",
    "secondaryColor": "#5E35B1"
  }
};

const theme1ColorPalette: ThemeColorPaletteType = {
  "primaryColor": theme1State.theme.primaryColor,
  "lightenedPrimaryColor": "#f386aa",
  "darkenedPrimaryColor": "#cb1452",
  "secondaryColor": theme1State.theme.secondaryColor,
  "lightenedSecondaryColor": "#8762d0",
  "darkenedSecondaryColor": "#3f2376"
};

describe("theme Selectors", () => {

  describe("themeColorPaletteSelector", () => {
    it("should return the color themes color palette based off primary and secondary colors", () => {
      expect(themeColorPaletteSelector(theme1State)).toEqual(theme1ColorPalette);
    });
  });

});
