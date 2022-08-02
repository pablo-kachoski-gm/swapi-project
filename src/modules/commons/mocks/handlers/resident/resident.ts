import { rest } from 'msw';
import { LEIA } from './resident1';

const MOCKED_PAGES: Record<string, Record<string, unknown>> = {
  '1': LEIA,
};

export const residentHandlers = [
  rest.get('https://swapi.dev/api/people/:peopleId', (req, res, ctx) => {
    const { peopleId } = req.params;
    const mockedPage = MOCKED_PAGES[peopleId as string] || LEIA;
    return res(ctx.json(mockedPage));
  }),
];
