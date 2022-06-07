import styles from './index.module.scss';
import { Typography } from '@mui/material';

export function Index(): JSX.Element {
  return (
    <div className={styles.page}>
      <Typography variant="h1" component="h2">
        Welcome to Home!
      </Typography>
    </div>
  );
}

export default Index;
