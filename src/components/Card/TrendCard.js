import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import PropTypes from 'prop-types'

export default function TrendCard(props) {

  const { id, title, valueOne, valueTwo, subTitleOne, subTitleTwo, changePercent, isPositiveChange, isActive, handleCardSelect } = props

  return (
    <Card variant="outlined"
      sx={
        [
          {
            width: 220,
            px: 0.5,
            cursor: 'pointer',
          },
          {
            '&:hover': {
              backgroundColor: '#f4f8ff',
            },
          }
        ]}
      onClick={() => handleCardSelect(id)}
      key={id}
      data-card-theme={isActive ? "active" : "normal"}
    >
      <CardHeader
        title={title}
        color="text.primary"
        sx={{ fontWeight: 500, fontSize: '1.25rem', padding: '10px 10px' }}
      />

      <CardContent sx={{
        display: 'flex',
        flexDirection: 'row',
        columnGap: '70px',
        padding: '10px'
      }}>

        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <Typography sx={{ fontSize: '0.875rem', textTransform: 'capitalize', color: '#9A9A9A' }} gutterBottom>
            {subTitleOne}
          </Typography>
          <Typography
            sx={{ fontSize: '0.875rem', textTransform: 'capitalize', fontWeight: 'bold', display: 'flex', position: 'relative' }} gutterBottom
          >
            {valueOne}
            {
              !changePercent ? null : isPositiveChange ?
                (

                  <Typography variant="span" className="trend-card__changePercent trend-card__changePercent--pos" >
                    <ArrowDropUpIcon sx={{
                      width: '0.65em', height: 'auto'
                    }} />
                    {changePercent}%
                  </Typography>

                )
                :
                (

                  <Typography variant="span" className="trend-card__changePercent trend-card__changePercent--neg" >
                    <ArrowDropDownIcon sx={{
                      width: '0.65em', height: 'auto'
                    }} />
                    {changePercent}%
                  </Typography>

                )
            }

          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '0.875rem', textTransform: 'capitalize', color: '#9A9A9A' }} gutterBottom>
            {subTitleTwo}
          </Typography>
          <Typography sx={{ fontSize: '0.875rem', textTransform: 'capitalize', fontWeight: 'bold' }} gutterBottom>
            {valueTwo}
          </Typography>
        </Box>
      </CardContent>
    </Card >
  );
}

TrendCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  subTitleOne: PropTypes.string.isRequired,
  subTitleTwo: PropTypes.string.isRequired,
  valueOne: PropTypes.string.isRequired,
  valueTwo: PropTypes.string.isRequired,
  changePercent: PropTypes.number,
  isPositiveChange: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
  handleCardSelect: PropTypes.func
}

