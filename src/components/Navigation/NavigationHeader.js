import React, { useState, useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const NavigationHeader = (props) => {
  const currentLocation = useLocation();
  const navigate = useNavigate();
  const [prevLocation, setPreviousLocation] = useState('');

  useEffect(() => {
    if (currentLocation.state && (currentLocation.pathname !== currentLocation.state.prevPath)) {
      setPreviousLocation(currentLocation.state.prevPath);
    }

  }, [currentLocation.pathname])


  const handleNavigation = () => {
    console.log('on click working')
    navigate(
      `${prevLocation}`,
      {
        state:
          { prevPath: currentLocation.pathname }
      }
    )
  }

  return (
    <Box sx={{ px: 3, py: 1 }}>

      {
        prevLocation !== '' &&
        <Link href="#" underline="none" onClick={handleNavigation}>
          <BsArrowLeft className='v-align-middle mr-2' />
          <span>
            {
              prevLocation !== '/' ?
                prevLocation.slice(1)
                :
                "project_info"
            }
          </span>
        </Link>
      }


    </Box>
  )
}

export default NavigationHeader