import { Field, ObjectType } from "type-graphql";
import { Entity, JoinColumn, OneToOne } from "typeorm";
import { CommentedEntity } from "./commentedEntity";

@ObjectType()
@Entity("goods_category")
export class GoodsCategoryEntity extends CommentedEntity {

	@Field((type) => GoodsCategoryEntity)
	@OneToOne((type) => GoodsCategoryEntity)
	@JoinColumn({
		name: "child_id",
		referencedColumnName: "id"
	})
	private child: GoodsCategoryEntity = null;

	constructor(name: string, child: GoodsCategoryEntity) {
		super(name);
		this.child = child;
	}

}

export class CategoryChain {

	private items: GoodsCategoryEntity[];

	constructor() {
		this.items = [];
	}

	public getCategories(): GoodsCategoryEntity[] {
		return this.items;
	}

	public addCategory(category: GoodsCategoryEntity): void {
		this.items.push(category);
	}

	public removeLastCategory(): void {
		this.items.pop();
	}

	public clearCategoryChain(): void {
		this.items = [];
	}
}
