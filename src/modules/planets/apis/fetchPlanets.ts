import { Page, Planet } from '@/commons/types';

export async function fetchPlanets(): Promise<Page<Planet>> {
  //TODO extract to config params baseURL
  const fetchURL = ['https://swapi.dev/api/', 'planets'].join('');
  const response = await fetch(fetchURL);
  return await response.json();
}
