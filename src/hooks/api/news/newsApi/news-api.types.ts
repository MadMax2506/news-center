export type Article = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

export type Source = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: Categories;
  language: Languages;
  country: Countries;
};

export type Error = {
  status: Status.ERROR;
  code: string;
  message: string;
};

export enum Status {
  OK = 'ok',
  ERROR = 'error',
}

export enum Categories {
  BUSINESS = 'business',
  ENTERTAINMENT = 'entertainment',
  GENERAL = 'general',
  HEALTH = 'health',
  SCIENCE = 'science',
  SPORTS = 'sports',
  TECHNOLOGY = 'technology',
}

export enum Languages {
  ARABIC = 'ar',
  GERMAN = 'de',
  ENGLISH = 'en',
  SPANISH = 'es',
  French = 'fr',
  HEBREW = 'he',
  ITALIAN = 'it',
  DUTCH = 'nl',
  NORWEGIAN = 'no',
  PORTUGUESE = 'pt',
  RUSSIAN = 'ru',
  SWEDISH = 'sv',
  CHINESE = 'zh',
}

export enum Countries {
  UNITED_ARAB_EMIRATES = 'ae',
  ARGENTINA = 'ar',
  AUSTRIA = 'at',
  AUSTRALIA = 'au',
  BELGIUM = 'be',
  BULGARIA = 'bg',
  BRAZIL = 'br',
  CANADA = 'ca',
  SWITZERLAND = 'ch',
  CHINA = 'cn',
  COLOMBIA = 'co',
  CUBA = 'cu',
  CZECH_REPUBLIC = 'cz',
  GERMANY = 'de',
  EGYPT = 'eg',
  FRANCE = 'fr',
  UNITED_KINGDOM = 'gb',
  GREECE = 'gr',
  HONG_KONG = 'hk',
  HUNGARY = 'hu',
  INDONESIA = 'id',
  IRELAND = 'ie',
  ISRAEL = 'il',
  INDIA = 'in',
  ITALY = 'it',
  JAPAN = 'jp',
  SOUTH_KOREA = 'kr',
  LITHUANIA = 'lt',
  LATVIA = 'lv',
  MOROCCO = 'ma',
  MEXICO = 'mx',
  MALAYSIA = 'my',
  NIGERIA = 'ng',
  NETHERLANDS = 'nl',
  NORWAY = 'no',
  NEW_ZEALAND = 'nz',
  PHILIPPINES = 'ph',
  POLAND = 'pl',
  PORTUGAL = 'pt',
  ROMANIA = 'ro',
  SERBIA = 'rs',
  RUSSIA = 'ru',
  SAUDI_ARABIA = 'sa',
  SWEDEN = 'se',
  SINGAPORE = 'sg',
  SLOVENIA = 'si',
  SLOVAKIA = 'sk',
  THAILAND = 'th',
  TUERKIYE = 'tr',
  TAIWAN = 'tw',
  UKRAINE = 'ua',
  UNITED_STATES = 'us',
  VENEZUELA = 've',
  SOUTH_AFRICA = 'za',
}
