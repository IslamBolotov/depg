import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Navbar from './components/Navbar/Navbar';
import DenseAppBar from './components/Navbar/DenseAppBar';    

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
        <DenseAppBar />
        <Navbar />
      <Container fixed>
      
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: 'auto' }}>
          
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}
