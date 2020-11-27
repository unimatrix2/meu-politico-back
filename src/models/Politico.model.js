import { Schema, model } from 'mongoose';
/* import joi from 'joi'; */

const politicoSchema = new Schema({
    fullName: { type: String, required: true, min: 10, max: 150 },
    currentPosition: {
        enum: ['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', false],
        required: true
    },
    lastPosition: {
        type: String || Boolean,
        enum: ['Candidato', 'Vereador', 'Prefeito', 'Dep. Estadual', 'Governador', 'Dep. Federal', 'Senador', 'Presidente', 'Cargo Indireto', false],
        required: true
    },
    status: {
        type: String,
        enum: ['autorizar', 'editar', 'arquivar', 'publicado', 'editado', 'arquivado'],
        required: true
    },
    news: [{ type: Schema.Types.ObjectId, ref: 'News' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    officialInfoURL: { type: String, required: true },
    imageURL: { type: String },
    lastEditBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export const Politico = model('Politico', politicoSchema);