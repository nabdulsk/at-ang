import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// importing the journey presets
import {
  ACCOUNTS_CONFIG_COMMERCIAL,
  ACCOUNTS_CONFIG_BUSINESS,
  ACCOUNTS_CONFIG_RETAIL,
  AccountsConfig
} from '@accounts';

const ACCOUNTS_CONFIG_MAP: Record<string, AccountsConfig> = {
  commercial: ACCOUNTS_CONFIG_COMMERCIAL,
  business: ACCOUNTS_CONFIG_BUSINESS,
  retail: ACCOUNTS_CONFIG_RETAIL
};

@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-business';

  configName = 'business'; // Change this flag to 'commercial' or 'retail' as needed
  accountsConfig = ACCOUNTS_CONFIG_MAP[this.configName];
}
