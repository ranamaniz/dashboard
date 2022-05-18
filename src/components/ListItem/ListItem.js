import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Li(props) {

  const { navigateTo, icon, listItemTitle } = props;

  const currentLocation = useLocation();

  const isActive = (currentLocation.pathname) === navigateTo ? 'active' : 'inactive'

  return (
    <>
      <ListItem disablePadding component={RouterLink} to={navigateTo} state={{ prevPath: currentLocation.pathname }} data-list-theme={isActive}>
        <ListItemButton>
          <ListItemIcon>
            {icon}
          </ListItemIcon>
          <ListItemText primary={listItemTitle} sx={{ fontSize: '14px' }} />
        </ListItemButton>
      </ListItem>
    </>
  )
}

export default Li