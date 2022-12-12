import { mongoose } from '../database';

const AnimeSchema = new mongoose.Schema(
  {
    _id: String,
    banner: String,
    name: String,
    note: String,
    genres: [],
    year: String,
  },
  {
    versionKey: false,
  }
);

export const AnimeModel = mongoose.model('animes', AnimeSchema);
