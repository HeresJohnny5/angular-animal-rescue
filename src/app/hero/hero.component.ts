import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  heroTitle: string;
  heroSub: string = "The best things in life are rescued";

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
      case "/about":
        this.heroTitle = "Who We Are";
        this.heroSub = "Hello World!";
        break;
      case "/donate":
        this.heroTitle = "Donate";
        break;
    }
  }

  heroHomeValue(): Object {
    return {
      "hero-home": this.heroTitle === "Adopt A Pet",
      "hero-dog": this.heroTitle === "Dogs",
      "hero-cat": this.heroTitle === "Cats",
      "hero-about": this.heroTitle === "Who We Are",
      "hero-donate ": this.heroTitle === "Donate"
    };
  }
}
