import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    backgroundColor: '#FDFDFD',
    border: '1px solid #54B5BA',
    borderRadius: 4,
    height: 54,
    padding: 0,
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
    paddingLeft: 0,
    paddingRight: 0,
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '24px',
    height: 54,
    boxSizing: 'border-box',
  },
  '& .MuiInputAdornment-root': {
    marginTop: '0px !important',
  },
  '& .MuiInputLabel-filled': {
    color: '#79797A',
    fontWeight: 600,
    fontSize: 12,
    lineHeight: '16px',
  },
});

export const styles = {
  container: { height: 460, overflowY: 'auto' },
  styledTextField: {
    '& .MuiFilledInput-root': { height: 38 },
    '& .MuiFilledInput-input': { height: 38, padding: 0 },
  },
  textArea: {
    '& .MuiFilledInput-root': { height: 96 },
    '& .MuiFilledInput-input': { height: 96, marginTop: 2 },
  },
  list: {
    width: '100%',
    bgcolor: 'background.paper',
  },
  liNumber: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '14px',
    padding: 3 / 2,
  },
  radioLabel: {
    '& .MuiFormControlLabel-label': {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
      color: '#19191A',
    },
  },
  button: {
    '& .MuiButton-root': {
      borderRadius: 25,
    },
  },
};
