import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { addPageReducer } from '../model/slice/addPageSlice';

const reducers: ReducerList = {
	addPage: addPageReducer,
};

const AddPage: React.FC = () => {
	return <DynamicModuleLoader reducers={reducers}>AddPage</DynamicModuleLoader>;
};

export default AddPage;
