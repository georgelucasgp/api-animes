import dotenv from 'dotenv';
dotenv.config();
import schedule from 'node-schedule';

import { AnimeDTO } from '../dto/AnimeDTO';
import getAnimes from '../services/apiAnimesController';
import CreateAnimeService from '../services/CreateAnimeService';

async function handler() {
  const animes = await getAnimes();

  animes.forEach(async (anime: AnimeDTO) => {
    const createAnimeService = new CreateAnimeService();
    await createAnimeService.execute(anime);
  });
}

function bootstrap() {
  const job = schedule.scheduleJob('*/1 * * * *', function () {
    handler();
  });

  job.nextInvocation();
}
bootstrap();
