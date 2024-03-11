import {
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  styled,
} from '@mui/material';
import State from '../../store/State';
import { observer } from 'mobx-react-lite';

interface ChildItem {
  value: string;
  checked: boolean;
}

interface TabPanelProps {
  children: ChildItem[];
  index: number;
  value: number;
}

const ScrollableList = styled(List)({
  width: '100%',
  bgcolor: 'background.paper',
  p: '0 0 10px 0',
  overflowY: 'scroll',
  maxHeight: '40vh',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#888',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555',
  },
});

const TabPanel = observer(({ children, value, index }: TabPanelProps) => {
  const renderChildItem = (child: ChildItem, ind: number) => {
    const labelId = `checkbox-list-label-${child.value}`;

    return (
      <ListItem
        key={ind}
        secondaryAction={<IconButton edge="end" aria-label="comments"></IconButton>}
        disablePadding>
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
              checked={child.checked}
              inputProps={{ 'aria-labelledby': labelId }}
              onChange={() => State.changeCheck(index, ind)}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={`${child.value},`} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <div
      style={{ width: '100%' }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}>
      {value === index && <ScrollableList>{children.map(renderChildItem)}</ScrollableList>}
    </div>
  );
});

export default TabPanel;
