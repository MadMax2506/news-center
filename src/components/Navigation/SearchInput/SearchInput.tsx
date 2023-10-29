import { Search as SearchIcon } from '@mui/icons-material';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchInput.styled';

export const SearchInput: FC = () => {
  const { t } = useTranslation();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder={t('labels.search')} inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};
