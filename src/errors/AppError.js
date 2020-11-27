class AppError extends Error {
    constructor(params = {}) {
        super();

        this.message = params.message || 'Ops! Ocorreu um erro. Tente novamente mais tarde.';
        this.type = params.type || 'Erro no Servidor';
        this.status = params.status || 500;
    }
}

export default AppError;