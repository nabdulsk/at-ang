export type ArrangementViewsParam =
  | 'all'
  | 'commercial-overview'
  | 'retail-overview';

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
