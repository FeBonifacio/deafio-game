// Arquivo: src/@types/useFormValidation.d.ts

// Importe os tipos necessários do React
import { React } from 'react';

// Declare o módulo e suas funções aqui
declare module '../../utils/useFormValidation' {
    // Defina os tipos para os parâmetros e o retorno da função useFormValidation
    interface FormValidationProps {
        handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    }

    // Defina a função useFormValidation com os tipos especificados
    function useFormValidation(props: FormValidationProps): void;

    // Exporte a função useFormValidation
    export default useFormValidation;
}
