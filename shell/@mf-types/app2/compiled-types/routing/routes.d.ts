declare const routes: {
    path: string;
    element: import("react/jsx-runtime").JSX.Element;
    children: ({
        index: boolean;
        element: import("react/jsx-runtime").JSX.Element;
        path?: undefined;
    } | {
        path: string;
        element: import("react/jsx-runtime").JSX.Element;
        index?: undefined;
    })[];
}[];
export default routes;
