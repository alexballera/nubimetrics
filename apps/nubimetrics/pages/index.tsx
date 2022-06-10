// MUI
import { Fab, Grid, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// MUI end

// Own components
import CustomTextField from 'components/custom-text-field/custom-text-field';
import Recipes from 'components/recipes/recipes';
import SelectRadioButton from 'components/select-radio-button/select-radio-button';
// Own components end

const fabStyle = {
  position: 'absolute',
  bottom: 24,
  right: 48,
};

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
      <Grid mt={1} mb={1} container spacing={2} alignItems="center">
        <Grid item xs={12} md={5.5}>
          <CustomTextField type="search" size="small" placeholder="Buscador" />
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectRadioButton />
        </Grid>

        <Grid item xs={12}>
          <Recipes />
        </Grid>
      </Grid>
      <Fab sx={fabStyle} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}

export default Index;
