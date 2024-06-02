import { RoutingStrategy } from './types';
interface createDynamicAppRouterProps {
    routingStrategy?: RoutingStrategy;
    initialPathname?: string;
}
declare function createDynamicAppRouter({ routingStrategy, initialPathname, }: createDynamicAppRouterProps): import("@remix-run/router").Router;
export default createDynamicAppRouter;
