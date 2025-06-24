import { Injectable, Inject, InjectionToken } from '@angular/core';
import { ArrangementViewsParam } from './configs';

/* ========= Feature Config ========= */
export enum ViewType {
  Table = 'table',
  List = 'list',
}

export interface AccountsFeatureConfig {
  showSearch: boolean;
  showPagination: boolean;
  showFilters: boolean;
  showHeirarchy: boolean;
  showCurrencyBreakDown: boolean;
  showViewToggle: boolean;
  manageAccounts: boolean;
  arrangementViewsApiParam: ArrangementViewsParam;
}

// Business Config
export const DEFAULT_ACCOUNTS_FEATURE_CONFIG: AccountsFeatureConfig = {
  showSearch: true,
  showPagination: false,
  showHeirarchy: false,
  showFilters: false,
  showCurrencyBreakDown: false,
  showViewToggle: false,
  manageAccounts: false,
  arrangementViewsApiParam: 'retail-overview',
};

/* ======== Journey Config ============= */
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

/* ======== Layout Config ===========*/
export interface AccountsLayoutConfig {
  showBlueBanner: boolean;
  totalBalanceLabel: string;
  showSortByDefault: boolean;
  listType: ViewType;
}

/* ========== Segment Aggregate Config =========== */
export interface AccountsSegmentConfig {
  feature: AccountsFeatureConfig;
  journey: AccountsJourneyConfig;
  layout: AccountsLayoutConfig;
}

/* =========== Service for Journey Config ============= */
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
