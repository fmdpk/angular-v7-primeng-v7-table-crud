import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TableModule } from "primeng/table";
import { DropdownModule } from "primeng/dropdown";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { DropdownComponent } from "./components/dropdown/dropdown.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [AppComponent, DropdownComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    TableModule,
    DropdownModule,
    ScrollingModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
