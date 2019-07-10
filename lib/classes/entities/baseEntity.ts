import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BaseEntity {

	@Field()
	@Column()
	protected name: string = "";

	@Field((type) => Int)
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
