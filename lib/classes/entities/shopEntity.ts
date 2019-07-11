import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommentedEntity } from "./commentedEntity";

@Entity("shop")
export class ShopEntity extends CommentedEntity {

	@Column()
	private address: string;

	constructor(name: string, address: string) {
		super(name);
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
