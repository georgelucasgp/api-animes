import { AnimeDTO } from '../dto/AnimeDTO';
import AnimeRepository from '../repositories/AnimeRepository';

class CreateAnimeService {
  private animeRepository: AnimeRepository;

  constructor() {
    this.animeRepository = new AnimeRepository();
  }

  async execute(anime: AnimeDTO) {
    const animeAlreadyExists = await this.animeRepository.findById(anime._id);

    if (!animeAlreadyExists) await this.animeRepository.create(anime);
  }
}
export default CreateAnimeService;
