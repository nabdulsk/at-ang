import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface AccountsConfig {
  showSearch: boolean;
  showBlueBanner: boolean;
  showPagination: boolean;
  showOverviewPane: boolean;
}

const defaultConfig: AccountsConfig = {
  showSearch: true,
  showBlueBanner: false,
  showPagination: false,
  showOverviewPane: false
};

@Component({
  selector: 'lib-accounts',
  standalone: true,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  config: AccountsConfig = defaultConfig;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.config = data['config'] || defaultConfig;
    });
  }
}
