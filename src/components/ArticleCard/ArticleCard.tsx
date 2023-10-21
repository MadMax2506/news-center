import { Article } from '@hooks/api/news';
import { OpenInNew as OpenInNewIcon, Share as ShareIcon } from '@mui/icons-material';
import { Alert, CardActions, CardHeader, CardMedia, IconButton, Snackbar, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseStructure } from './BaseStructure';

type ArticleCardProps = {
  article: Article;
};

export const IMAGE_SIZE = 256;

export const ArticleCard = (props: ArticleCardProps): JSX.Element => {
  const {
    article: { title, teaserImage, date, shareURL, detailsweb },
  } = props;

  const { t } = useTranslation(['article']);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarOpen = () => setSnackbarOpen(true);
  const handleSnackbarClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  const image = teaserImage?.imageVariants[`1x1-${IMAGE_SIZE}`];
  const url = shareURL ?? detailsweb;

  return (
    <BaseStructure>
      {image && <CardMedia component="img" height={IMAGE_SIZE} image={image} alt={title} />}

      <CardHeader title={title} subheader={dayjs(new Date(date)).format('DD.MM.YYYY HH:mm')} />

      <CardActions disableSpacing>
        {url && (
          <>
            <Tooltip title={t('tooltips.open')}>
              <IconButton aria-label={t('tooltips.open')} onClick={() => window.open(url, '_blank')}>
                <OpenInNewIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title={t('tooltips.share')}>
              <IconButton
                aria-label={t('tooltips.share')}
                onClick={() => {
                  navigator.clipboard.writeText(url);
                  handleSnackbarOpen();
                }}
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>

            <Snackbar
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }}>
                {t('message.copiedLinkToClipboard')}
              </Alert>
            </Snackbar>
          </>
        )}
      </CardActions>
    </BaseStructure>
  );
};
