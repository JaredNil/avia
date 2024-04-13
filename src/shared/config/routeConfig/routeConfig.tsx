import { AddPage } from 'pages/AddPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	SCHEDULE = 'schedule',
	PREEPS = 'preeps',
	CONTACT = 'contact',

	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.SCHEDULE]: '/schedule',
	[AppRoutes.PREEPS]: '/preeps',
	[AppRoutes.CONTACT]: '/contact',

	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.ADD]: {
		path: RoutePath.add,
		element: <AddPage />,
	},
	[AppRoutes.ADD]: {
		path: RoutePath.add,
		element: <AddPage />,
	},
	[AppRoutes.ADD]: {
		path: RoutePath.add,
		element: <AddPage />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
