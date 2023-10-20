export type Coordinates = {
  lon: number;
  lat: number;
};

export type BaseWeatherInformation = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type Precipitation = {
  /** precipitation volume for the last 1 hour, mm */
  '1h': number;
  /** precipitation volume for the last 3 hours, mm */
  '3h': number;
};

export type Clouds = {
  all: number;
};

export type EnvironmentInformation = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export type Weather = {
  id: number;
  icon: WeatherIcon;
  main: WeatherTypes;
  description: string;
};

type WeatherIcon =
  | '01d'
  | '01n'
  | '02d'
  | '02n'
  | '03d'
  | '03n'
  | '04d'
  | '04n'
  | '09d'
  | '09n'
  | '10d'
  | '10n'
  | '11d'
  | '11n'
  | '13d'
  | '13n'
  | '50d'
  | '50n';

enum WeatherTypes {
  THUNDERSTORM = 'Thunderstorm',
  DRIZZLE = 'Drizzle',
  RAIN = 'Rain',
  SNOW = 'Snow',
  ATMOSPHERE = 'Atmosphere',
  CLEAR = 'Clear',
  CLOUDS = 'Clouds',
}
