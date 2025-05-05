import SvgIcon from '@mui/material/SvgIcon';

import HomeIcon from '#/assets/nav-icons/home.svg?react';
import InsightIcon from '#/assets/nav-icons/insights.svg?react';
import MessageIcon from '#/assets/nav-icons/message.svg?react';
import { PreviewPage, OngoingThreadsPage } from '#/pages';
import Home from '#/pages/home';

export const routesConfig = [
  {
    key: 'home',
    path: '/',
    component: <Home />,
    label: 'HEADING.HOME',
    icon: <SvgIcon component={HomeIcon} inheritViewBox />,
  },
  {
    key: 'insights-lab',
    path: '/insights-lab',
    component: <PreviewPage />,
    label: 'HEADING.INSIGHTS_LAB',
    icon: <SvgIcon component={InsightIcon} inheritViewBox />,
  },
  {
    key: 'ongoing-threads',
    path: '/ongoing-threads',
    component: <OngoingThreadsPage />,
    label: 'HEADING.ONGOING_THREADS',
    icon: <SvgIcon component={MessageIcon} inheritViewBox />,
  },
];
