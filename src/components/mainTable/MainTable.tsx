import React, { useEffect } from 'react';
import { Table, Box, Typography } from '@mui/material';
import Head from '../head/Head';
import ModalWindow from '../modalWindow/ModalWindow';
import TableHeaders from '../tableHeaders/TableHeaders';
import TableInner from '../tableInner/TableInner';
import State from '../../store/State';
import { observer } from 'mobx-react-lite';

export const MainTable = observer(() => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        await State.fetchDataFromApi();
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Можно добавить логику обработки ошибки, например, показ сообщения пользователю
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ border: '1px solid silver', p: '10px 0px 1px 0px', borderRadius: '5px' }}>
      <Head />
      <Table>
        <TableHeaders />
        <TableInner />
      </Table>
      <ModalWindow />
    </Box>
  );
});

export default MainTable;
