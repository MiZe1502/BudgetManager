import { Field, InputType } from "type-graphql";
import { IncomeType } from "../entities/incomeTypeEntity";

@InputType({
	description: "New input category data"
})
export class AddIncomeTypeInput extends IncomeType {
	@Field()
	public name: string;
}
