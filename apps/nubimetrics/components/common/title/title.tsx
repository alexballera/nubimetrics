import { Typography } from '@mui/material';

export interface TitleProps {
  type: 'modal' | 'title' | 'label';
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
    title: {
      fontWeight: 600,
      fontSize: 32,
      lineHeight: '48px',
    },
    label: {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: '24px',
    },
  };

  function getStyle() {
    const style = {
      modal: styles.modal,
      title: styles.title,
      label: styles.label,
      default: null,
    };
    return style[type] || style['default'];
  }

  return (
    <Typography
      id="modal-modal-title"
      variant="h2"
      component="h2"
      sx={getStyle}
    >
      {text}
    </Typography>
  );
}

export default Title;
