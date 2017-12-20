import { Component } from "@angular/core";

import { AboutPage } from "../about/about";
import { ContactPage } from "../contact/contact";
import { FruitPage } from "../fruit/fruit";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = FruitPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {}
}
