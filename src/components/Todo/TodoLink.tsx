import { Link } from '@mui/material';
import { PropsWithChildren, ReactNode, useMemo } from 'react';

type TodoLinkProps = PropsWithChildren<
  | {
      type: 'default' | never;
      href: string;
    }
  | {
      type: 'ticket';
      ticketId: number;
    }
>;

function getLinkData(props: TodoLinkProps): [string, ReactNode] {
  switch (props.type) {
    case 'ticket':
      return [`https://github.com/MadMax2506/news-center/issues/${props.ticketId}`, `#${props.ticketId}`];
    case 'default':
    default:
      return [props.href, props.children];
  }
}

export function TodoLink(props: TodoLinkProps): JSX.Element {
  const [link, label] = useMemo(() => getLinkData(props), [props]);

  return (
    <Link target="_blank" fontWeight={600} href={link}>
      {label}
    </Link>
  );
}
