import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListComponent } from "./list/list.component";
import { FormsComponent } from "./forms/forms.component";

const Routes = [
  { path: "", component: HeroComponent },
  { path: "hero", component: HeroComponent },
  { path: "list", component: ListComponent },
  { path: "forms", component: FormsComponent }
];

@NgModule({
  declarations: [AppComponent, HeroComponent, ListComponent, FormsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Routes),
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
