declare module native {
	export class Array<T> {
		length: number;
		[index: number]: T;
	}
}
