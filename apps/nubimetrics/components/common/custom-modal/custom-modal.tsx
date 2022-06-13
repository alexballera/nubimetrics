// MUI
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// MUI end

// Own components
import Title from '../title/title';
// Own components end

// Styles
const styles = {
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
// Styles end

// Types
export interface CustomModalProps {
  content: React.ReactElement;
  open: boolean;
  setOpen: (a: boolean) => void;
  title: string;
}
// Types end

export function CustomModal(props: CustomModalProps) {
  const { open, setOpen, content, title } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
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

        <Title text={title} type="modal" />

        <Box py={2}>{content}</Box>
      </Box>
    </Modal>
  );
}

export default CustomModal;
