import { rest } from 'msw';
import { PAGE_1 } from './page1';
import { PAGE_2 } from './page2';
import { PAGE_3 } from './page3';

const MOCKED_PAGES: Record<string, Record<string, unknown>> = {
  '1': PAGE_1,
  '2': PAGE_2,
  '3': PAGE_3,
};

export const planetsHandlers = [
  rest.get('https://swapi.dev/api/planets', (req, res, ctx) => {
    const pageNumber = req.url.searchParams.get('page') as string;
    const mockedPage = MOCKED_PAGES[pageNumber] || PAGE_1;
    return res(ctx.json(mockedPage));
  }),
];
