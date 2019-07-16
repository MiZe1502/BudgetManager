import { ObjectType } from "type-graphql";
import {  Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";

@ObjectType()
@Entity()
export class IncomeType extends BaseEntity {
	constructor(name: string) {
		super(name);
	}
}
