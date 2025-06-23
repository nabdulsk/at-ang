import { AccountsViewType, AccountsSegmentConfig } from './accounts-journey-config.service';

export type AccountsSegment = 'commercial' | 'business' | 'retail';

export const ACCOUNTS_SEGMENT_CONFIGS: Record<AccountsSegment, AccountsSegmentConfig> = {
  commercial: {
    accounts: {
      showSearch: true,
      showPagination: true,
      showHeirarchy: true,
      showFilters: false,
      showCurrencyBreakDown: false,
      showViewToggle: false,
      listType: AccountsViewType.List
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true
    },
    layout: {
      showBlueBanner: false,
      totalBalanceLabel: 'Total Liquidity',
      showSortByDefault: false
    }
  },
  business: {
    accounts: {
      showSearch: true,
      showPagination: true,
      showHeirarchy: false,
      showFilters: true,
      showCurrencyBreakDown: true,
      showViewToggle: false,
      listType: AccountsViewType.List
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true
    },
    layout: {
      showBlueBanner: true,
      totalBalanceLabel: 'Aggregate balances',
      showSortByDefault: true
    }
  },
  retail: {
    accounts: {
      showSearch: false,
      showPagination: false,
      showHeirarchy: false,
      showFilters: false,
      showCurrencyBreakDown: false,
      showViewToggle: false,
      listType: AccountsViewType.List
    },
    journey: {
      paginationSize: 8,
      showCopyButton: true,
      showMaskIcon: true,
      showFavouriteIcon: true
    },
    layout: {
      showBlueBanner: false,
      totalBalanceLabel: 'Total balance',
      showSortByDefault: true
    }
  }
}; 