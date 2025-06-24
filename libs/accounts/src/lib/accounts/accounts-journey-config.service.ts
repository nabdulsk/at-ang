import { Injectable, Inject, InjectionToken } from '@angular/core';
import { AccountsLayoutConfig } from './accounts-layout-config';
import { AccountsFeatureConfig } from './accounts-feature-config';

export interface AccountsJourneyConfig {
  paginationSize: number;
  showCopyButton: boolean;
  showMaskIcon: boolean;
  showFavouriteIcon: boolean;
}

export const DEFAULT_ACCOUNTS_JOURNEY_CONFIG: AccountsJourneyConfig = {
  paginationSize: 8,
  showCopyButton: true,
  showMaskIcon: true,
  showFavouriteIcon: true,
};

export const ACCOUNTS_JOURNEY_CONFIG_TOKEN = new InjectionToken<
  Partial<AccountsJourneyConfig>
>('ACCOUNTS_JOURNEY_CONFIG_TOKEN');

/* ========== Segment Aggregate Config =========== */
export interface AccountsSegmentConfig {
  feature: AccountsFeatureConfig;
  journey: AccountsJourneyConfig;
  layout: AccountsLayoutConfig;
}

@Injectable({ providedIn: 'root' })
export class AccountsConfigService {
  // Only journey config is injected and can be overridden by the app
  constructor(
    @Inject(ACCOUNTS_JOURNEY_CONFIG_TOKEN)
    private journeyConfig: AccountsJourneyConfig
  ) {}

  getJourneyConfig(): AccountsJourneyConfig {
    return this.journeyConfig;
  }
}
