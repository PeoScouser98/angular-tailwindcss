import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import env from "../environment/env.dev";

export interface Video {
	id: string | number;
	title: string;
	views: number;
	description: string;
	image: string;
	url: string;
}

@Injectable({ providedIn: "root" })
export class VideoService {
	constructor(private httpClient: HttpClient) {}

	getAllVideos() {
		return this.httpClient.get(`${env.baseUrl}/videos`);
	}
	getVideo(id: string | number) {
		return this.httpClient.get(`${env.baseUrl}/videos/${id}`);
	}
	createVideo(payload: any) {
		return this.httpClient.post(`${env.baseUrl}/videos`, payload);
	}

	editVideo(id: string, payload: any) {
		return this.httpClient.patch(`${env.baseUrl}/videos/${id}`, payload);
	}
	deleteVideo(id: string | number) {
		return this.httpClient.delete(`${env.baseUrl}/videos/${id}`);
	}
}
