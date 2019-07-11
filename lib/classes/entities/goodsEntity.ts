import { CommentedEntity } from "./commentedEntity";
import { CategoryChain } from "./goodsCategory";

export class GoodsEntity extends CommentedEntity {
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
