import {
  Box,
  Card,
  MenuItem,
  Select,
  styled,
  useTheme,
} from '@mui/material';

import ReactEcharts from 'echarts-for-react';

const CardHeader = styled(Box)(() => ({
  display: 'flex',
  paddingLeft: '24px',
  paddingRight: '24px',
  marginBottom: '12px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  textTransform: 'capitalize',
}));


const StatVente = ({ height, color = [] }) => {
  const theme = useTheme();

  const option = {
    grid: { top: '10%', bottom: '10%', left: '5%', right: '5%' },
    legend: {
      itemGap: 20,
      icon: 'circle',
      textStyle: {
        fontSize: 13,
        color: theme.palette.text.secondary,
        fontFamily: theme.typography.fontFamily
      }
    },
    label: {
      fontSize: 13,
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: theme.palette.text.secondary
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: { color: theme.palette.text.secondary, opacity: 0.15 }
      },
      axisLabel: { color: theme.palette.text.secondary, fontSize: 13, fontFamily: 'roboto' }
    },
    series: [
      {
        data: [30, 40, 20, 50, 40, 50, 60, 42, 45, 34, 45, 89],
        type: 'line',
        stack: '2024',
        name: '2024',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 }
      }, 
      {
        data: [20, 30, 50, 30, 10, 30, 40, 52, 45, 44, 55, 69],
        type: 'line',
        stack: '2023',
        name: '2023',
        smooth: true,
        symbolSize: 4,
        lineStyle: { width: 4 }
      }
    ]
  };

  return (
    <Card elevation={3} sx={{ pt: '20px', mb: 3 }}>
      <CardHeader>
        <Title>Vente mensuel</Title>
        <Select size="small" defaultValue="this_month">
          <MenuItem value="this_month">2024</MenuItem>
          <MenuItem value="last_month">2023</MenuItem>
        </Select>
      </CardHeader>

      <Box overflow="auto">
        <ReactEcharts style={{ height: height }} option={{ ...option, color: [...color] }} />
      </Box>
    </Card>
  );
};

export default StatVente;
