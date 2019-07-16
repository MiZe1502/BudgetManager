import { Field, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "./baseEntity";

interface UserData {
	name: string;
	surname: string;
	parentName: string;
	login: string;
	password: string;
	photo: string;
	createdAt: Date;
	updatedAt: Date;
	lastOnlineAt: Date;
	isActive: boolean;
}

@ObjectType()
@Entity("user")
export class UserEntity extends BaseEntity {

	@Column()
	@Field()
	private surname: string = "";

	@Column({
		name: "parent_name"
	})
	@Field()
	private parentName: string = "";

	@Column()
	@Field()
	private login: string;

	@Column()
	@Field()
	private password: string;

	@Column()
	@Field()
	private photo: string;

	@Column({
		name: "created_at"
	})
	@Field()
	private createdAt: Date = new Date();

	@Column({
		name: "updated_at"
	})
	@Field()
	private updatedAt: Date = new Date();

	@Column({
		name: "last_online_at"
	})
	@Field()
	private lastOnlineAt: Date = new Date();

	@Column({
		name: "is_active"
	})
	@Field()
	private isActive: boolean;

// TODO: Переделать на конфиг-объект для конструктора

	// constructor(userData: UserData) {
	// 	super(userData.name);
	// 	this.surname = userData.surname;
	// 	this.parentName = userData.parentName;
	// 	this.login = userData.login;
	// 	this.photo = userData.photo;
	// 	this.createdAt = userData.createdAt;
	// 	this.updatedAt = userData.updatedAt;
	// 	this.lastOnlineAt = userData.lastOnlineAt;
	// 	this.isActive = userData.isActive;

	// 	this.password = userData.password;
	// }

	constructor(name: string,
				         surname: string,
				         parentName: string,
				         login: string,
				         password: string,
				         photo: string,
				         createdAt: Date,
				         updatedAt: Date,
				         lastOnlineAt: Date,
				         isActive: boolean) {
		super(name);
		this.surname = surname;
		this.parentName = parentName;
		this.login = login;
		this.photo = photo;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.lastOnlineAt = lastOnlineAt;
		this.isActive = isActive;

		// TODO: Надо будет добавить соль и хеш и в таком виде уже сохранять
		this.password = password;
	}

	public getSurname(): string {
		return this.surname;
	}

	public setSurname(surname: string) {
		this.surname = surname;
	}

	public getParentName(): string {
		return this.parentName;
	}

	public setParentName(parentName: string) {
		this.parentName = parentName;
	}

	public getFullName(): string {
		return `${this.surname} ${this.name} ${this.parentName}`.trim();
	}

}
