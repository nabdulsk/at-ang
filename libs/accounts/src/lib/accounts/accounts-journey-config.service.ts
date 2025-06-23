import { Injectable, Inject, InjectionToken } from '@angular/core';

/* ========= Feature Config ========= */

export enum AccountsViewType {
    Table = 'table',
    List = 'list'
}

export interface AccountsFeatureConfig {
    showSearch: boolean;
    showPagination: boolean;
    showFilters: boolean;
    showHeirarchy: boolean;
    showCurrencyBreakDown: boolean;
    showViewToggle: boolean;
    listType: AccountsViewType;
}

export const DEFAULT_ACCOUNTS_FEATURE_CONFIG: AccountsFeatureConfig = {
    showSearch: true,
    showPagination: false,
    showHeirarchy: false,
    showFilters: false,
    showCurrencyBreakDown: false,
    showViewToggle: false,
    listType: AccountsViewType.Table
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
    showFavouriteIcon: true
};

export const ACCOUNTS_JOURNEY_CONFIG_TOKEN = new InjectionToken<Partial<AccountsJourneyConfig>>('ACCOUNTS_JOURNEY_CONFIG_TOKEN');

/* ======== Layout Config ===========*/

export interface AccountsLayoutConfig {
    showBlueBanner: boolean;
    totalBalanceLabel: string;
    showSortByDefault: boolean;
}

/* ========== Segment Aggregate Config =========== */

export interface AccountsSegmentConfig {
    accounts: AccountsFeatureConfig;
    journey: AccountsJourneyConfig;
    layout: AccountsLayoutConfig;
}

/* =========== Service for Journey Config ============= */

@Injectable({ providedIn: 'root' })
export class AccountsConfigService {
    // Only journey config is injected and can be overridden by the app
    constructor(@Inject(ACCOUNTS_JOURNEY_CONFIG_TOKEN) private journeyConfig: AccountsJourneyConfig) { }

    getJourneyConfig(): AccountsJourneyConfig {
        return this.journeyConfig;
    }
} 