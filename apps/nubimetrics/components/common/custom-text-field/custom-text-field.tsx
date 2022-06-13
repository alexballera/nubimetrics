// MUI
import { styled, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// MUI end

export interface CustomTextFieldProps {
  placeholder: string;
  size?: 'small' | 'medium';
  type: string;
}

const StyledTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderRadius: 16,
    backgroundColor: '#F9F9F9',
  },
  '& .MuiFilledInput-root:after': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:hover:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:hover:not(.Mui-disabled):before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:focus:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-input': {
    padding: 12,
  },
  '& .MuiInputAdornment-root': {
    marginTop: '0px !important',
  },
});
export function CustomTextField(props: CustomTextFieldProps) {
  const { placeholder, size, type } = props;
  return (
    <StyledTextField
      placeholder={placeholder}
      size={size}
      fullWidth
      margin="none"
      type={type}
      variant="filled"
      InputProps={{
        'aria-label': `${placeholder}`,
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
export default CustomTextField;
