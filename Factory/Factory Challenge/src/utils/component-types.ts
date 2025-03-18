export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  header: string;
  content: string;
  footer: string;
}

export interface CardProps {
  title: string;
  content: string;
  footer: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
}
