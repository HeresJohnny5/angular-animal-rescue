import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

  navbarOpen = false;
  adoptOpen = false;
  getInvolvedOpen = false;

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleAdopt(): void {
    this.adoptOpen = !this.adoptOpen;
  }

  toggleGetInvolved(): void {
    this.getInvolvedOpen = !this.getInvolvedOpen;
  }
}
