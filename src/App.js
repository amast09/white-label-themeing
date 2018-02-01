// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import type {ThemeColorPaletteType} from "./types/ThemeColorPaletteType";
import type {ReduxStoreStateType} from "./types/ReduxStoreStateType";
import {themeColorPaletteSelector} from "./theme/ThemeSelectors";
import {connect} from "react-redux";
import {setTheme, setThemePrimaryColor, setThemeSecondaryColor} from "./theme/ThemeActions";

type PropsType = {
  themeColorPalette: ThemeColorPaletteType,
  setTheme: ()
};

class ConnectedApp extends Component<PropsType> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



const mapStateToProps = (state: ReduxStoreStateType) => ({
  "themeColorPalette": themeColorPaletteSelector(state)
});

const mapDispatchToProps = ({
  setTheme,
  setThemePrimaryColor,
  setThemeSecondaryColor
});

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
