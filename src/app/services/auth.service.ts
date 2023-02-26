import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import env from "../environment/env.dev";
export interface User {
	id: string | number;
	account: string;
	password: string;
	username: string;
}

export interface LoginData extends User {
	user: Partial<User>;
	accessToken: string;
}
@Injectable({ providedIn: "root" })
export class AuthService {
	isLoggedIn: boolean = !!localStorage.getItem("auth");
	constructor(private httpClient: HttpClient) {}

	login(payload: Pick<User, "account" & "password">) {
		return this.httpClient.post(
			`${env.baseUrl}/login`,
			payload
		) as Observable<LoginData>;
	}
	register(payload: Omit<User, "id">) {
		return this.httpClient.post(`${env.baseUrl}/register`, payload);
	}
}
