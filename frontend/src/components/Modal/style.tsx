import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModalBody = styled(Modal.Body)`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px) {
        .modal-dialog {
            max-width: 50%;
        }
    }
`;