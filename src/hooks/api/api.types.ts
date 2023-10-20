import { UseQueryOptions } from '@tanstack/react-query';

export type BaseApiQueryProps = Pick<UseQueryOptions, 'suspense' | 'enabled' | 'retry'>;
