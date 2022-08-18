export const PROVIDERS = [
  "TorrentLeech: cookie authentification",
  "IpTorrents: credentials and cookie authentification",
  "Torrent9",
  "Torrentz2",
  "1337x",
  "ThePirateBay",
  "YggTorrent : credentials and cookie authentification",
  "KickassTorrents",
  "Rarbg",
  "TorrentProject",
  "Yts",
  "Limetorrents",
  "Eztv",
] as const;

export type TProviderKey =
  typeof PROVIDERS[number];

export const _STATE_STORAGE_KEY =
  "_STATE_STORAGE_KEY";

export const SCROLL_BUFFER = 100;
export const HALF_SCROLL_BUFFER =
  SCROLL_BUFFER * 0.5;

export const Y_MOVE = 80;

export const HEADER_HEIGHT = 140;

export const BODY_OFFSET =
  HALF_SCROLL_BUFFER - HEADER_HEIGHT;

export const MAX_WIDTH = 800;
export const MAX_WIDTH_5 =
  MAX_WIDTH * 0.4;

  export const MAX_HEIGHT = 400;


export const CONFIG_1337x = {
  name: '1337x',
  baseUrl: 'https://www.1337x.to',
  searchUrl: '/sort-search/{query}/time/desc/1/',
  categories: {
    All: 'url:/search/{query}/1/',
    Movies: 'Movies',
    TV: 'TV',
    Games: 'Games',
    Music: 'Music',
    Anime: 'Anime',
    Applications: 'Apps',
    Documentaries: 'Documentaries',
    Xxx: 'XXX',
    Other: 'Other',
    Top100: 'url:/top-100'
  },
  defaultCategory: 'All',
  resultsPerPageCount: 20,
  itemsSelector: 'tbody > tr',
  itemSelectors: {
    title: 'a:nth-child(2)',
    time: '.coll-date',
    seeds: '.seeds | int',
    peers: '.leeches | int',
    size: '.size@html | until:<sp',
    desc: 'a:nth-child(2)@href'
  },
  paginateSelector: '.pagination li:nth-last-child(2) a@href',
  torrentDetailsSelector: '.torrent-detail-page@html',
  enableCloudFareBypass: true
}