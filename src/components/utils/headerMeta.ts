
import { Metadata } from 'next';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

const BASE_URL = 'https://interactive.guru';

// Thanks GPT-4
const getDescriptionFromMarkdown = (markdownString: string) => {
  // Remove images and heading text
  const stripped = markdownString.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/(^|\n)#+([^\n]*)/g, '');

  // Remove link URLs while maintaining link text.
  const linksToTextOnly = stripped.replace(/\[([^\]]+)\]\([^\)]+\)/g, (match, linkText) => linkText);

  // Remove formatting
  const cleaned = linksToTextOnly.replace(/\*{1,2}([^*]+)\*{1,2}/g, '$1')
    .replace(/_{1,2}([^_]+)_{1,2}/g, '$1');

  // Replace line breaks and extra spaces
  const whitespaceRemoved = cleaned.split('\n').map(e => e.trim()).join(' ');

  // human addition: Replace double spaces with single spaces.
  const singleSpaces = whitespaceRemoved.split('  ').map(e => e.trim()).join(' ');

  // Split and get first two sentences
  const sentences = singleSpaces.match(/[^.!?]+[.!?]+/g) || [];
  const firstTwoSentences = sentences.slice(0, 2).join(' ').trim();

  return firstTwoSentences;
}

const addBaseUrl = (uri: string) => {
  return `${BASE_URL}${uri}`;
}

// return metadata with website defaults where data is missing
const makeMetadata = (metaData: Metadata): Metadata => {
  const openGraphData: OpenGraph = {
    determiner: 'auto',
    title: metaData?.openGraph?.title ?? metaData?.title ?? 'Christopher Stevens: Worlds to explore. Worlds to create.',
    description: metaData?.openGraph?.description ?? metaData?.description ?? 'Christopher Stevens explores, designs and develops.',
    siteName: 'Christopher Stevens',
    locale: metaData?.openGraph?.locale ?? 'en_US',
    images: metaData?.openGraph?.images ?? [`${BASE_URL}/images/ai-me.jpg`],
    audio: metaData?.openGraph?.audio ?? undefined,
    videos: metaData?.openGraph?.videos ?? undefined,
    url: metaData?.openGraph?.url ?? undefined,
    countryName: metaData?.openGraph?.countryName ?? undefined,
    // TODO: More could be added here when applicable. See https://ogp.me/
  };

  // Thanks GPT-4
  const firstImage: string = (<string>openGraphData?.images)?.[0] ?? `${BASE_URL}/images/ai-me.jpg`;
  
  const metadata: Metadata = {
    metadataBase: metaData.metadataBase ?? null,
    title: metaData?.title ?? 'Christopher Stevens: Worlds to explore. Worlds to create.',
    description: metaData?.description ?? 'Christopher Stevens explores, designs and develops.',
    applicationName: metaData?.applicationName ?? 'Christopher Stevens',
    authors: metaData?.authors ?? [{ name: "Christopher Stevens", url: "https://interactive.guru" }],
    generator: metaData?.generator ?? 'Next.js',
    keywords: metaData?.keywords ?? undefined,
    referrer: metaData?.referrer ?? 'origin',
    themeColor: metaData?.themeColor ?? undefined, // TODO: hmm the nav is light on dark, content is dark on light, what to do...
    colorScheme: metaData?.colorScheme ?? undefined, // TODO: hmm the nav is light on dark, content is dark on light, what to do...
    viewport: metaData?.viewport ?? { width: "device-width", initialScale: 1 },
    creator: metaData?.creator ?? 'Christopher Stevens',
    publisher: metaData?.publisher ?? 'Christopher Stevens',
    robots: metaData?.robots ?? { index: true, follow: true },
    alternates: metaData?.alternates ?? { canonical: "https://interactive.guru" },
    icons: metaData?.icons ?? [
      { rel: 'icon', url: '/icon.png' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-57x57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-114x114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-72x72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-144x144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-60x60.png', sizes: '60x60' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-120x120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-76x76.png', sizes: '76x76' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-152x152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', url: '/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    manifest: metaData?.manifest ?? undefined, // TODO if it makes sense
    openGraph: openGraphData,
    twitter: metaData?.twitter ?? {
      card: 'summary_large_image',
      site: "@owntheweb",
      title: metaData?.twitter?.title ?? metaData?.title ?? 'Christopher Stevens: Worlds to explore. Worlds to create.',
      images: firstImage,
    },
    verification: metaData?.verification ?? undefined,
    appleWebApp: metaData?.appleWebApp ?? {
      capable: true,
      title: 'Christopher Stevens',
      statusBarStyle: 'black-translucent',
    },
    formatDetection: metaData?.formatDetection ?? undefined,
    itunes: metaData?.itunes ?? undefined,
    abstract: metaData?.abstract ?? undefined, // not recommended it seems
    appLinks: metaData?.appLinks ?? undefined,
    archives: metaData?.archives ?? undefined,
    assets: metaData?.assets ?? undefined,
    bookmarks: metaData?.bookmarks ?? undefined, // TODO: see if this is helpful
    category: metaData?.category ?? undefined, // TODO: see if this is helpful
    classification: metaData?.classification ?? 'UNCLASSIFIED',
    other: metaData?.other ?? undefined,
  };

  return metadata;
}

export {
  addBaseUrl,
  makeMetadata,
  getDescriptionFromMarkdown,
}