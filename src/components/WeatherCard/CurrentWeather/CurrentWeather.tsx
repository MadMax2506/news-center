import {
  BaseAirPollutionInformation,
  BaseWeatherInformation,
  Clouds,
  EnvironmentInformation,
  ExtendedAirPollutionInformation,
  Precipitation,
  Weather,
  Wind,
} from '@hooks/api/weather';
import {
  Air as AirIcon,
  Cloud as CloudIcon,
  DeviceThermostat as DeviceThermostatIcon,
  Storm as StormIcon,
  Brightness7 as SunriseIcon,
  Brightness5 as SunsetIcon,
  WaterDrop as WaterDropIcon,
} from '@mui/icons-material';
import { Grid, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { parseVisibility } from '../weatherCard.utils';
import { CurrentWeatherItem } from './CurrentWeatherItem';
import { AccordionType, HandleChangeFunction } from './currentWeather.types';

export type CurrentWeatherProps = {
  weather: Weather;
  main: BaseWeatherInformation;
  visibility: number;
  wind: Wind;
  rain?: Precipitation;
  snow?: Precipitation;
  clouds: Clouds;
  sys: EnvironmentInformation;
  airPollution: {
    main: BaseAirPollutionInformation;
    components: ExtendedAirPollutionInformation;
  };
};

export const CurrentWeather: FC<CurrentWeatherProps> = (props) => {
  const {
    weather: { icon, description },
    clouds: { all: cloudiness },
    main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
    rain,
    snow,
    visibility,
    wind: { speed, gust },
    sys: { sunrise, sunset },
    airPollution: {
      main: { aqi: airQualityIndex },
      components: { co, no, no2, o3, so2, pm2_5, pm10, nh3 },
    },
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

  const formattedSunrise = dayjs(new Date(sunrise * 1000)).format('HH:mm');
  const formattedSunset = dayjs(new Date(sunset * 1000)).format('HH:mm');

  return (
    <>
      <Grid container rowGap={6}>
        <Grid item xs={12} md={4} sx={gridItemStyle}>
          <img src={`/images/weather/${icon}.png`} alt={description} loading="lazy" />
          <Typography variant="h5">{description}</Typography>

          <Stack mt={2} gap={1}>
            <Stack direction="row" gap={2}>
              <SunriseIcon />
              <Typography>{t('sunrise', { sunrise: formattedSunrise })}</Typography>
            </Stack>

            <Stack direction="row" gap={2}>
              <SunsetIcon />
              <Typography>{t('sunset', { sunset: formattedSunset })}</Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} md={8} sx={gridItemStyle}>
          <Stack justifyItems="center">
            <CurrentWeatherItem
              type={AccordionType.TEMPERATURE}
              icon={<DeviceThermostatIcon />}
              expanded={expanded}
              handleChange={handleChange}
            >
              <Typography>{t('temperature.current', { temp })}</Typography>
              <Typography>{t('temperature.feelsLike', { temp: feels_like })}</Typography>
              <Typography>{t('temperature.min', { temp: temp_min })}</Typography>
              <Typography>{t('temperature.max', { temp: temp_max })}</Typography>
            </CurrentWeatherItem>

            <CurrentWeatherItem
              type={AccordionType.WIND}
              icon={<StormIcon />}
              expanded={expanded}
              handleChange={handleChange}
            >
              <Typography>{t('wind.speed', { speed })}</Typography>
              {gust && <Typography>{t('wind.gust', { gust })}</Typography>}
            </CurrentWeatherItem>

            <CurrentWeatherItem
              type={AccordionType.AIR}
              icon={<AirIcon />}
              expanded={expanded}
              handleChange={handleChange}
            >
              <Typography>{t('air.pressure', { pressure })}</Typography>
              <Typography>{t('air.humidity', { humidity })}</Typography>
              <Typography>{t('air.co', { co })}</Typography>
              <Typography>{t('air.no', { no })}</Typography>
              <Typography>{t('air.no2', { no2 })}</Typography>
              <Typography>{t('air.o3', { o3 })}</Typography>
              <Typography>{t('air.so2', { so2 })}</Typography>
              <Typography>{t('air.pm2_5', { pm2_5 })}</Typography>
              <Typography>{t('air.pm10', { pm10 })}</Typography>
              <Typography>{t('air.nh3', { nh3 })}</Typography>
            </CurrentWeatherItem>

            <CurrentWeatherItem
              type={AccordionType.SKY}
              icon={<CloudIcon />}
              expanded={expanded}
              handleChange={handleChange}
            >
              <Typography>{t('sky.cloudiness', { cloudiness })}</Typography>
              <Typography>{t('sky.visibility', parseVisibility(visibility))}</Typography>
            </CurrentWeatherItem>

            {hasPrecipitation && (
              <CurrentWeatherItem
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
              </CurrentWeatherItem>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
