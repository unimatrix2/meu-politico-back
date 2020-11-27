import { Schema, model } from 'mongoose';
/* import joi from 'joi'; */

const noticiaSchema = new Schema({
    headline: { type: String, required: true, min: 5, max: 100 },
    introduction: { type: String, required: true, max: 1000 },
    sources: [{ type: String, required: true }],
    politico: { type: Schema.Types.ObjectId, ref: 'Politico', required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lastEditBy: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export const Noticia = model('Noticia', noticiaSchema);