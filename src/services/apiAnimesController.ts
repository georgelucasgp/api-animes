import axios from 'axios';

export default async function getAnimes() {
  const animes = await axios.get(process.env.MOCK_URL || null);

  return animes.data;
}
