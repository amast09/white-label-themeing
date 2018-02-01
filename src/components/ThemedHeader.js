// @flow
import React from 'react';
import type {ThemeColorPaletteType} from "../types/ThemeColorPaletteType";

type ThemedHeaderPropsType = {
  colorPalette: ThemeColorPaletteType
}

const ThemedHeader = (props: ThemedHeaderPropsType) => (
  <div style={{"backgroundColor": props.colorPalette.lightenedSecondaryColor}}>
    <h1 style={{"color": props.colorPalette.primaryColor}}>Themed Header Text</h1>
    <h4 style={{"color": props.colorPalette.darkenedPrimaryColor}}>Themed Header Subtext</h4>
  </div>
);

export default ThemedHeader;
