import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  heroTitle: string;

  constructor(private router: Router) {}

  ngOnInit() {
    switch (this.router.url) {
      case "/home":
        this.heroTitle = "Adopt A Pet";
        break;
      case "/dogs":
        this.heroTitle = "Dogs";
        break;
      case "/cats":
        this.heroTitle = "Cats";
        break;
    }
  }
}
