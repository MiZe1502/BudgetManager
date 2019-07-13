import { Field, ObjectType } from "type-graphql";
import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { CommentedEntity } from "./commentedEntity";

@ObjectType()
@Entity("goods_category")
export class GoodsCategoryEntity extends CommentedEntity {

	@Field((type) => GoodsCategoryEntity, {
		nullable: true
	})
	@OneToOne((type) => GoodsCategoryEntity)
	@JoinColumn({
		name: "parent_id",
		referencedColumnName: "id"
	})
	private parent?: GoodsCategoryEntity = null;

	@Column({
		name: "parent_id",
		nullable: true
	})
	private parentId?: number;

	constructor(name: string, parent: GoodsCategoryEntity) {
		super(name);
		this.parent = parent;
	}

}

// TODO: Возможно, этот класс будет не нужен и его придется удалить
// export class CategoryChain {

// 	private items: GoodsCategoryEntity[];

// 	constructor() {
// 		this.items = [];
// 	}

// 	public getCategories(): GoodsCategoryEntity[] {
// 		return this.items;
// 	}

// 	public addCategory(category: GoodsCategoryEntity): void {
// 		this.items.push(category);
// 	}

// 	public removeLastCategory(): void {
// 		this.items.pop();
// 	}

// 	public clearCategoryChain(): void {
// 		this.items = [];
// 	}
// }
