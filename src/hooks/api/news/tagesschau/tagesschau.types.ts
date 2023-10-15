type Tracking = {
  sid: string;
  src: string;
  ctp: string;
  pdt: string;
  otp: string;
  cid: string;
  pti: string;
  bcr: string;
  type: string;
};

type Tag = { tag: string };

type Article = {
  sophoraId: string;
  externalId: string;
  title: string;
  // TODO
  teaserImage: {};
  date: string;
  tracking: Tracking[];
  tags: Tag[];
  updateCheckUrl: string;
  regionId: number;
  details: string;
  detailsweb: string;
  shareURL: string;
  topline: string;
  firstSentence: string;
  // TODO
  geotags: [{}];
};

type Regional = {
  sophoraId: string;
  externalId: string;
  title: string;
  teaserImage: {};
  tracking: Tracking[];
  tags: Tag[];
  updateCheckUrl: string;
  regionId: string;
  // TODO
  images: [{}];
  details: string;
  detailsweb: string;
  shareURL: string;
  topline: string;
  firstSentence: string;
  geotags: string;
  // TODO
  brandingImage: {};
  type: string;
  breakingNews: boolean;
};
