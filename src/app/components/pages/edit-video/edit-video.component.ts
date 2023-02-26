import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { VideoService } from "src/app/services/video.service";
@Component({
	selector: "app-edit-video",
	templateUrl: "./edit-video.component.html",
	styleUrls: ["./edit-video.component.css"],
})
export class EditVideoComponent implements OnInit {
	id: string | any;
	_form = new FormGroup({
		title: new FormControl("", [Validators.required]),
		description: new FormControl("", [Validators.required]),
		url: new FormControl("", [Validators.required]),
		image: new FormControl("", [Validators.required]),
	});

	constructor(
		private videoService: VideoService,
		private router: Router,
		private activatedRouter: ActivatedRoute
	) {}
	ngOnInit(): void {
		this.activatedRouter.params.subscribe(({ id }) => {
			this.id = id;
			this.videoService.getVideo(id).subscribe((data) => {
				console.log(data);
				this._form.patchValue(data);
			});
		});
	}
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
		this.videoService.editVideo(this.id, this._form.value).subscribe(
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
