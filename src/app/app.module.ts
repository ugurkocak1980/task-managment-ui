import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { DashbaordComponent } from "./component/dashbaord/dashbaord.component";


@NgModule({
    declarations: [
        AppComponent,
        DashbaordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent, DashbaordComponent]
})
export class AppModule {}