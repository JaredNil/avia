import AboutPage from 'pages/AboutPage/ui/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PreepsPage } from 'pages/PreepsPage';
import { SchedulePage } from 'pages/SchedulePage';
import { SkillsPage } from 'pages/SkillsPage';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean;
	index?: boolean;
};

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	SCHEDULE = 'schedule',
	SKILLS = 'skills',
	PREEPS = 'preeps',
	CONTACT = 'contact',

	NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.SCHEDULE]: '/schedule',
	[AppRoutes.SKILLS]: '/skills',
	[AppRoutes.PREEPS]: '/preeps',
	[AppRoutes.CONTACT]: '/contact',

	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
		index: true,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.SCHEDULE]: {
		path: RoutePath.schedule,
		element: <SchedulePage />,
	},
	[AppRoutes.SKILLS]: {
		path: RoutePath.skills,
		element: <SkillsPage />,
	},
	[AppRoutes.PREEPS]: {
		path: RoutePath.preeps,
		element: <PreepsPage />,
	},
	[AppRoutes.CONTACT]: {
		path: RoutePath.contact,
		element: <ContactPage />,
	},

	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />,
	},
};
