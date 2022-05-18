import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { BsNewspaper } from "react-icons/bs";
import { FiDatabase, FiBox } from "react-icons/fi";
import { Outlet } from 'react-router-dom';
import Li from '../ListItem/ListItem';
import BrandLogo from '../../assets/images/logo-blue-grepsr.svg';
import Grid from '@mui/material/Grid';

const drawerWidth = 200;

const MainContainer = (props) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1
      }}
    >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, background: '#2A1E5C' }}>
        <Toolbar>
          <Typography noWrap component="div">
            <img src={BrandLogo} alt="Grepsr Logo" className="brand-logo" />
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Li
              navigateTo="/"
              listItemTitle="Project Info"
              icon={<BsNewspaper />}
              key='project_info'
            />
            <Li
              navigateTo="/datasets"
              listItemTitle="Datasets"
              icon={<FiDatabase />}
              key='datasets'
            />
            <Li
              navigateTo="/grepsr_facility"
              listItemTitle="Grepsr Facility"
              icon={<FiBox />}
              key='grepsr_facility'
            />
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, py: 3, px: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>


    </Box>
  );
}

export default MainContainer;