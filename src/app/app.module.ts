import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";

const Routes = [{ path: "", component: HeroComponent }];

@NgModule({
  declarations: [AppComponent, HeroComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    NgZorroAntdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
