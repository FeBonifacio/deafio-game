import $ from 'jquery';
import 'jquery-validation';
import { useEffect } from 'react';

export const useFormValidation = (handleSubmit) => {
    useEffect(() => {
        $('#create-game-form').validate({
            rules: {
                nome: 'required',
                descricao: 'required',
                produtora: 'required',
                ano: {
                    required: true,
                    digits: true
                },
                idadeMinima: {
                    required: true,
                    digits: true 
                }
            },
            messages: {
                nome: 'Preencha o campo',
                descricao: 'Preencha o campo',
                produtora: 'Preencha o campo',
                ano: {
                    required: 'Preencha o campo',
                    digits: 'Somente números.'
                },
                idadeMinima: {
                    required: 'Preencha o campo.',
                    digits: 'Somente números.'
                }
            },
        });
    }, [handleSubmit]);
};
