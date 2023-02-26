import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutComponent } from "./components/layout/layout.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { CreateVideoComponent } from "./components/pages/create-video/create-video.component";
import { EditVideoComponent } from "./components/pages/edit-video/edit-video.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
	declarations: [
		AppComponent,
		LayoutComponent,
		DashboardComponent,
		CreateVideoComponent,
		EditVideoComponent,
		RegisterComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
