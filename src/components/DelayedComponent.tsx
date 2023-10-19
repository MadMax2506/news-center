import { FC, PropsWithChildren, useEffect, useState } from 'react';

type DelayedComponentProps = {
  delay?: number;
};

export const DelayedComponent: FC<PropsWithChildren<DelayedComponentProps>> = ({ children, delay = 1000 }) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsShown(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isShown ? children : null;
};
