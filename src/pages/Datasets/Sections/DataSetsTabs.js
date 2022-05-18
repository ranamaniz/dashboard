import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './TabPanel';
import DashBoard from './DashBoard';

const Dataset = () => {

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabProps = (index) => {
    return {
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

  const handleTabChange = (e, selectedTabIndex) => {
    setCurrentTabIndex(selectedTabIndex);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', px: 0 }}>
        <Tabs
          value={currentTabIndex} onChange={handleTabChange} aria-label="Datasets Tabs"
          sx={{ px: 3 }}
        >
          <Tab
            label="Dashboard"
            {...tabProps(0)}
            sx={{ p: 0, textTransform: 'capitalize', minWidth: 0, fontSize: '1rem' }}
          />
          <Tab
            label="Data Preview"
            {...tabProps(1)}
            sx={{ p: 0, textTransform: 'capitalize', minWidth: 0, fontSize: '1rem' }}
          />

        </Tabs>
      </Box>

      <TabPanel value={currentTabIndex} index={0}>
        <DashBoard />
      </TabPanel>
      <TabPanel value={currentTabIndex} index={1}>
        <Box sx={{ p: 3 }}>Data Preview</Box>
      </TabPanel>

    </Box>
  )
}

export default Dataset