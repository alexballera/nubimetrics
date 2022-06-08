// MUI
import { Typography, styled, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// MUI end

// Styles
import styles from './index.module.scss';
// Styles end

const OwnTextField = styled(TextField)({
  '& .MuiFilledInput-root': {
    borderRadius: 16,
    backgroundColor: '#F9F9F9',
  },
  '& .MuiFilledInput-root:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-root:hover:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-input': {
    padding: 12,
  },
  '& .MuiInputAdornment-root': {
    marginTop: '0px !important',
  },
});

const CustomTextField = () => (
  <OwnTextField
    placeholder="Buscador"
    size="small"
    fullWidth
    margin="none"
    type="search"
    variant="filled"
    InputProps={{
      'aria-label': 'Buscador',
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
);

export function Index(): JSX.Element {
  return (
    <div className={styles.page}>
      <Typography
        component="h2"
        variant="h2"
        sx={{ fontWeight: 600, fontSize: 32, lineHeight: '48px' }}
      >
        Recetas de Cocina
      </Typography>

      <CustomTextField />
    </div>
  );
}

export default Index;
