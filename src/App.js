import React, { Component } from 'react';
import Search from './components/search/search';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';

class App extends Component{
  render(){
    return(
      <ThemeProvider>
      <div>
        <Search />
      </div>
      </ThemeProvider>
    )
  }
}

export default App;
