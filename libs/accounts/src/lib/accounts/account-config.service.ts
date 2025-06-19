import { Injectable, Optional, Inject, InjectionToken } from '@angular/core';

export interface AccountJourneyConfig {
    paginationSize: number;
    showCopyButton: boolean;
    showMaskIcon: boolean;
    showFavourites: boolean;
}

export const DEFAULT_ACCOUNT_JOURNEY_CONFIG: AccountJourneyConfig = {
    paginationSize: 8,
    showCopyButton: true,
    showMaskIcon: true,
    showFavourites: true
};

export const ACCOUNT_JOURNEY_CONFIG_TOKEN = new InjectionToken<Partial<AccountJourneyConfig>>('ACCOUNT_JOURNEY_CONFIG_TOKEN');

@Injectable({ providedIn: 'root' })
export class AccountConfigService {
    private config: AccountJourneyConfig;

    constructor(@Optional() @Inject(ACCOUNT_JOURNEY_CONFIG_TOKEN) overrideConfig: Partial<AccountJourneyConfig>) {
        this.config = { ...DEFAULT_ACCOUNT_JOURNEY_CONFIG, ...overrideConfig };
    }

    getConfig(): AccountJourneyConfig {
        return this.config;
    }

    // Runtime overrides
    overrideConfig(newConfig: Partial<AccountJourneyConfig>) {
        this.config = { ...this.config, ...newConfig };
    }
} 