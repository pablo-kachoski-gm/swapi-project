import { Page, Planet } from '@/commons/types';

export async function fetchPlanets(pageParam?: string): Promise<Page<Planet>> {
  //TODO extract to config params baseURL
  const fetchURL = pageParam || ['https://swapi.dev/api/', 'planets'].join('');
  const response = await fetch(fetchURL);
  return await response.json();
}
