import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MENU_ITEMS } from './menu.const';

type MenuBodyProps = {
  isMobile?: boolean;
};

export const MenuBody: FC<MenuBodyProps> = ({ isMobile = false }): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <List sx={isMobile ? { my: 6 } : { mt: 2, mx: 3 }}>
      {MENU_ITEMS.map(({ textKey, icon: Icon, path }) => (
        <ListItem key={textKey} disablePadding onClick={() => navigate(path)}>
          <ListItemButton>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>

            <ListItemText primary={t(textKey)} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
