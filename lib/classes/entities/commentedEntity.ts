import { BaseEntity } from "./baseEntity";
import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";

@ObjectType()
@Entity()
export class CommentedEntity extends BaseEntity {

	@Field()
	@Column()
	private comment: string = "";

	public getComment(): string {
		return this.comment;
	}

	public setComment(comment: string): void {
		this.comment = comment;
	}

}