import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';

export default function Pageone() {
  return (
    
    <Box sx={{ '& > :not(style)': { m: 5 } }}>
        
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" sx={{width: "40%"}} label="Name" variant="standard" />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField sx={{width: "40%"}} id="input-with-sx" label="Email" variant="standard" />
        </Box>
      
      
    </Box>
  );
}