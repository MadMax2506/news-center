export enum Regions {
  BADEN_WÜRTTEMBERG = 1,
  BAVARIA = 2,
  BERLIN = 3,
  BRANDENBURG = 4,
  BREMEN = 5,
  HAMBURG = 6,
  HESSE = 7,
  MECKLENBURG_WESTERN_POMERANIA = 8,
  LOWER_SAXONY = 9,
  NORTHRHINE_WESTPHALIA = 10,
  RHINELAND_PALATINATE = 11,
  SAARLAND = 12,
  SAXONY = 13,
  SAXONY_ANHALT = 14,
  SCHLESWIG_HOLSTEIN = 15,
  THURINGIA = 16,
}

export type Article = {
  sophoraId: string;
  externalId: string;
  title: string;
  teaserImage: Image;
  date: string;
  tracking: Tracking[];
  tags: Tag[];
  updateCheckUrl: string;
  regionId: number;
  details: string;
  detailsweb: string;
  shareURL: string;
  regionIds: number[];
  topline: string;
  firstSentence: string;
  brandingImage: BrandingImage;
  type: Type.STORY;
  breakingNews: boolean;
};

export enum Type {
  NEWS_PAGE = 'news page',
  STORY = 'story',
  IMAGE = 'image',
  GENERIC = 'generic',
}

type Image = {
  title: string;
  copyright: string;
  alttext: string;
  imageVariants: ImageVariants;
  type: Type.IMAGE;
};

type ImageVariants = {
  original?: string;
  '1x1-144'?: string;
  '1x1-256'?: string;
  '1x1-432'?: string;
  '1x1-640'?: string;
  '1x1-840'?: string;
  '16x9-256'?: string;
  '16x9-384'?: string;
  '16x9-512'?: string;
  '16x9-640'?: string;
  '16x9-960'?: string;
  '16x9-1280'?: string;
  '16x9-1920'?: string;
};

type Tag = { tag: string };

type Tracking = {
  sid: string;
  src: string;
  ctp: string;
  pdt: string;
  otp: string;
  cid: string;
  pti: string;
  bcr: string;
  type: Type.GENERIC;
};

type BrandingImage = {
  title: string;
  copyright: string;
  alttext: string;
  imageVariants: ImageVariants;
  type: Type.IMAGE;
};
