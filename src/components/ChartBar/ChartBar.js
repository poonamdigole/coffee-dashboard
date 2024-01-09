import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {

  width:450,
  height: 250,
};
const dataset = [
 
  {
  text: "tina",
    seoul: 50,
    time: '11 AM',
  },
  {
  text: "poonam",
    seoul: 50,
    time: '1 PM ',
  },
  // {
  
  //   seoul: 0,
  //   time: '3 PM',
  // },
];



export default function ChartBar() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'time' }]}
      series={[{ dataKey: 'seoul', itemContent:'text' }]}
      layout="horizontal"
      {...chartSetting}
      
    />
  );
}