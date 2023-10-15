import { CardContent, Typography } from '@mui/material';

type ArticleDescriptionProps = {
  description: string;
};

export const ArticleDescription = ({ description }: ArticleDescriptionProps): JSX.Element => (
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
  </CardContent>
);
