/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
declare module '*.scss' {
	type IClassNames = Record<string, string>;
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module '*.webm';
declare module '*.jpeg';
declare module '*.svg' {
	import { type FC, type SVGProps } from 'react';

	const content: FC<SVGProps<SVGElement>>;
	export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
