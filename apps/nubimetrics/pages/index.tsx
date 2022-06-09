// MUI
import { Typography } from '@mui/material';
// MUI end

// Own components
import CustomTextField from 'components/custom-text-field/custom-text-field';
// Own components end
// Styles
import styles from './index.module.scss';
// Styles end

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

      <CustomTextField type="search" size="small" placeholder="Buscador" />
    </div>
  );
}

export default Index;
