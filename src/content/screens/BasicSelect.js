import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const BasicSelect = (props) => {
    const data = props.data
    const [selected, setSelected] = useState("")
    const handleChange = (event) => {
      setSelected(event.target.value);
    };
  
    return (
      <Box className="w-64 h-fit bg-white">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label={props.name}
            onChange={handleChange}
          >
            {data.map((item) => {
                return <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Box>
    );
  }

  export default BasicSelect;