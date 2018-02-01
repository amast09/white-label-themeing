// @flow
import React, { Component } from 'react';
import tinycolor from "tinycolor2";
import type {ThemeColorPaletteType} from "./types/ThemeColorPaletteType";
import type {ReduxStoreStateType} from "./types/ReduxStoreStateType";
import {themeColorPaletteSelector} from "./theme/ThemeSelectors";
import {connect} from "react-redux";
import {
  clearTheme,
  setTheme,
  setThemePrimaryColor,
  setThemeSecondaryColor
} from "./theme/ThemeActions";

import type {
  ClearThemeActionType,
  SetThemeSecondaryColorActionType,
  SetThemePrimaryColorActionType
} from "./theme/ThemeActions";
import ThemedHeader from "./components/ThemedHeader";
import ThemedCard from "./components/ThemedCard";
import type {ThemeType} from "./types/ThemeType";

type PropsType = {
  theme: ThemeType,
  themeColorPalette: ThemeColorPaletteType,
  clearTheme: () => ClearThemeActionType,
  setTheme: (theme: ThemeType) => SetThemeSecondaryColorActionType,
  setThemePrimaryColor: (primaryColor: string) => SetThemePrimaryColorActionType,
  setThemeSecondaryColor: (secondaryColor: string) => SetThemeSecondaryColorActionType
};

class ConnectedApp extends Component<PropsType> {

  loadRandomTheme = () => {
    setTimeout(() => {
      const primaryColor = tinycolor.random().toHexString();
      const secondaryColor = tinycolor.random().toHexString();
      this.props.setTheme({primaryColor, secondaryColor});
    }, 2000)
  };

  render() {
    return (
      <div className="App">
        <br/>
        <label>Primary Color: </label>
        <input type="text" value={this.props.theme.primaryColor} onChange={(e) => this.props.setThemePrimaryColor(e.target.value)}/>
        <br/>
        <label>Secondary Color: </label>
        <input type="text" value={this.props.theme.secondaryColor} onChange={(e) => this.props.setThemeSecondaryColor(e.target.value)}/>
        <br/>
        <br/>
        <button onClick={this.props.clearTheme}>Clear Theme</button>
        <br/>
        <button onClick={this.loadRandomTheme}>Load Random Theme</button>
        <br/>
        <ThemedHeader colorPalette={this.props.themeColorPalette}/>
        <ThemedCard colorPalette={this.props.themeColorPalette}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxStoreStateType) => ({
  "theme": state.theme,
  "themeColorPalette": themeColorPaletteSelector(state)
});

const mapDispatchToProps = ({
  clearTheme,
  setTheme,
  setThemePrimaryColor,
  setThemeSecondaryColor
});

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
