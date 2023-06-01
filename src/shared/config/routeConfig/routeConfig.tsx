import { PathRouteProps } from 'react-router/dist/lib/components';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePatch: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePatch.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePatch.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePatch.not_found,
        element: <NotFoundPage />,
    },
};
