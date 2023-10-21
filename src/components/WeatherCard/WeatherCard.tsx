import {
  BaseWeatherInformation,
  Clouds,
  EnvironmentInformation,
  Precipitation,
  Weather,
  Wind,
} from '@hooks/api/weather';
import {
  Air as AirIcon,
  DeviceThermostat as DeviceThermostatIcon,
  WaterDrop as WaterDropIcon,
} from '@mui/icons-material';
import { Card, CardContent, Grid, ListItemText, Stack, Typography, useTheme } from '@mui/material';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { WeatherCardItem } from './WeatherCardItem';
import { AccordionType, HandleChangeFunction } from './weatherCard.types';

type WeatherCardProps = {
  weather: Weather;
  main: BaseWeatherInformation;
  visibility: number;
  wind: Wind;
  rain?: Precipitation;
  snow?: Precipitation;
  clouds: Clouds;
  sys: EnvironmentInformation;
};

export const WeatherCard: FC<WeatherCardProps> = (props): JSX.Element => {
  const {
    weather: { icon, description },
    clouds: { all: cloudiness },
    main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    rain,
    snow,
    visibility,
    wind: { speed, gust },
    sys: { sunrise, sunset },
  } = props;

  const { t } = useTranslation(['weather']);
  const { breakpoints } = useTheme();

  const [expanded, setExpanded] = useState<AccordionType | false>(AccordionType.TEMPERATURE);
  const handleChange: HandleChangeFunction = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { '1h': rainLastHour, '3h': rainLast3Hours } = rain ?? {};
  const { '1h': snowLastHour, '3h': snowLast3Hours } = snow ?? {};

  const gridItemStyle = {
    textAlign: 'center',
    [breakpoints.up('md')]: {
      textAlign: 'left',
    },
  };

  const hasRain = Boolean(rainLastHour) || Boolean(rainLast3Hours);
  const hasSnow = Boolean(snowLastHour) || Boolean(snowLast3Hours);
  const hasPrecipitation = hasRain || hasSnow;

  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Grid container rowGap={6}>
          <Grid item xs={12} md={4} sx={gridItemStyle}>
            <img src={`/images/weather/${icon}.png`} alt={description} loading="lazy" />
            <Typography variant="h5">{description}</Typography>
          </Grid>

          <Grid item xs={12} md={8} sx={gridItemStyle}>
            <Stack justifyItems="center">
              <WeatherCardItem
                type={AccordionType.TEMPERATURE}
                icon={<DeviceThermostatIcon />}
                expanded={expanded}
                handleChange={handleChange}
              >
                <ListItemText primary={t('temperature.current', { temp })} />
                <ListItemText primary={t('temperature.feelsLike', { temp: feels_like })} />
                <ListItemText primary={t('temperature.min', { temp: temp_min })} />
                <ListItemText primary={t('temperature.max', { temp: temp_max })} />
              </WeatherCardItem>

              <WeatherCardItem
                type={AccordionType.WIND}
                icon={<AirIcon />}
                expanded={expanded}
                handleChange={handleChange}
              >
                <Typography>{t('wind.speed', { speed })}</Typography>

                {gust && <Typography>{t('wind.gust', { gust })}</Typography>}
              </WeatherCardItem>

              <Typography>{t('cloudiness', { cloudiness })}</Typography>

              {hasPrecipitation && (
                <WeatherCardItem
                  type={AccordionType.PRECIPITATION}
                  icon={<WaterDropIcon />}
                  expanded={expanded}
                  handleChange={handleChange}
                >
                  {rainLastHour && <Typography>{t('precipitation.rain.lastHour', { rain: rainLastHour })}</Typography>}

                  {rainLast3Hours && (
                    <Typography>{t('precipitation.rain.last3Hours', { rain: rainLast3Hours })}</Typography>
                  )}

                  {snowLastHour && <Typography>{t('precipitation.snow.lastHour', { snow: snowLastHour })}</Typography>}

                  {snowLast3Hours && (
                    <Typography>{t('precipitation.snow.last3Hours', { snow: snowLast3Hours })}</Typography>
                  )}
                </WeatherCardItem>
              )}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
