import { plainToClass } from "class-transformer";

export class BaseEntity {
	public name: string;

	private id: number;

	constructor(name: string) {
		this.name = name;
	}

	// TODO: Сделать универсальную конвертацию в любой класс через генерики или как-то еще

	// static convert<T>(data: any): T {
	// 	return plainToClass(T, data);
	// }
}
