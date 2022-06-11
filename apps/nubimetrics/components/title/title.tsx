import { Typography } from '@mui/material';
import styles from './title.module.scss';

/* eslint-disable-next-line */
export interface TitleProps {
  type: string;
  text: string;
}

export function Title(props: TitleProps) {
  const { text, type } = props;

  const styles = {
    modal: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '32px',
    },
    sectionTitle: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: '48px',
    },
  };
  return (
    <Typography
      id="modal-modal-title"
      variant="h2"
      component="h2"
      sx={
        type === 'modal'
          ? styles.modal
          : type === 'sectionTitle'
          ? styles.sectionTitle
          : null
      }
    >
      {text}
    </Typography>
  );
}

export default Title;
