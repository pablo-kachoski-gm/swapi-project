import { fetchResident } from '../apis';

export function getResidentById(id: string) {
  return fetchResident(id);
}
