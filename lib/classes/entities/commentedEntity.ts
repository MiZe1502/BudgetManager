import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";

@ObjectType()
@Entity()
export class CommentedEntity extends BaseEntity {

	@Field({
		nullable: true
	})
	@Column({
		nullable: true
	})
	private comment?: string = "";

	constructor(name: string, comment: string) {
		super(name);
		this.comment = comment;
	}

	public getComment(): string {
		return this.comment;
	}

	public setComment(comment: string): void {
		this.comment = comment;
	}

}
