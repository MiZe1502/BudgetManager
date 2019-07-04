import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";

@Entity()
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

	public getType(): IncomeType {
		return this.type;
	}

	public getAmount(): number {
		return this.amount;
	}
}
