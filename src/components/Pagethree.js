import React from 'react'
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import TextField from '@mui/material/TextField';

export default function Pagethree() {
  return (
    <div>
        <Box sx={{ '& > :not(style)': { m: 5 } }}>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="NHS" variant="standard" />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" sx={{width: "60%"}} label="Address" variant="standard" />
            </Box>
    
    
        </Box>
    </div>
  )
}
