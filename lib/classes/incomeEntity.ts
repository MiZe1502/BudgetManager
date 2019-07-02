import { BaseEntity } from "./baseEntity";

// export enum IncomeType {
// 	Salary,
// 	Bonus,
// 	Gift,
// }

export class IncomeType extends BaseEntity {
	constructor(name: string) {
		super(name);
	}
}

export class IncomeEntity extends BaseEntity {
	private type: IncomeType;
	private amount: number;

	constructor(name: string, type: IncomeType, amount: number) {
		super(name);
		this.type = type;
		this.amount = amount;
	}
}
