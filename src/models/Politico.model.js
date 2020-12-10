import { Schema, model } from 'mongoose';
/* import joi from 'joi'; */
 
const politicoSchema = new Schema({
    fullName: { type: String, required: true, min: 10, max: 150 },
    currentPosition: {
        type: String,
        enum: ['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', 'Outro/Não Sei'],
        required: true
    },
    lastPosition: {
        type: String,
        enum: ['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', 'Outro/Não Sei'],
        required: true
    },
    status: {
        type: String,
        enum: ['autorizar', 'editar', 'arquivar', 'publicado', 'editado', 'arquivado'],
        required: true
    },
    province: {
        type: String,
        enum: ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
        'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
        'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'],
        required: true
    },
    news: [{ type: Schema.Types.ObjectId, ref: 'News' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    officialInfoURL: { type: String, required: true },
    imageURL: { type: String },
    lastEditBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
 
export const Politico = model('Politico', politicoSchema);