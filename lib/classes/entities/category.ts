import { BaseEntity } from "./baseEntity";


class Category extends BaseEntity {

	constructor(name: string) {
		super(name)
	}
}

export class CategoryChain {

	private items: Array<Category>

	constructor() {
		this.items = []
	}

	getCategories(): Array<Category> {
		return this.items
	}

	addCategory(category: Category): void {
		this.items.push(category)
	}

	removeLastCategory(): void {
		this.items.pop()
	}

	clearCategoryChain(): void {
		this.items = []
	}
}