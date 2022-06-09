// Base
import { useState } from 'react';
// Base end

// MUI
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ListItemText, MenuItem, OutlinedInput, Radio } from '@mui/material';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// MUI end

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

const names = ['Todos', 'Activos', 'Inactivos'];

const StiledOutlinedInput = styled(OutlinedInput)(
  () => `
  border-radius: 16px;
  background-color: #EBF0F3;

  & .MuiOutlinedInput-notchedOutline {
    border: 0;
  }

  & .MuiSelect-select {
    font-weight: bold;
    padding-left: 16px;
    width: 70%;
  }
  `
);

export default function SelectRadioButton() {
  const [cookedBefore, setCookedBefore] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof cookedBefore>) => {
    const {
      target: { value },
    } = event;
    setCookedBefore(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Select
      labelId="radio-button-label"
      id="radio-button"
      autoWidth
      value={cookedBefore}
      onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
      input={<StiledOutlinedInput fullWidth startAdornment="Cocido antes:" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          <ListItemText primary={name} />
          <Radio checked={cookedBefore.indexOf(name) > -1} />
        </MenuItem>
      ))}
    </Select>
  );
}
