import { Avatar, CardHeader } from '@mui/material';
import { Dayjs } from 'dayjs';

type ArticleHeaderProps = {
  author: string;
  publishedAt: Dayjs;
};

export const ArticleHeader = ({ author, publishedAt }: ArticleHeaderProps): JSX.Element => (
  <CardHeader
    avatar={<Avatar aria-label="recipe">{author.charAt(0)}</Avatar>}
    title={author}
    subheader={publishedAt.format('DD.MM.YYYY HH:mm')}
  />
);
