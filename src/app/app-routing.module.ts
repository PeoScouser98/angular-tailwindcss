import { RegisterComponent } from "./components/pages/register/register.component";
import { LoginComponent } from "./components/pages/login/login.component";
import { EditVideoComponent } from "./components/pages/edit-video/edit-video.component";
import { CreateVideoComponent } from "./components/pages/create-video/create-video.component";
import { DashboardComponent } from "./components/pages/dashboard/dashboard.component";
import { LayoutComponent } from "./components/layout/layout.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: LayoutComponent,
		children: [
			{
				path: "",
				redirectTo: "dashboard",
				pathMatch: "full",
			},
			{
				path: "dashboard",
				component: DashboardComponent,
			},
			{ path: "videos/add", component: CreateVideoComponent },
			{ path: "videos/:id/edit", component: EditVideoComponent },
		],
	},
	{
		path: "login",
		component: LoginComponent,
	},
	{
		path: "register",
		component: RegisterComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
