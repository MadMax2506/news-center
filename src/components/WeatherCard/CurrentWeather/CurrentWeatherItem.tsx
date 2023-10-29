import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Divider, List, ListItem, Stack } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { AccordionType, HandleChangeFunction } from './currentWeather.types';

type WeatherCardItemProps = {
  children: ReactNode[];
  type: AccordionType;
  icon?: ReactNode;
  expanded: AccordionType | false;
  handleChange: HandleChangeFunction;
};

export const CurrentWeatherItem: FC<WeatherCardItemProps> = (props) => {
  const { type, icon, children, expanded, handleChange } = props;

  const { t } = useTranslation(['weather']);
  const title = t(type);

  return (
    <Accordion expanded={expanded === type} onChange={handleChange(type)} disableGutters>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={title}>
        <Stack direction="row" gap={2}>
          {icon}
          {title}
        </Stack>
      </AccordionSummary>

      <AccordionDetails sx={{ p: 0 }}>
        <List>
          {children
            .filter((child) => child)
            .map((child, index, self) => (
              <>
                <ListItem key={child?.toLocaleString()}>{child}</ListItem>
                {index < self.length - 1 && <Divider />}
              </>
            ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
