import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



export default function BasicDatePicker() {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    
    
  return (
    <div>
    
   <Box sx={{ '& > :not(style)': { m: 5 } }}>
        <Box sx={{ display: 'flex', alignItems:'flex-end' }}>
            <LocalPhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Phone No " variant="standard" />
         </Box>
    </Box>

    <Box sx={{ '& > :not(style)': { m: 5 } }}>
    <FormControl style={{ width: '65%' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
            <DatePicker label="Date of Birth" />
        </DemoContainer>
        </LocalizationProvider>
    </FormControl>
    </Box>

   
    <Box sx={{ '& > :not(style)': { m: 5 } }}>
    
      <FormControl style={{ width: '65%' }}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Prefer Not to Say</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    </div>
  );
}
