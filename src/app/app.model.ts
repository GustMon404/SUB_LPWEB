export class Receitas{
    titulo: string;
    tipo:string;
    tempo_preparo: number;
    rendimento: string;
    ingredientes: string;
    modo_preparo: string;
    publica:boolean;
    constructor(titulo: string,tipo:string,
                tempo_preparo: number, rendimento: string,
                ingredientes: string, modo_preparo: string,
                publica:boolean){
        this.titulo = titulo;
        this.tipo = tipo;
        this.tempo_preparo = tempo_preparo;
        this.rendimento = rendimento;
        this.ingredientes = ingredientes;
        this.modo_preparo = modo_preparo;
        this.publica = publica;
    }
}