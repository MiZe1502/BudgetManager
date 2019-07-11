import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "./baseEntity";
import { CommentedEntity } from "./commentedEntity";
import { UserEntity } from "./userEntity";

import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class IncomeType extends BaseEntity {
	constructor(name: string) {
		super(name);
	}
}

@ObjectType()
@Entity("income")
export class IncomeEntity extends CommentedEntity {

	@Field((type) => IncomeType)
	@OneToOne((type) => IncomeType)
	@JoinColumn({
		name: "income_type_id",
		referencedColumnName: "id"
	})
	private type: IncomeType;

	@Field()
	@Column()
	private amount: number;

	// @Field((type) => UserEntity)
	@OneToOne((type) => UserEntity)
	@JoinColumn({
		name: "user_id",
		referencedColumnName: "id"
	})
	private user: UserEntity;

	@Field()
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
