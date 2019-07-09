import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BaseEntity {

	@Column()
	protected name: string = "";

	@PrimaryGeneratedColumn()
	private id: number;

	constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	public setName(name: string): void {
		this.name = name;
	}

	// TODO: Сделать универсальную конвертацию в любой класс через генерики или как-то еще и выделить для этого отдельный класс

	// static convert<T>(data: any): T {
	// 	return plainToClass(T, data);
	// }
}
