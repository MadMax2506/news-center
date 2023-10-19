import { Grid } from '@mui/material';
import { ReactNode } from 'react';

type BaseStructureProps = {
  children: ReactNode[];
};

export const BaseStructure = ({ children }: BaseStructureProps): JSX.Element => (
  <Grid container gap={2} alignItems="center" justifyContent="center">
    {children.map((element, index) => (
      <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
        {element}
      </Grid>
    ))}
  </Grid>
);
