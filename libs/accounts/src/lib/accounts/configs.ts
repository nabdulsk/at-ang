import { AccountsSegmentConfig } from './accounts-journey-config.service';
import { ViewType } from './accounts-layout-config';
import { AccountsSegment } from './accounts-route-config';

export const ACCOUNTS_SEGMENT_CONFIGS: Record<
  AccountsSegment,
  AccountsSegmentConfig
> = {
  commercial: {
    feature: {
      showSearch: true,
      showPagination: true,
      showHeirarchy: true,
      showFilters: false,
      showCurrencyBreakDown: true,
      showViewToggle: false,
      manageAccounts: false,
      arrangementViewsApiParam: 'commercial-overview',
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true,
    },
    layout: {
      showBlueBanner: false,
      totalBalanceLabel: 'Total Liquidity',
      showSortByDefault: false,
      listType: ViewType.Table,
    },
  },
  business: {
    feature: {
      showSearch: true,
      showPagination: true,
      showHeirarchy: false,
      showFilters: true,
      showCurrencyBreakDown: true,
      showViewToggle: false,
      manageAccounts: false,
      arrangementViewsApiParam: 'all',
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true,
    },
    layout: {
      showBlueBanner: true,
      totalBalanceLabel: 'Aggregate balances',
      showSortByDefault: true,
      listType: ViewType.List,
    },
  },
  retail: {
    feature: {
      showSearch: false,
      showPagination: false,
      showHeirarchy: false,
      showFilters: false,
      showCurrencyBreakDown: false,
      showViewToggle: false,
      manageAccounts: true,
      arrangementViewsApiParam: 'retail-overview',
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true,
    },
    layout: {
      showBlueBanner: false,
      totalBalanceLabel: 'Total balance',
      showSortByDefault: true,
      listType: ViewType.List,
    },
  },
};
