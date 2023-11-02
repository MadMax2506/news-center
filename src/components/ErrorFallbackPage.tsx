import { Button, Card, CardContent, CardHeader, CardMedia, Link, Stack, Typography } from '@mui/material';
import { paths } from '@routes';
import { FC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export const ErrorFallbackPageProps: FC<FallbackProps> = ({ error }) => {
  const { t } = useTranslation();

  if (import.meta.env.DEV) console.error(error);

  return (
    <Stack justifyContent="center" alignItems="center" spacing={2} maxWidth="100vw" maxHeight="100vh">
      <Card sx={{ maxWidth: 800 }}>
        <CardMedia component="img" height="400" image="/images/fallback.png" alt="Opps" />
        <CardHeader
          title={t('errors.generic.title')}
          titleTypographyProps={{ align: 'center', variant: 'h2', color: 'text.secondary' }}
        />
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="body1" color="text.secondary">
              {t('errors.generic.message.part1')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {t('errors.generic.message.part2')}
            </Typography>

            <Typography variant="body1" color="text.secondary">
              {t('errors.generic.message.part3')}{' '}
              <Link href="mailto:webmaster@max-janorschke.de">webmaster@max-janorschke.de</Link>
            </Typography>

            <Stack direction="row" spacing={2} justifyContent="center">
              <Button href={paths.root.pattern} variant="contained">
                {t('menu.dashboard')}
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
