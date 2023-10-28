import { Card, CardContent } from '@mui/material';
import { isArray } from 'lodash';
import { FC, ReactNode } from 'react';
import { CurrentWeather, CurrentWeatherProps } from './CurrentWeather';

interface IWeatherCardComposition {
  CurrentWeather: FC<CurrentWeatherProps>;
}

type WeatherCardProps = {
  children: ReactNode | ReactNode[];
};

const WeatherCard: FC<WeatherCardProps> & IWeatherCardComposition = ({ children }): JSX.Element => {
  return (
    <Card sx={{ p: 3 }}>
      {(isArray(children) ? children : [children]).map((child) => (
        <CardContent key={child?.toLocaleString()}>{child}</CardContent>
      ))}
    </Card>
  );
};

// Compound pattern
WeatherCard.CurrentWeather = CurrentWeather;

export { WeatherCard };
