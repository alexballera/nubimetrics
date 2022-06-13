// MUI
import { Box, IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// MUI end

// Own components
import Title from '../title/title';
// Own components end

// Types
import { CustomModalProps } from 'types/modal';
// Types end

// Styles
import { styles } from './custom-modal.module';
// Styles end

export function CustomModal({
  open,
  setOpen,
  content,
  title,
  hideBackdrop,
}: CustomModalProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      hideBackdrop={hideBackdrop}
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
