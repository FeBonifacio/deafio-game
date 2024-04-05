export interface ConfirmationModalProps {
    show: boolean;
    handleClose: () => void;
    handleConfirm: () => void;
    message: string;
}