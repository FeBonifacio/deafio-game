import { Game } from "./game";

export interface EditModalProps {
    showModal: boolean;
    handleCloseModal: () => void;
    handleSaveEdit: () => Promise<void>;
    editedGame: Game | null;
    setEditedGame: React.Dispatch<React.SetStateAction<Game | null>>;
}