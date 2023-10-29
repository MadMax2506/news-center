import { AirQualityIndex } from '@hooks/api/weather';

export const parseVisibility = (visibility: number) => {
  if (visibility <= 1000) return { visibility, unit: 'm' };
  return { visibility: visibility / 1000, unit: 'km' };
};

export const mapAirQualityIndexToTextKey = (airQualityIndex: AirQualityIndex) => {
  switch (airQualityIndex) {
    case AirQualityIndex.GOOD:
      return 'airQualityIndex.good';
    case AirQualityIndex.MODERATE:
      return 'airQualityIndex.moderate';
    case AirQualityIndex.FAIR:
      return 'airQualityIndex.fair';
    case AirQualityIndex.POOR:
      return 'airQualityIndex.poor';
    case AirQualityIndex.VERY_POOR:
      return 'airQualityIndex.veryPoor';
  }
};
