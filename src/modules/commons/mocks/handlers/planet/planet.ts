import { rest } from 'msw';
import { ALDERAAN } from './planet1';

const MOCKED_PAGES: Record<string, Record<string, unknown>> = {
  '1': ALDERAAN,
};

export const planetHandlers = [
  rest.get('https://swapi.dev/api/planets/:planetId', (req, res, ctx) => {
    const { planetId } = req.params;
    const mockedPage = MOCKED_PAGES[planetId as string] || ALDERAAN;
    return res(ctx.json(mockedPage));
  }),
];
