import { Schema, model } from 'mongoose';
/* import joi from 'joi'; */

const noticiaSchema = new Schema({
    headline: { type: String, required: true, min: 5, max: 100 },
    introduction: { type: String, required: true, max: 1000 },
    category: {
        type: String, enum: ['Positiva', 'Negativa', 'Corrupção', 'Promessa Cumprida', 'Promessa Descumprida'],
        required: true
    },
    sources: [{ type: String, required: true }],
    politicos: [{ type: Schema.Types.ObjectId, ref: 'Politico', required: true }],
    status: {
        type: String,
        enum: ['autorizar', 'editar', 'arquivar', 'publicado', 'editado', 'arquivado'],
        required: true
    },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lastEditBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });
 
export const Noticia = model('News', noticiaSchema);