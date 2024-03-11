import { TableBody, Box, TableRow, TableCell, Checkbox, styled } from '@mui/material';
import { observer } from 'mobx-react-lite';
import State from '../../store/State';
import DeleteIcon from '@mui/icons-material/Delete';

interface PropertyExpression {
  value: string[];
  checked: boolean;
}

interface Characteristic {
  id: number;
  checked: boolean;
  characteristic: string;
  property_expression: PropertyExpression[];
}

const TableInner = observer(() => {
  return (
    <TableBody>
      {State.data.map((el: Characteristic) => (
        <TableRow key={el.id}>
          <TableCell>
            <Checkbox checked={el.checked} onChange={() => State.oneCheck(el.id)} />
          </TableCell>
          <TableCell>{el.characteristic}</TableCell>
          <TableCell sx={{ display: 'flex', gap: '5px', minHeight: '44px' }}>
            {el.property_expression.map(
              (item: PropertyExpression, index: number) =>
                item.checked && (
                  <Box
                    key={index}
                    sx={{
                      background: '#f9fafb',
                      width: 'fit-content',
                      p: '5px 15px',
                      border: '2px solid #d2d9df',
                      m: '5px',
                      color: '#566578',
                      borderRadius: '3px',
                    }}>
                    {item.value.join(', ')}
                  </Box>
                ),
            )}
          </TableCell>
          <TableCell>
            <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => State.removeItem(el.id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
});

export default TableInner;
