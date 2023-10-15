import { Card, CardMedia } from '@mui/material';
import dayjs from 'dayjs';
import { Article } from 'src/hooks/api';
import { ArticleActions } from './ArticleBaseStructure/ArticleActions';
import { ArticleDescription } from './ArticleBaseStructure/ArticleDescription';
import { ArticleHeader } from './ArticleBaseStructure/ArticleHeader';
import { ArticleTitle } from './ArticleBaseStructure/ArticleTitle';

type NewsApiArticleCardProps = {
  article: Article;
};

export const NewsApiArticleCard = (props: NewsApiArticleCardProps): JSX.Element => {
  const {
    article: { author, publishedAt, title, urlToImage, description, url },
  } = props;

  return (
    <Card sx={{ maxWidth: 400 }}>
      {urlToImage && <CardMedia component="img" height="194" image={urlToImage} alt={title} />}

      <ArticleTitle title={title} />

      <ArticleHeader author={author} publishedAt={dayjs(publishedAt)} />

      {description && <ArticleDescription description={description} />}

      {url && <ArticleActions url={url} />}
    </Card>
  );
};
