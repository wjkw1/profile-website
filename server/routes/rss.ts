import { serverQueryContent } from '#content/server';
import { Feed } from 'feed';

const BASE_URL = "https://westernwilson.com"
const AUTHOR_NAME = "Western Wilson"

export default defineEventHandler(async (event) => {

    const feed = new Feed({
      title: "Western's Blog",
      description: "Western's RSS feed slice of the internet.",
      id: BASE_URL,
      link: BASE_URL,
      language: "en",
      image: `${BASE_URL}/western-zoom.png`,
      favicon: `${BASE_URL}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, ${AUTHOR_NAME}`,
      updated: new Date(),
      generator: "Nuxt static site generation + Feed for Node.js",
      feedLinks: {
        atom: `${BASE_URL}/rss.xml`
      },
      author: {
        name: AUTHOR_NAME,
        link: BASE_URL
      }
    });

    const blogs = await serverQueryContent(event).find();

    blogs.forEach((post) => {
      feed.addItem({
        title: post.title ? post.title : "Missing Title",
        id: `${BASE_URL}${post._path}`,
        link: `${BASE_URL}${post._path}`,
        description: post.description,
        author: [
          {
            name: AUTHOR_NAME,
          },
        ],
        date: new Date(post.date),
        image: post.img ? `${BASE_URL}/${post.img}` : undefined
      });
    });

    return feed.rss2();
});