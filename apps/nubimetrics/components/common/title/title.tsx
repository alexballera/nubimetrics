import { Typography } from '@mui/material';

export interface TitleProps {
  type: 'modal' | 'title' | 'label' | 'paragraph';
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
    paragraph: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '24px',
      marginTop: 1,
      marginBottom: 1,
    },
  };

  function getStyle() {
    const style = {
      modal: styles.modal,
      title: styles.title,
      label: styles.label,
      paragraph: styles.paragraph,
      default: null,
    };
    return style[type] || style['default'];
  }

  return (
    <Typography
      id="modal-modal-title"
      variant={type === 'paragraph' ? 'body1' : 'h2'}
      component={type === 'paragraph' ? 'p' : 'h2'}
      sx={getStyle}
    >
      {text}
    </Typography>
  );
}

export default Title;
