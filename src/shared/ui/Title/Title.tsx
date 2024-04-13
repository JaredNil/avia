import React, { ReactNode } from 'react';

import cls from './Title.module.scss';

interface TitleProps {
	children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }: TitleProps) => {
	return <div className={cls.title}>{children}</div>;
};

export default Title;
