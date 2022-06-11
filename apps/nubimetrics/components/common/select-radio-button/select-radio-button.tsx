// Base
import { useState } from 'react';
// Base end

// MUI
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// MUI end

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      borderRadius: 16,
      width: 261,
    },
  },
};

const items = ['Todos', 'Activos', 'Inactivos'];

export default function SelectRadioButton() {
  const min470 = useMediaQuery('(min-width: 470px && max-width: 568px)');
  const min568 = useMediaQuery('(min-width: 568px && max-width: 900px)');
  const min1440 = useMediaQuery('(min-width: 1440px)');
  const [list, setList] = useState<string[]>(['Todos']);

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
      width: ${min470 ? '52%' : min568 ? '64%' : min1440 ? '56%' : '48%'};
    }`
  );

  const handleChange = (event: SelectChangeEvent<typeof list>) => {
    const {
      target: { value },
    } = event;
    setList(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Select
      labelId="radio-button-label"
      id="radio-button"
      autoWidth
      value={list}
      onChange={handleChange}
      IconComponent={KeyboardArrowDownIcon}
      input={<StiledOutlinedInput fullWidth startAdornment="Cocido antes:" />}
      renderValue={(selected) => selected.join(', ')}
      MenuProps={MenuProps}
    >
      {items.map((item, key) => (
        <MenuItem key={key} value={item}>
          <ListItemText primary={item} />
          <Radio checked={list.indexOf(item) > -1} />
        </MenuItem>
      ))}
    </Select>
  );
}
