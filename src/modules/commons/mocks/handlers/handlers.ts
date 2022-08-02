import { planetHandlers } from './planet';
import { planetsHandlers } from './planets';

export const handlers = [...planetsHandlers, ...planetHandlers];
