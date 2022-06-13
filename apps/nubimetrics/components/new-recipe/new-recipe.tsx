// Base
import { ChangeEvent, useState } from 'react';
// Base end

// MUI
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// MUI end

// Own components
import Title from 'components/common/title/title';
import IOSSwitch from 'components/common/ios-switch/ios-switch';
// Own components end

// Styles
import { StyledTextField, styles } from './new-recipe.module';
// Styles end

type CustomFieldProps = {
  label?: string;
  placeholder: string;
  multiline?: boolean;
  minRows?: number | string;
  maxRows?: number | string;
  textArea?: boolean;
};

const CustomField = ({
  label,
  placeholder,
  multiline,
  minRows,
  maxRows,
  textArea,
}: CustomFieldProps) => (
  <StyledTextField
    id="outlined-basic"
    label={label}
    placeholder={placeholder}
    variant="filled"
    fullWidth
    minRows={minRows}
    maxRows={maxRows}
    multiline={multiline}
    sx={!label ? styles.styledTextField : textArea ? styles.textArea : null}
    InputProps={{
      startAdornment: <InputAdornment position="start"></InputAdornment>,
    }}
  />
);

export function NewRecipe() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box
      sx={styles.container}
      py={1}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box py={1}>
        <Title type="label" text="Nombre de la receta" />
        <Box pt={2}>
          <CustomField
            label="Título*"
            placeholder="P.ej. Olla caliente de carne y arroz en olla de cocción lenta"
          />
        </Box>
      </Box>

      <Box py={1}>
        <Title type="label" text="Ingredientes" />

        <List sx={styles.list}>
          <ListItem
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <DeleteOutlineIcon color="warning" />
              </IconButton>
            }
          >
            <Typography sx={styles.liNumber}>1</Typography>
            <CustomField placeholder="Tipo de Ingrediente" />
          </ListItem>

          <ListItem
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <AddCircleOutlineOutlinedIcon color="success" />
              </IconButton>
            }
          >
            <Typography sx={styles.liNumber}>2</Typography>
            <CustomField placeholder="Tipo de Ingrediente" />
          </ListItem>
        </List>
      </Box>

      <Box py={1}>
        <Title type="label" text="Preparación" />
        <Box pt={2}>
          <CustomField
            textArea={true}
            multiline={true}
            minRows={3}
            maxRows={3}
            label="Instrucciones**"
            placeholder="Escribe los pasos..."
          />
        </Box>
      </Box>

      <Box py={1}>
        <Title type="label" text="Reseñas" />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          sx={styles.radioLabel}
        >
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
        </RadioGroup>
      </Box>

      <Box py={1}>
        <Title type="label" text="Cocinado antes" />
        <IOSSwitch
          sx={{ m: 1 }}
          checked={checked}
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
        <Button variant="contained" disabled>
          Crear
        </Button>
      </Stack>
    </Box>
  );
}

export default NewRecipe;
