// Base
import { useState } from 'react';
// Base end

// MUI
import { Fab, Grid, styled, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// MUI end

// Own components
import CustomTextField from 'components/common/custom-text-field/custom-text-field';
import Recipes from 'components/recipes/recipes';
import SelectRadioButton from 'components/common/select-radio-button/select-radio-button';
import Title from 'components/common/title/title';
import { CustomModal as Modal } from 'components/common/custom-modal/custom-modal';
import NewRecipe from 'components/new-recipe/new-recipe';
// Own components end

const styles = {
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 48,
  },
};

const StiledFab = styled(Fab)(
  () => `
  background-color: #0C969D;
  :hover {
    background-color: #0C969D;
    filter: brightness(0.85);
  }
  `
);

export function Index(): JSX.Element {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Title text="Recetas de Cocina" type="title" />
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
      <Tooltip title="Añadir receta" placement="left" arrow>
        <StiledFab
          sx={styles.fab}
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </StiledFab>
      </Tooltip>

      <Modal
        title="Nueva receta"
        open={open}
        setOpen={setOpen}
        content={<NewRecipe />}
      />
    </>
  );
}

export default Index;
