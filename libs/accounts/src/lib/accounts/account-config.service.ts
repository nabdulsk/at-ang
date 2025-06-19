import { Injectable, Optional, Inject, InjectionToken } from '@angular/core';

export interface AccountsJourneyConfig {
    paginationSize: number;
    showCopyButton: boolean;
    showMaskIcon: boolean;
    showFavourites: boolean;
}

export const DEFAULT_ACCOUNTS_JOURNEY_CONFIG: AccountsJourneyConfig = {
    paginationSize: 8,
    showCopyButton: true,
    showMaskIcon: true,
    showFavourites: true
};

export const ACCOUNTS_JOURNEY_CONFIG_TOKEN = new InjectionToken<Partial<AccountsJourneyConfig>>('ACCOUNTS_JOURNEY_CONFIG_TOKEN');

@Injectable({ providedIn: 'root' })
export class AccountsConfigService {
    private config: AccountsJourneyConfig;

    constructor(@Optional() @Inject(ACCOUNTS_JOURNEY_CONFIG_TOKEN) overrideConfig: Partial<AccountsJourneyConfig>) {
        this.config = { ...DEFAULT_ACCOUNTS_JOURNEY_CONFIG, ...overrideConfig };
    }

    getConfig(): AccountsJourneyConfig {
        return this.config;
    }

    // Runtime overrides
    overrideConfig(newConfig: Partial<AccountsJourneyConfig>) {
        this.config = { ...this.config, ...newConfig };
    }
} 