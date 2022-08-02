import { planetHandlers } from './planet';
import { planetsHandlers } from './planets';
import { residentHandlers } from './resident';

export const handlers = [
  ...planetsHandlers,
  ...planetHandlers,
  ...residentHandlers,
];
