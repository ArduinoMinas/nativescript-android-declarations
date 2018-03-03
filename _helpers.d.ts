declare module native {
	export interface ArrayConstructor {
		create(type: any, count: number): any;
	}
	export class Array<T> {
		length: number;
		[index: number]: T;
	}
}
