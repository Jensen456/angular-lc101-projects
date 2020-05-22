import { Component, OnInit } from "@angular/core";

@Component({
  selector: "fav-links",
  templateUrl: "./fav-links.component.html",
  styleUrls: ["./fav-links.component.css"],
})
export class FavLinksComponent implements OnInit {
  favLinks = [
    "https://en.wikipedia.org/wiki/Main_Page",
    "https://www.w3schools.com/",
  ];
  constructor() {}

  ngOnInit() {}
}
