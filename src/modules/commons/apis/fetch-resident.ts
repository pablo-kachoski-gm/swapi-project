import { Resident } from '@/commons/types';

export async function fetchResident(id: string): Promise<Resident> {
  //TODO extract to config params baseURL
  const fetchURL = ['https://swapi.dev/api', 'people', id].join('/');
  const response = await fetch(fetchURL);
  return await response.json();
}
