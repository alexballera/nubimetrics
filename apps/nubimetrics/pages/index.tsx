// Base
import { useState } from 'react';
// Base end

// MUI
import {
  Box,
  Fab,
  Grid,
  IconButton,
  Modal,
  styled,
  Tooltip,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
// MUI end

// Own components
import CustomTextField from 'components/common/custom-text-field/custom-text-field';
import Recipes from 'components/recipes/recipes';
import SelectRadioButton from 'components/common/select-radio-button/select-radio-button';
import Title from 'components/common/title/title';
import NewRecipe from 'components/new-recipe/new-recipe';
// Own components end

export const styles = {
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 48,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 464,
    bgcolor: 'background.paper',
    height: '100vh',
    p: 3,
  },
  iconButton: {
    position: 'absolute',
    right: 20,
    top: 20,
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
  const handleClose = () => setOpen(false);
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
      {/* TODO crear componente reutilizable para el modal */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContainer}>
          <IconButton
            aria-label="delete"
            sx={styles.iconButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>

          <Title text="Nueva receta" type="modal" />

          <NewRecipe />
        </Box>
      </Modal>
    </>
  );
}

export default Index;
