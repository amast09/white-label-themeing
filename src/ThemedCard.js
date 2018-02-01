// @flow
import React from 'react';
import type {ThemeColorPaletteType} from "./types/ThemeColorPaletteType";

type ThemedCardPropsType = {
  colorPalette: ThemeColorPaletteType
}

const ThemedCard = (props: ThemedCardPropsType) => (
  <div style={{
    "border": `solid 2px ${props.colorPalette.lightenedPrimaryColor}`,
    "padding": "20px"
  }}>
    <h1 style={{"color": props.colorPalette.secondaryColor}}>Themed Card Text</h1>
    <h4 style={{"color": props.colorPalette.darkenedSecondaryColor}}>Themed Card Subtext</h4>
  </div>
);

export default ThemedCard;
