import React from 'react';
import Typography from '@mui/material/Typography';
import { TableHead, TableRow, TableCell, Checkbox } from '@mui/material';
import State from '../../store/State';
import { observer } from 'mobx-react-lite';
const TableHeaders = observer(() => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox onChange={(e) => State.allChecked(e.target.checked)} />
        </TableCell>
        <TableCell>
          <Typography
            variant="h6"
            component="h5"
            sx={{ color: '#47596b', fontWeight: '600', fontSize: '18px' }}>
            Characteristic
          </Typography>
        </TableCell>
        <TableCell>
          <Typography
            variant="h6"
            component="h6"
            sx={{ color: '#47596b', fontWeight: '600', fontSize: '18px' }}>
            Property expression
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
});

export default TableHeaders;
