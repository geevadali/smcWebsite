import * as React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles'
import './App.css';
import CustomBtn from './components/customBtn';
import NavBar from './components/navBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import home from './pages/home';
import schedules from './pages/schedules'
import gear from './pages/gear'
import contact from './pages/contact'





const theme = createTheme({
  palette: {
    background: {
      default: "#242424" //g
    },
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});


function App() {

  return (

    <Router>
      <div className="App">
      
      <ThemeProvider theme={theme}>

       <NavBar/>
        
        <Switch>
          <Route path = "/" exact component={home}/>
          <Route path = "/schedules" exact component={schedules}/>
          <Route path = "/gear" exact component={gear}/>
          <Route path = "/contact" exact component={contact}/>
        </Switch>
    
      </ThemeProvider>
      
      </div>
    </Router>
      
  );
}

export default App;
