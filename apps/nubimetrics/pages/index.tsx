// Base
import { useState } from 'react';
// Base end

// MUI
import { Fab, Grid, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// MUI end

// Own components
import CustomTextField from 'components/common/custom-text-field/custom-text-field';
import Recipes from 'components/recipes/recipes';
import SelectRadioButton from 'components/common/select-radio-button/select-radio-button';
import Title from 'components/common/title/title';
import { CustomModal as Modal } from 'components/common/custom-modal/custom-modal';
import NewRecipe from 'components/new-recipe/new-recipe';
import { useCounter } from 'hooks/useCounter';
// Own components end

const styles = {
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 48,
  },
};

export function Index(): JSX.Element {
  const [open, setOpen] = useState(false);
  const { counter, increment } = useCounter();

  const handleOpen = () => {
    setOpen(true);
    // Ejemplo de custom hook
    increment();
    console.log(counter);
  };

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
        <Fab
          sx={styles.fab}
          color="primary"
          aria-label="add"
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
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
