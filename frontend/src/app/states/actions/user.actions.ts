import { User } from "src/app/interfaces/user";

export class GetUser {
	static readonly type = "[Configuration View] Get User";
	constructor(public id: string) { }
}

export class CreateUser {
	static readonly type = "[Configuration View] Get User";
	constructor(public userData: User) { }
}

export class UpdateUser {
	static readonly type = "[Configuration View] Update User";
	constructor(public id: string, public data: any) { }
}

export class DeleteUser {
	static readonly type = "[Configuration View] Get User";
	constructor(public id: string) { }
}