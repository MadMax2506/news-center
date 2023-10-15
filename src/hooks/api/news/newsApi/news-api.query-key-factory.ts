import { EverythingQueryParams } from './useNewsApiEverything';
import { SourcesQueryParams } from './useNewsApiSources';
import { TopHeadlinesQueryParams } from './useNewsApiTopHeadline';

export const newsQueryKeyFactory = {
  all: () => ['newsApi'],
  everything: (queryParams: EverythingQueryParams) => ['newsApi', 'everything', queryParams],
  topHeadline: (queryParams: TopHeadlinesQueryParams) => ['newsApi', 'topHeadline', queryParams],
  sourcesByParams: (queryParams: SourcesQueryParams | undefined) => {
    return queryParams ? ['newsApi', 'sources', queryParams] : ['newsApi', 'sources'];
  },
};
