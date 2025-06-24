import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ACCOUNTS_SEGMENT_CONFIGS, AccountsSegment } from './configs';
import {
  AccountsFeatureConfig,
  AccountsLayoutConfig,
  DEFAULT_ACCOUNTS_FEATURE_CONFIG,
} from './accounts-journey-config.service';

@Component({
  selector: 'lib-accounts',
  standalone: true,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent {
  config: AccountsFeatureConfig = DEFAULT_ACCOUNTS_FEATURE_CONFIG;
  layout: AccountsLayoutConfig | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      const segment = data['segment'] as AccountsSegment;

      if (segment && ACCOUNTS_SEGMENT_CONFIGS[segment]) {
        this.config = ACCOUNTS_SEGMENT_CONFIGS[segment].feature;
        this.layout = ACCOUNTS_SEGMENT_CONFIGS[segment].layout;
      } else {
        this.config = DEFAULT_ACCOUNTS_FEATURE_CONFIG;
      }
    });
  }
}
