import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from '../tabPanel/TabPanel';
import { observer } from 'mobx-react-lite';
import State from '../../store/State';

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const ModalList = observer(() => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', gap: '30px' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}>
        {State.data.map((row: any) => {
          return <Tab key={row.id} label={row.characteristic} {...a11yProps(row.id)} />;
        })}
      </Tabs>
      {State.data.map((row: any) => {
        return (
          <TabPanel key={row.id} value={value} index={row.id}>
            {row.property_expression}
          </TabPanel>
        );
      })}
    </Box>
  );
});

export default ModalList;
