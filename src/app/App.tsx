import { Suspense, useEffect } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { Header } from 'widgets/Header';
import { Footer } from 'widgets/Footer/ui/Footer';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

import cls from './styles/index.module.scss';

const App: React.FC = () => {
	const { theme } = useTheme();

	useEffect(() => console.log('RENDER APPCOMPONENT'));

	return (
		<div className={`${cls.app} app_normal_theme`}>
			<header className={cls.headerWrapper}>
				<div className={`${cls.headerInner} responsive`}>
					<Header />
				</div>
			</header>
			<Suspense fallback="">
				<main className={`${cls.pageWrapper} responsive`}>
					<div className={cls.page}>
						<AppRouter />
					</div>
					<div className={cls.footer}>
						<Footer />
					</div>
				</main>
			</Suspense>
		</div>
	);
};

export default App;
