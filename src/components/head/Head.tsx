import { Box, Typography, TextField, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { observer } from 'mobx-react-lite';
import State from '../../store/State';

const Head = observer(() => {
  return (
    <Box className="row">
      <Typography
        variant="h4"
        component="h4"
        sx={{ margin: '10px 0 10px 25px', color: '#47596b', fontWeight: '600', fontSize: '25px' }}>
        Characteristics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '25px',
          p: '30px 25px',
          backgroundColor: '#f0f2f5',
          borderTop: '1px solid #d2d9df',
          borderBottom: '1px solid #d2d9df',
        }}>
        <Box sx={{ position: 'relative', width: '75%' }}>
          <TextField
            size="small"
            fullWidth
            label="Browser added properties..."
            id="fullWidth"
            sx={{ backgroundColor: 'white' }}
          />
          <IconButton
            type="button"
            sx={{ position: 'absolute', right: '10px', top: '0px' }}
            aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Button size="small" variant="outlined" onClick={() => State.setOpen()}>
          Configuration property
        </Button>
      </Box>
    </Box>
  );
});

export default Head;
