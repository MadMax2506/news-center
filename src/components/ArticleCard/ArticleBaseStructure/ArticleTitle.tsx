import { CardContent, Typography } from '@mui/material';

type ArticleTitleProps = {
  title: string;
};

export const ArticleTitle = ({ title }: ArticleTitleProps): JSX.Element => (
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      {title}
    </Typography>
  </CardContent>
);
