import { buildRss } from '../../lib/rss';

export const GET = (context) => buildRss(context, 'en');
