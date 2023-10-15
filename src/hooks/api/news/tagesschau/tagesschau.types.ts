export type Article = {
  sophoraId: string;
  externalId: string;
  title: string;
  date: string;
  teaserImage: TeaserImage;
  tags: Tag[];
  updateCheckUrl: string;
  tracking: Tracking[];
  topline: string;
  firstSentence: string;
  brandingImage: BrandingImage;
  details: string;
  detailsweb: string;
  shareURL: string;
  geotags: Geotag[];
  regionId: number;
  regionIds: number[];
  type: Type.STORY;
  breakingNews: boolean;
};

enum Type {
  STORY = 'story',
  IMAGE = 'image',
  GENERIC = 'generic',
}

type TeaserImage = {
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

type Geotag = {};
