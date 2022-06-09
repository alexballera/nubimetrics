// MUI
import { Grid, Typography } from '@mui/material';
// MUI end

// Own components
import CustomTextField from 'components/custom-text-field/custom-text-field';
import SelectRadioButton from 'components/select-radio-button/select-radio-button';
// Own components end

const items = ['Todos', 'Activos', 'Inactivos'];

export function Index(): JSX.Element {
  return (
    <>
      <Typography
        component="h2"
        variant="h2"
        sx={{ fontWeight: 600, fontSize: 32, lineHeight: '48px' }}
      >
        Recetas de Cocina
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5.5}>
          <CustomTextField type="search" size="small" placeholder="Buscador" />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectRadioButton items={items} />
        </Grid>
      </Grid>
    </>
  );
}

export default Index;
