import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity";
import { UserEntity } from "./userEntity";

@Entity()
export class IncomeType extends BaseEntity {
	constructor(name: string) {
		super(name);
	}
}

@Entity("income")
export class IncomeEntity extends BaseEntity {

	@OneToOne((type) => IncomeType)
	@JoinColumn({
		name: "income_type_id",
		referencedColumnName: "id"
	})
	private type: IncomeType;

	@Column()
	private amount: number;

	@OneToOne((type) => UserEntity)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id"
	})
	private user: UserEntity;

	@Column()
	private datetime: Date = new Date();

	constructor(name: string, type: IncomeType, amount: number, user: UserEntity, datetime: Date) {
		super(name);
		this.type = type;
		this.amount = amount;
		this.user = user;
		this.datetime = datetime;
	}

	public getType(): IncomeType {
		return this.type;
	}

	public getAmount(): number {
		return this.amount;
	}

	public setType(type: IncomeType): void {
		this.type = type;
	}
}
