import { libraryReducer } from 'entities/Library/model/slice/librarySlice';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import cls from './MainPage.module.scss';

const initialReducers: ReducerList = {
	library: libraryReducer,
};

const MainPage: React.FC = () => {
	console.log('MAIN PAGE RENDER ---');

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={cls.page}>
				<div className={cls.page__header}>На данный момент тип запроса -</div>
				<div className={cls.page__footer}>JaredN </div>
			</div>
		</DynamicModuleLoader>
	);
};

export default MainPage;
