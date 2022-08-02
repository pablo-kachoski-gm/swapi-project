import { fetchPlanet } from '../apis';

export function getPlanet(id: string) {
  return fetchPlanet(id);
}
