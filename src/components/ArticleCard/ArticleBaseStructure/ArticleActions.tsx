import { Link as LinkIcon, Share as ShareIcon } from '@mui/icons-material';
import { Alert, CardActions, IconButton, Snackbar } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

type ArticleActionsProps = {
  url: string;
};

export const ArticleActions = ({ url }: ArticleActionsProps): JSX.Element => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = (_?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <>
      <CardActions disableSpacing>
        <IconButton aria-label="open external" onClick={() => window.open(url, '_blank')}>
          <LinkIcon />
        </IconButton>

        <IconButton
          aria-label="share"
          onClick={() => {
            navigator.clipboard.writeText(url);
            handleOpen();
          }}
        >
          <ShareIcon />
        </IconButton>
      </CardActions>

      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {t('message.copiedLinkToClipboard')}
        </Alert>
      </Snackbar>
    </>
  );
};
