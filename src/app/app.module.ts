import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";

import { AppComponent } from "./app.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";

const Routes = [{ path: "", component: HeroComponent }];

@NgModule({
  declarations: [AppComponent, HeroComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes),
    NgZorroAntdModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
