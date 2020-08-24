import React from 'react';

import {ThemeProvider} from 'styled-components'

import light from './styles/themes/light'
import dark from './styles/themes/dark'

import usePersistedState from './utils/usePersistedState'

import GlobalStyle from './styles/global'
import Header from './components/Header'

const App = () => {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header toggleTheme={toggleTheme}/>
        <GlobalStyle/>
      </div>
    </ThemeProvider>

  );
}

export default App;
