import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero/hero.component";

import { AppComponent } from "./app.component";

const Routes = [{ path: "", component: HeroComponent }];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroComponent, RouterModule.forRoot(Routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
