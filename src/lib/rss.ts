import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_TITLE } from '../consts';
import { useTranslations, type Lang } from '../i18n/ui';
import { getPosts, postUrl } from './posts';

export async function buildRss(context: APIContext, lang: Lang) {
	const posts = await getPosts(lang);
	return rss({
		title: SITE_TITLE,
		description: useTranslations(lang)('site.description'),
		site: context.site!,
		customData: `<language>${lang}</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [post.data.pillar, ...post.data.tags],
			link: postUrl(post),
		})),
	});
}
