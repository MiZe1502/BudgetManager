import { CommentedEntity } from "./commentedEntity";


class GoodsCategory extends CommentedEntity {

	constructor(name: string) {
		super(name)
	}
}

export class CategoryChain {

	private items: Array<GoodsCategory>

	constructor() {
		this.items = []
	}

	getCategories(): Array<GoodsCategory> {
		return this.items
	}

	addCategory(category: GoodsCategory): void {
		this.items.push(category)
	}

	removeLastCategory(): void {
		this.items.pop()
	}

	clearCategoryChain(): void {
		this.items = []
	}
}