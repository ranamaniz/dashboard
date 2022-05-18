import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import DateTimePicker from '../../../components/DateTimePicker';
import SelectComponent from '../../../components/SelectComponent';
import TrendCard from '../../../components/Card/TrendCard';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { VscInfo } from "react-icons/vsc";
import LineChart from "../../../components/LineChart/LineChart";
import Analytics from "./Analytics"


const DashBoard = () => {

  const [dateTimeValue, setDateTimeValue] = useState(new Date());
  const [requestOption, setRequestOption] = useState('');
  const [columnOption, setColumnOption] = useState('');
  const [activeTrendId, setActiveTrendId] = useState(1);
  const [activeTrendTitle, setActiveTrendTitle] = useState("");


  const onDateTimeChange = (selectedDateTime) => {
    console.log("dateTimeValue:", selectedDateTime);
    setDateTimeValue(selectedDateTime);
    // submit form api calls
  }

  const onRequestOptionChange = (selectedRequestOption) => {
    console.log("selectedRequestOption:", selectedRequestOption);
    setRequestOption(selectedRequestOption);
    // submit form api calls
  }

  const onColumnOptionChange = (selectedColumnOption) => {
    console.log("selectedColumnOption", selectedColumnOption);
    setColumnOption(selectedColumnOption);
    // submit form api calls
  }

  const totalRequestsOptions = ["Request Option 1", "Request Option 2", "Request Option 3"]
  const selectColumnOptions = ["Option 1", "Option 2", "Option 3"]
  const requestTimeOptions = ["This day", "This week", "This month"]
  const dataSetOptions = ["Option 1", "Option 2", "Option 3"]

  const trendCardValues = [
    {
      trend_id: 1,
      title: "Total Requests",
      data: {
        success: '1230',
        failed: '30'
      }
    },
    {
      trend_id: 2,
      title: "Rows",
      data: {
        total: '1210',
        average: '1220',
        change: {
          percent: 0.5,
          isPositiveChange: false
        }
      }
    },
    {
      trend_id: 3,
      title: "Accuracy",
      data: {
        total: '99.43%',
        average: '99.31%',
        change: {
          percent: 0.5,
          isPositiveChange: true
        }
      }
    },
    {
      trend_id: 4,
      title: "Fill Rate",
      data: {
        total: '99.43%',
        average: '90.12%',
        change: {
          percent: 0.5,
          isPositiveChange: false
        }
      }
    }
  ]


  const toolTipText = <div>Total requests is determined based on number of URLs requested to acquire the fullest data.<br />Failed URLs are URLs that could't be opened after retries</div>;

  const onTrendSelect = (id) => {
    setActiveTrendId(id)

    // api call for trend change and data fetching in chart
  }

  useEffect(() => {
    let { title } = trendCardValues.filter(data => data.trend_id === activeTrendId)[0];
    console.log("activeTrendId", activeTrendId)
    console.log("title", title)
    setActiveTrendTitle(title)
  }, [activeTrendId])

  const totalRequestsDataPerDay = [
    {
      "id": 1,
      "date": "May 18, 2022",
      "time": "3:35 AM",
      "success": 1213,
      "failed": 10
    },
    {
      "id": 2,
      "date": "May 18, 2022",
      "time": "4:13 AM",
      "success": 2324,
      "failed": 1000
    },
    {
      "id": 3,
      "date": "May 18, 2022",
      "time": "5:00 AM",
      "success": 3434,
      "failed": 500
    },
    {
      "id": 4,
      "date": "May 18, 2022",
      "time": "6:26 AM",
      "success": 4564,
      "failed": 1000
    },
    {
      "id": 5,
      "date": "May 18, 2022",
      "time": "7:32 AM",
      "success": 5563,
      "failed": 1000
    },
    {
      "id": 6,
      "date": "May 18, 2022",
      "time": "8:47 AM",
      "success": 1111,
      "failed": 1000
    },
    {
      "id": 7,
      "date": "May 18, 2022",
      "time": "9:14 AM",
      "success": 4422,
      "failed": 1000
    },
    {
      "id": 8,
      "date": "May 18, 2022",
      "time": "10:10 AM",
      "success": 6666,
      "failed": 1000
    },
    {
      "id": 9,
      "date": "May 18, 2022",
      "time": "11:11 AM",
      "success": 8833,
      "failed": 1000
    },
    {
      "id": 10,
      "date": "May 18, 2022",
      "time": "12:41 PM",
      "success": 2323,
      "failed": 1000
    },
    // {
    //   "id": 11,
    //   "date": "May 18, 2022",
    //   "time": "1:03 PM",
    //   "success": 5435,
    //   "failed": 1000
    // },
    // {
    //   "id": 12,
    //   "date": "May 18, 2022",
    //   "time": "2:29 PM",
    //   "success": 6756,
    //   "failed": 40
    // },
    // {
    //   "id": 13,
    //   "date": "May 18, 2022",
    //   "time": "3:04 PM",
    //   "success": 7879,
    //   "failed": 40
    // },
    // {
    //   "id": 14,
    //   "date": "May 18, 2022",
    //   "time": "4:01 PM",
    //   "success": 3434,
    //   "failed": 45
    // },
    // {
    //   "id": 15,
    //   "date": "May 18, 2022",
    //   "time": "5:13 PM",
    //   "success": 5563,
    //   "failed": 22
    // },
    // {
    //   "id": 16,
    //   "date": "May 18, 2022",
    //   "time": "6:53 PM",
    //   "success": 8866,
    //   "failed": 45
    // },
    // {
    //   "id": 17,
    //   "date": "May 18, 2022",
    //   "time": "7:13 PM",
    //   "success": 8967,
    //   "failed": 53
    // },
    // {
    //   "id": 18,
    //   "date": "May 18, 2022",
    //   "time": "8:39 PM",
    //   "success": 6666,
    //   "failed": 90
    // },
    // {
    //   "id": 19,
    //   "date": "May 18, 2022",
    //   "time": "9:46 PM",
    //   "success": 8678,
    //   "failed": 15
    // },
    // {
    //   "id": 20,
    //   "date": "May 18, 2022",
    //   "time": "10:21 PM",
    //   "success": 4445,
    //   "failed": 47
    // },
    // {
    //   "id": 21,
    //   "date": "May 18, 2022",
    //   "time": "3:35 AM",
    //   "success": 5563,
    //   "failed": 931
    // },
    // {
    //   "id": 22,
    //   "date": "May 18, 2022",
    //   "time": "4:13 AM",
    //   "success": false,
    //   "requests": 5646
    // },
    // {
    //   "id": 23,
    //   "date": "May 18, 2022",
    //   "time": "5:00 AM",
    //   "success": false,
    //   "requests": 2776
    // },
    // {
    //   "id": 24,
    //   "date": "May 18, 2022",
    //   "time": "6:26 AM",
    //   "success": false,
    //   "requests": 3514
    // },
    // {
    //   "id": 25,
    //   "date": "May 18, 2022",
    //   "time": "7:32 AM",
    //   "success": false,
    //   "requests": 3043
    // },
    // {
    //   "id": 26,
    //   "date": "May 18, 2022",
    //   "time": "8:47 AM",
    //   "success": false,
    //   "requests": 3479
    // },
    // {
    //   "id": 27,
    //   "date": "May 18, 2022",
    //   "time": "9:14 AM",
    //   "success": false,
    //   "requests": 25
    // },
    // {
    //   "id": 28,
    //   "date": "May 18, 2022",
    //   "time": "10:10 AM",
    //   "success": false,
    //   "requests": 4053
    // },
    // {
    //   "id": 29,
    //   "date": "May 18, 2022",
    //   "time": "11:11 AM",
    //   "success": false,
    //   "requests": 1300
    // },
    // {
    //   "id": 30,
    //   "date": "May 18, 2022",
    //   "time": "12:41 PM",
    //   "success": false,
    //   "requests": 5715
    // },
    // {
    //   "id": 31,
    //   "date": "May 18, 2022",
    //   "time": "1:03 PM",
    //   "success": false,
    //   "requests": 780
    // },
    // {
    //   "id": 32,
    //   "date": "May 18, 2022",
    //   "time": "2:29 PM",
    //   "success": false,
    //   "requests": 4015
    // },
    // {
    //   "id": 13,
    //   "date": "May 18, 2022",
    //   "time": "3:04 PM",
    //   "success": false,
    //   "requests": 4083
    // },
    // {
    //   "id": 14,
    //   "date": "May 18, 2022",
    //   "time": "4:01 PM",
    //   "success": false,
    //   "requests": 4554
    // },
    // {
    //   "id": 35,
    //   "date": "May 18, 2022",
    //   "time": "5:13 PM",
    //   "success": false,
    //   "requests": 2251
    // },
    // {
    //   "id": 36,
    //   "date": "May 18, 2022",
    //   "time": "6:53 PM",
    //   "success": false,
    //   "requests": 4590
    // },
    // {
    //   "id": 37,
    //   "date": "May 18, 2022",
    //   "time": "7:13 PM",
    //   "success": false,
    //   "requests": 533
    // },
    // {
    //   "id": 38,
    //   "date": "May 18, 2022",
    //   "time": "8:39 PM",
    //   "success": false,
    //   "requests": 907
    // },
    // {
    //   "id": 39,
    //   "date": "May 18, 2022",
    //   "time": "9:46 PM",
    //   "success": false,
    //   "requests": 1554
    // },
    // {
    //   "id": 40,
    //   "date": "May 18, 2022",
    //   "time": "10:21 PM",
    //   "success": false,
    //   "requests": 4737
    // }
  ]


  const chartLabels = totalRequestsDataPerDay.map(data => [data.time, data.date]);
  const successRequests = totalRequestsDataPerDay.map(data => data["success"])
  const failedRequests = totalRequestsDataPerDay.map(data => data["failed"])


  return (
    <>
      {/* Top Filter Section */}
      <Box
        sx={
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: "1rem",
            px: 3,
          }
        }
      >
        <Typography variant='span'>Filters:</Typography>
        <DateTimePicker onDateTimeChange={onDateTimeChange} dateTimeValue={dateTimeValue} />
        <SelectComponent placeholder="Total Requests" selectOptions={totalRequestsOptions} handleOptionSelect={onRequestOptionChange} />
        <SelectComponent placeholder="Select Column" selectOptions={selectColumnOptions} handleOptionSelect={onColumnOptionChange} />
      </Box>
      {/* Top Filter Section */}

      <Divider sx={{ my: 3 }} />

      {/* Trend Cards Section */}
      <Box
        sx={
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: "1rem",
            px: 3,
            // py: 3
          }
        }
      >
        {
          trendCardValues.length && trendCardValues.map(cardData => {
            const { title, data, trend_id } = cardData

            let subTitleOne = "total";
            let subTitleTwo = "average";

            if (data.success) {
              subTitleOne = "success"
              subTitleTwo = "failed"
            }

            const valueOne = data[subTitleOne];
            const valueTwo = data[subTitleTwo];

            const changePercent = data.change ? data.change.percent : null
            const isPositiveChange = data.change ? data.change.isPositiveChange : null
            const isActive = trend_id === activeTrendId ? true : false;

            return (
              <TrendCard
                key={trend_id}
                id={trend_id}
                title={title}
                valueOne={valueOne}
                valueTwo={valueTwo}
                subTitleOne={subTitleOne}
                subTitleTwo={subTitleTwo}
                changePercent={changePercent}
                isPositiveChange={isPositiveChange}
                handleCardSelect={onTrendSelect}
                isActive={isActive}
              />
            )
          }
          )
        }
      </Box>
      {/* Trend Cards Section */}

      <Divider sx={{ my: 3 }} />

      {/* Chart Filter Section */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        pb: 3
      }}>
        <Typography sx={{ fontSize: '1.125rem', fontWeight: '500 ' }}>

          Trend: {activeTrendTitle}

          <Tooltip
            arrow
            sx={{ fontWeight: 400, ml: 0.5, color: "#404040" }}
            title={
              toolTipText
            }
          >
            <IconButton>
              <VscInfo />
            </IconButton>
          </Tooltip>

        </Typography>
        <Box sx={
          {
            display: 'flex',
            alignItems: 'center',
            columnGap: '1rem'
          }
        }>
          <SelectComponent placeholder="This day" selectOptions={requestTimeOptions} handleOptionSelect={onRequestOptionChange} />
          <SelectComponent placeholder="Dataset" selectOptions={dataSetOptions} handleOptionSelect={onRequestOptionChange} />
        </Box>
      </Box>
      {/* Chart Filter Section */}
      <Box
        sx={{
          height: '45vh',
          px: 3
        }}
      >
        {/* <LineChart /> */}
        <LineChart
          labels={chartLabels}
          firstLabel="Success"
          secondLabel="Failed"
          chartDataOne={successRequests}
          chartDataTwo={failedRequests}

        // options={chartOptions}
        // data={chartData}
        />
      </Box>
      {/* Trend Chart Section */}

      <Divider sx={{ my: 3 }} />


      {/* Trend Chart Section */}

      {/* Cards filter section */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        px: 3
      }}>
        <Typography sx={{ fontSize: '0.875', fontWeight: '500', mr: '5px' }}>
          Filters:
        </Typography>

        <SelectComponent placeholder="Test Sellers" selectOptions={requestTimeOptions} handleOptionSelect={onRequestOptionChange} />
        <SelectComponent placeholder="Indexed Columns" selectOptions={dataSetOptions} handleOptionSelect={onRequestOptionChange} />
      </Box>
      {/* Cards filter section */}

      <Divider sx={{ my: 3 }} />

      {/* Cards Section after chart */}
      <Analytics />


      {/* Cards Section after chart */}

    </>
  )
}

export default DashBoard