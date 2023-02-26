import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { VideoService } from "src/app/services/video.service";
@Component({
	selector: "app-create-video",
	templateUrl: "./create-video.component.html",
	styleUrls: ["./create-video.component.css"],
})
export class CreateVideoComponent {
	_form = new FormGroup({
		title: new FormControl("", [Validators.required]),
		description: new FormControl("", [Validators.required]),
		url: new FormControl("", [Validators.required]),
		image: new FormControl("", [Validators.required]),
	});

	constructor(private videoService: VideoService, private router: Router) {}

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
		this.videoService
			.createVideo({ ...this._form.value, views: 0 })
			.subscribe(
				(data) => {
					alert("Added successfully");
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
