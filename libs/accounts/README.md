# accounts

This library was generated with [Nx](https://nx.dev).

## Configuration Overview

The `accounts` library provides a flexible configuration system for different account segments: **commercial**, **business**, and **retail**. The configuration is defined in two main files:

- `accounts-journey-config.service.ts`: Defines the config interfaces and default values.
- `configs.ts`: Provides segment-specific configuration objects.

### Config Structure

Each segment configuration (`AccountsSegmentConfig`) consists of three main sections:

- **feature** (`AccountsFeatureConfig`): Controls feature toggles and API parameters.
- **journey** (`AccountsJourneyConfig`): Controls UI/UX journey options.
- **layout** (`AccountsLayoutConfig`): Controls layout and display options.

#### Example: Segment Config Structure

```
{
  feature: {
    showSearch: boolean,
    showPagination: boolean,
    showHeirarchy: boolean,
    showFilters: boolean,
    showCurrencyBreakDown: boolean,
    showViewToggle: boolean,
    manageAccounts: boolean,
    arrangementViewsApiParam: 'all' | 'commercial-overview' | 'retail-overview',
  },
  journey: {
    paginationSize: number,
    showCopyButton: boolean,
    showMaskIcon: boolean,
    showFavouriteIcon: boolean,
  },
  layout: {
    showBlueBanner: boolean,
    totalBalanceLabel: string,
    showSortByDefault: boolean,
    listType: 'table' | 'list',
  }
}
```

### Segment Configurations

- **Commercial**

  - Table view, blue banner hidden, total label: "Total Liquidity"
  - Features: search, pagination, hierarchy enabled
  - Filters/currency breakdown/view toggle/management: disabled
  - API param: `commercial-overview`

- **Business**

  - List view, blue banner shown, total label: "Aggregate balances"
  - Features: search, pagination, filters, currency breakdown enabled
  - Hierarchy/view toggle/management: disabled
  - API param: `all`

- **Retail**
  - List view, blue banner hidden, total label: "Total balance"
  - Features: only account management enabled
  - All other features: disabled
  - API param: `retail-overview`

### Overriding Journey Config

The journey config can be overridden at the app or component level using Angular's dependency injection with the `ACCOUNTS_JOURNEY_CONFIG_TOKEN`.

For standalone applications or components, provide the override in the `providers` array:

```
import { ACCOUNTS_JOURNEY_CONFIG_TOKEN } from './accounts-journey-config.service';

export const APP_PROVIDERS = [
  {
    provide: ACCOUNTS_JOURNEY_CONFIG_TOKEN,
    useValue: { paginationSize: 12 }, // override defaults
  },
];

// In your main.ts or bootstrap file:
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    ...APP_PROVIDERS,
    // other providers
  ],
});
```

## Running unit tests

Run `nx test accounts` to execute the unit tests.
