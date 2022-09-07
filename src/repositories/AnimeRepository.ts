import { AnimeDTO } from '../dto/AnimeDTO';
import { AnimeModel } from '../models/AnimeModel';

class AnimeRepository {
  async findById(id: string) {
    const anime = await AnimeModel.findById({
      _id: id,
    });
    return anime;
  }

  async create({ _id, banner, name, note, genres, year }: AnimeDTO) {
    await AnimeModel.create({
      _id,
      banner,
      name,
      note,
      genres,
      year,
    });
  }

  async update({ banner, name, note, genres, year }: Omit<AnimeDTO, '_id'>) {
    await AnimeModel.updateOne({
      banner,
      name,
      note,
      genres,
      year,
    });
  }
}

export default AnimeRepository;
