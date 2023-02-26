import { AuthService, User } from "./../../../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
	selector: "app-register",
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
	constructor(private authService: AuthService, private router: Router) {}
	_form = new FormGroup({
		email: new FormControl("", [Validators.required]),
		password: new FormControl("", [Validators.required]),
		username: new FormControl("", [Validators.required]),
	});

	ngOnInit(): void {}
	onSubmit() {
		if (this._form.invalid) {
			Object.values(this.form).forEach((control) => {
				if (control.invalid) {
					control.updateValueAndValidity();
					control.markAsDirty();
				}
			});
			return;
		}
		this.authService
			.register(this._form.value as Omit<User, "id">)
			.subscribe(
				(data) => {
					alert("Edited successfully");
					this.router.navigate(["/dashboard"]);
				},
				(error) => {
					console.log(error);
				}
			);
	}

	get form() {
		return this._form.controls;
	}
}
