import { Planet } from '@/commons/types';

export async function fetchPlanet(id: string): Promise<Planet> {
  //TODO extract to config params baseURL
  const fetchURL = ['https://swapi.dev/api', 'planets', id].join('/');
  const response = await fetch(fetchURL);
  return await response.json();
}
