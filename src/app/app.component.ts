import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  private data: any;

  constructor(private svc: DataService) {}

  ngOnInit() {
    this.svc.getData().subscribe(data => {
      this.data = data;
    });
  }
}
