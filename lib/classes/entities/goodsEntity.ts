import { BaseEntity } from "./baseEntity";
import { CategoryChain } from "./category";

export class GoodsEntity extends BaseEntity {
	private amount: number
	private categoryChain: CategoryChain
	private price: number


	constructor(name: string, categoryChain: CategoryChain, price: number, amount: number) {
		super(name);
		this.categoryChain = categoryChain;
		this.amount = amount;
		this.price = price;
	}
}
