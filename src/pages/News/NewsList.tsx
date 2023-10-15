import { NewsApiArticleCard } from '@components/ArticleCard/NewsApiArticleCard';
import { Grid } from '@mui/material';
import { Article as NewsApiArticle } from 'src/hooks/api';

export type NewsArticle = {
  type: 'newsApi';
  data: NewsApiArticle;
};

type NewsListProps = {
  newsArticles: NewsArticle[];
};

export const NewsList = ({ newsArticles }: NewsListProps): JSX.Element => (
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    {newsArticles.map(({ type, data }) => {
      if (type === 'newsApi') {
        return (
          <Grid item key={data.url}>
            <NewsApiArticleCard article={data} />
          </Grid>
        );
      }
      return <></>;
    })}
  </Grid>
);
