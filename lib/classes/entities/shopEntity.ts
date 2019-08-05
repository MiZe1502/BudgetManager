import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { CommentedEntity } from "./commentedEntity";

@Entity("shop")
@ObjectType()
export class ShopEntity extends CommentedEntity {

	@Column()
	@Field()
	private address: string;

	constructor(name: string, address: string, comment: string) {
		super(name, comment);
		this.address = address;
	}

	public getAddress(): string {
		return this.address;
	}

	public setAddress(address: string) {
		// TODO: Возможно, позже прикрутить какую-нибудь валидацию или расширить адрес до отдельной сущности
		this.address = address;
	}
}
