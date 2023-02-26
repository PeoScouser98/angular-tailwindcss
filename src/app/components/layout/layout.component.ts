import { AuthService, User } from "./../../services/auth.service";
import { Component } from "@angular/core";

@Component({
	selector: "app-layout",
	templateUrl: "./layout.component.html",
	styleUrls: ["./layout.component.css"],
})
export class LayoutComponent {
	currentUser: Partial<User> | any;
	constructor(public authService: AuthService) {}

	ngOnInit(): void {
		this.getCurrentUser();
	}

	getCurrentUser() {
		try {
			this.currentUser = JSON.parse(
				localStorage.getItem("auth")!
			) as Partial<User> | null;
		} catch (error) {
			this.currentUser = null;
		}
	}
}
