import axios from "axios";
import { useState } from "react";

const useCreateGame = () => {

    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        produtora: '',
        ano: '',
        idadeMinima: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('http://localhost:3000/', formData);
            console.log(response.data);

            setFormData({
                nome: '',
                descricao: '',
                produtora: '',
                ano: '',
                idadeMinima: '',
            });

        } catch (error) {
            console.error('Erro ao criar o jogo:', error);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
    }
};

export default useCreateGame;
