import { Tabs, Tab } from '@mui/material';
import { type SxProps, type Theme } from '@mui/material';

import { NAV_LIST } from '#/constants/app-page';

interface AppCategoryNavProps {
  value: any;
  onChange: (event: React.SyntheticEvent, value: any) => void;
}

const muiStyles: Record<string, SxProps<Theme>> = {
  tabs: {
    '& .MuiTab-root': {
      textTransform: 'capitalize',
      fontSize: 16,
      fontWeight: 400,
    },
    '& .Mui-selected': {
      fontWeight: 600,
    },
  },
};

export default function AppCategoryNav({ value, onChange }: AppCategoryNavProps) {
  return (
    <Tabs value={value} onChange={onChange} sx={muiStyles.tabs}>
      {NAV_LIST.map(({ label, value }) => (
        <Tab key={value} label={label} />
      ))}
    </Tabs>
  );
}
