// MUI
import {
  Box,
  Button,
  Fab,
  Grid,
  Modal,
  styled,
  Tooltip,
  Typography,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// MUI end

// Own components
import CustomTextField from 'components/custom-text-field/custom-text-field';
import Recipes from 'components/recipes/recipes';
import SelectRadioButton from 'components/select-radio-button/select-radio-button';
import { useState } from 'react';
// Own components end

const styles = {
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 48,
  },
  modalContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 464,
    bgcolor: 'background.paper',
    height: '100vh',
    p: 4,
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
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalContent}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

          <Button onClick={handleClose}> cerrar</Button>
        </Box>
      </Modal>
    </>
  );
}

export default Index;
