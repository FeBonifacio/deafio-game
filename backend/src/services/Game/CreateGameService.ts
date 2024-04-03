interface GameRequest {
    nome: string;
    descricao: string;
    produtora: string;
    ano: number;
    idadeMinima: number;
}

class CreateGameService {
    async execute({ nome, descricao, produtora, ano, idadeMinima }: GameRequest) {
        // Validação dos campos
        if (!nome || !descricao || !produtora || !ano || !idadeMinima) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        if (ano < 1900) {
            throw new Error('O ano deve ser maior ou igual a 1900.');
        }

        if (idadeMinima < 0) {
            throw new Error('A idade mínima deve ser um número positivo.');
        }

        return {
            nome,
            descricao,
            produtora,
            ano,
            idadeMinima
        };
    }
}

export { CreateGameService };
