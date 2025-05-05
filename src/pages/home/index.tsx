import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

import ENDPOINTS from '#/apis/endpoints';
import mascot from '#/assets/mascot.png';
import { LEGENDS } from '#/constants/app-page';
import { type AppItem } from '#/types';

import AppCard from './app-card';
import AppCategoryNav from './app-category-nav';
import Legend from './legend';
import muiStyles from './style';

export default function Home() {
  const { header, headerText, gradientText, secondaryText } = muiStyles;
  const [currentTab, setCurrentTab] = useState(0);
  const [appList, setAppList] = useState<AppItem[]>([]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  useEffect(() => {
    async function fetchAppList() {
      try {
        const res = await axios.get<AppItem[]>(ENDPOINTS.APP_LIST);

        if (res.status === 200) {
          const data = res.data;
          setAppList(data);
        } else {
          console.error('Failed to fetch app list:', res.statusText);
        }
      } catch (error) {
        console.error('Error fetching app list:', error);
      }
    }

    void fetchAppList();
  }, []);

  return (
    <Box>
      <Box sx={header}>
        <Box display='flex' alignItems='center'>
          <Typography color='secondary' sx={headerText}>
            More than just{' '}
            <Typography variant='inherit' component='span' sx={gradientText}>
              answers...
            </Typography>
          </Typography>
          <img src={mascot} alt='ciATHENA-mascot' style={{ width: '74px', height: '78px' }} />
        </Box>
        <Typography color='secondary' sx={secondaryText}>
          Our <span style={{ fontWeight: 700 }}>ciATHENA Assist</span> empowers you to extract
          meaningful, actionable <br /> insights from over{' '}
          <span style={{ fontWeight: 700 }}>40 applications</span> within our{' '}
          <span style={{ fontWeight: 700 }}>Commercial Analytics Cloud</span>.
        </Typography>
      </Box>
      <Box sx={muiStyles.mainer}>
        <AppCategoryNav value={currentTab} onChange={handleChange} />
        <Box>
          <Typography variant='subtitle2' color='textSecondary' sx={{ marginY: '20px' }}>
            Select an app to get started
          </Typography>
          <Box sx={muiStyles.appListContainer}>
            {appList.map(item => {
              return <AppCard key={item['App Name']} data={item} />;
            })}
          </Box>
        </Box>

        <Box sx={muiStyles.legendsContainer}>
          {LEGENDS.map(item => {
            return <Legend data={item} key={item.label} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}
