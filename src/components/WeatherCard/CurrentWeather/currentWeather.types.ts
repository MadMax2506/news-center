export type HandleChangeFunction = (panel: AccordionType) => (event: React.SyntheticEvent, isExpanded: boolean) => void;

export enum AccordionType {
  TEMPERATURE = 'temperature.title',
  WIND = 'wind.title',
  PRECIPITATION = 'precipitation.title',
  AIR = 'air.title',
  SKY = 'sky.title',
}
