import { type SxProps, type Theme } from '@mui/material';

import ciHeader from '#/assets/ci-header.png';

const muiStyles: Record<string, SxProps<Theme>> = {
  header: {
    background: `url(${ciHeader}) center center/cover no-repeat`,
    height: '271px',
    padding: '57px 44px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    boxSizing: 'border-box',
  },
  headerText: {
    fontSize: '48px',
    fontWeight: 700,
  },
  gradientText: {
    background: '-webkit-linear-gradient(0deg, #0374BB, #D264C2, #9352E5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  secondaryText: {
    fontSize: 22,
    fontWeight: 400,
  },
  mainer: {
    padding: '23px 44px',
  },
  appListContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(302px, 1fr))',
    gap: '24px',
  },
  legendsContainer: {
    display: 'flex',
    gap: '24px',
    marginTop: '50px',
  },
};

export default muiStyles;
