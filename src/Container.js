import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar/Navbar';
import DenseAppBar from './components/Navbar/DenseAppBar';
import Footer from './components/Navbar/Footer/Footer';
import  List from './components/List/List'

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <DenseAppBar />
        <Navbar />
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto' }}>
          <List />
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}
