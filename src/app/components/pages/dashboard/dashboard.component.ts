import { Component, OnInit } from "@angular/core";
import { Video, VideoService } from "src/app/services/video.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
	videoList: Array<Video> = [];
	constructor(private videoService: VideoService) {}

	ngOnInit(): void {
		this.videoService.getAllVideos().subscribe((data) => {
			console.log(data);
			this.videoList = data as Array<Video>;
		});
	}

	deleteVideo(id: string | number) {
		if (confirm("Are you sure?")) {
			this.videoService.deleteVideo(id).subscribe((data) => {
				this.videoList = this.videoList.filter(
					(video) => video.id !== id
				);
				alert("Deleted video");
			});
		}
	}
}
