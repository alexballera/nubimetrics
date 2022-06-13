export type ModalProps = {
  open?: boolean;
  setOpen?: (a: boolean) => void;
};

export type CustomModalProps = {
  open: boolean;
  setOpen: (a: boolean) => void;
  content: React.ReactElement;
  title: string;
  hideBackdrop?: boolean;
};
