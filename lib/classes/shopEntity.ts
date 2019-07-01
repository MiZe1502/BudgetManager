import { BaseEntity } from "./baseEntity";


export class ShopEntity extends BaseEntity {

	private address: string

	constructor(name: string, address: string) {
		super(name)
		this.address = address
	}
}