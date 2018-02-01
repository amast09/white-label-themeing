// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
import ThemedHeader from "./ThemedHeader";
import ThemedCard from "./ThemedCard";

type PropsType = {
  themeColorPalette: ThemeColorPaletteType,
  setTheme: (secondaryColor: string) => SetThemeSecondaryColorActionType,
  setThemePrimaryColor: (primaryColor: string) => SetThemePrimaryColorActionType,
  setThemeSecondaryColor: () => ClearThemeActionType
};

class ConnectedApp extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <ThemedHeader colorPalette={this.props.themeColorPalette}/>
        <ThemedCard colorPalette={this.props.themeColorPalette}/>
      </div>
    );
  }
}



const mapStateToProps = (state: ReduxStoreStateType) => ({
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
