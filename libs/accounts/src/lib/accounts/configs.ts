import { AccountsConfig } from './accounts.component';

export const ACCOUNTS_CONFIG_COMMERCIAL: AccountsConfig = {
  showSearch: true,
  showBlueBanner: false,
  showPagination: false,
  showOverviewPane: false
};

export const ACCOUNTS_CONFIG_BUSINESS: AccountsConfig = {
  showSearch: true,
  showBlueBanner: true,
  showPagination: true,
  showOverviewPane: false
};

export const ACCOUNTS_CONFIG_RETAIL: AccountsConfig = {
  showSearch: false,
  showBlueBanner: false,
  showPagination: false,
  showOverviewPane: false
}; 