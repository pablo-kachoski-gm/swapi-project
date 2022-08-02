import { fetchPlanets } from '../apis';

export function getPlanets(pageParam?: string) {
  return fetchPlanets(pageParam);
}
