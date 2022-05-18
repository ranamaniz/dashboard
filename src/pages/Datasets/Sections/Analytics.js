import React from 'react';
import Box from '@mui/material/Box';
import CustomCard from '../../../components/Card/CustomCard';
import { analyticsCardValues } from '../../../fakeData/data'

const Analytics = () => {


  return (
    <Box
      sx={{
        px: 3,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 3,
      }}
    >
      {
        analyticsCardValues.map(cardData => {

          const { id, title, data } = cardData

          const { runAccuracy, runAccuracyAverage, runFillRate, runFillRateAverage, runAccuracyChange, runFillRateChange } = data;

          return (
            <>
              <CustomCard
                key={id}
                id={id}
                title={title}
                topFirstValue={runAccuracy}
                topSecondValue={runAccuracyAverage}
                bottomFirstValue={runFillRate}
                bottomSecondValue={runFillRateAverage}
                firstChangePercent={runAccuracyChange}
                secondChangePercent={runFillRateChange}
              />
            </>
          )
        })
      }

    </Box >
  )
}

export default Analytics