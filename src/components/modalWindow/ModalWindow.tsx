import { Box, Typography, TextField, IconButton, Modal } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import ModalList from '../modalList/ModalList';
import { observer } from 'mobx-react-lite';
import State from '../../store/State';

const ModalWindow = observer(() => {
  return (
    <Modal
      open={State.modalIsOpen}
      onClose={() => State.setOpen()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <Box
        sx={{
          m: '0 auto',
          background: 'white',
          width: '80%',
          borderRadius: '5px',
        }}>
        <Box sx={{ mb: '15px' }}>
          <Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                margin: '10px 0 10px 25px',
                color: '#47596b',
                fontWeight: '600',
                fontSize: '25px',
              }}>
              Characteristics
            </Typography>
          </Box>
          <Box
            sx={{
              p: '30px 25px',
              backgroundColor: '#f0f2f5',
              borderTop: '1px solid #d2d9df',
              borderBottom: '1px solid #d2d9df',
              position: 'relative',
            }}>
            <TextField
              fullWidth
              label="Browser added properties..."
              id="fullWidth"
              sx={{ backgroundColor: 'white' }}
              size="small"
            />
            <IconButton
              type="button"
              sx={{ p: '0', position: 'absolute', right: '35px', top: '39px' }}
              aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>
        </Box>
        <ModalList />
      </Box>
    </Modal>
  );
});
export default ModalWindow;
