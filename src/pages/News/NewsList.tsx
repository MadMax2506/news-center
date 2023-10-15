import { Todo } from '@components/Todo';
import { Grid } from '@mui/material';
import { Article } from 'src/hooks/api/news';

type NewsListProps = {
  newsArticles: Article[];
};

export const NewsList = ({ newsArticles }: NewsListProps): JSX.Element => (
  <Grid container justifyContent="center" alignItems="center" spacing={2}>
    {newsArticles.map((data) => (
      <Grid item key={data.sophoraId}>
        <Todo title="News Item" />
      </Grid>
    ))}
  </Grid>
);
