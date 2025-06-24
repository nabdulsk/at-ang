export * from './lib/accounts/accounts.component';
export * from './lib/accounts/configs';
export * from './lib/accounts/accounts.routes';

export {
  AccountsConfigService,
  ACCOUNTS_JOURNEY_CONFIG_TOKEN,
} from './lib/accounts/accounts-journey-config.service';

export {
  commercialAccountsRoute,
  businessAccountsRoute,
  retailAccountsRoute,
} from './lib/accounts/accounts-route-config';
