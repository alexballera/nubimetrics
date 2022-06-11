import { Box, Typography } from '@mui/material';

/* eslint-disable-next-line */
export interface NewRecipeProps {}

export function NewRecipe(props: NewRecipeProps) {
  return (
    <Box>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  );
}

export default NewRecipe;
