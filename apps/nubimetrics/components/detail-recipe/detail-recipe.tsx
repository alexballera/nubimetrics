// Base
import { ChangeEvent, useState } from 'react';
// Base end

// MUI
import { Box, Button, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
// MUI end

// Own components
import Title from 'components/common/title/title';
import IOSSwitch from 'components/common/ios-switch/ios-switch';
import CustomRatings from 'components/common/custom-ratings/custom-ratings';
// Own components end

// Styles
import { styles } from 'components/new-recipe/new-recipe.module';
import CustomModal from 'components/common/custom-modal/custom-modal';
import NewRecipe from 'components/new-recipe/new-recipe';
// Styles end

// Types
import { RecipeProps } from 'types/recipe';
// Types end

export function DetailRecipe({ recipe }: RecipeProps) {
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Box
        sx={styles.container}
        py={1}
        component="form"
        noValidate
        autoComplete="off"
      >
        {recipe.ingredients && (
          <Box py={1}>
            <Title type="label" text="Ingredientes" />
            <Box pt={2}>
              <ul style={{ margin: 0, paddingLeft: 16 }}>
                {recipe.ingredients.map((item: string, key) => (
                  <li
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 400,
                      fontSize: 14,
                      lineHeight: '24px',
                    }}
                    key={key}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        )}

        {recipe.preparation && (
          <Box py={1}>
            <Title type="label" text="Preparación" />
            <Box pt={1}>
              {recipe.preparation.map((item: string, key) => (
                <Title key={key} type="paragraph" text={item} />
              ))}
            </Box>
          </Box>
        )}

        <Box py={1}>
          <Title type="label" text="Reseñas" />

          <Box pt={1}>
            <CustomRatings
              name="read-only"
              value={recipe.reviews}
              readOnly
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
          </Box>
        </Box>

        <Box py={1}>
          <Title type="label" text="Cocinado antes" />
          <IOSSwitch
            sx={{ m: 1 }}
            checked={recipe.cooked}
            name="Nombre"
            onChange={handleChange}
          />
        </Box>

        <Stack
          sx={styles.button}
          spacing={2}
          direction="row"
          justifyContent="flex-end"
        >
          <Button variant="contained" onClick={handleOpen}>
            Editar
          </Button>
        </Stack>
      </Box>
      <CustomModal
        title="Editar receta"
        hideBackdrop
        open={open}
        setOpen={setOpen}
        content={<NewRecipe recipe={recipe} open={open} setOpen={setOpen} />}
      />
    </>
  );
}
export default DetailRecipe;
