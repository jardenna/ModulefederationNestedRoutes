import { RoutingStrategy } from './routing/types';
declare const mount: ({ mountPoint, initialPathname, routingStrategy, }: {
    mountPoint: HTMLElement;
    initialPathname?: string;
    routingStrategy?: RoutingStrategy;
}) => () => void;
export { mount };
