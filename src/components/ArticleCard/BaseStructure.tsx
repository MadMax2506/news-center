import { Card, CardActions } from '@mui/material';
import { ReactNode } from 'react';

type BaseStructureProps = {
  children: [ReactNode, ReactNode | undefined, ReactNode | undefined];
};

export const BaseStructure = ({ children }: BaseStructureProps): JSX.Element => (
  <Card>
    {children[0]}
    {children[1]}
    <CardActions disableSpacing>{children[2]}</CardActions>
  </Card>
);
