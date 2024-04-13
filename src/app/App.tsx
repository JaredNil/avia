import { Suspense, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Header } from 'widgets/Header';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import cls from './styles/index.module.scss';

const App: React.FC = () => {
	const { theme } = useTheme();

	useEffect(() => console.log('RENDER APPCOMPONENT'));

	return (
		<div className={cls.app}>
			<header className={cls.headerWrapper}>
				<Header />
			</header>
			<Suspense fallback="">
				<main className={cls.mainWrapper}>
					<AppRouter />
				</main>
			</Suspense>
		</div>
	);
};

export default App;
