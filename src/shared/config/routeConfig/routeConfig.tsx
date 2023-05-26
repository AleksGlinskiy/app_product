import { PathRouteProps } from "react-router/dist/lib/components";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
}

export const RoutePatch: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
}

export const routeConfig: Record<AppRoutes, PathRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePatch.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePatch.about,
		element: <AboutPage />
	},
}