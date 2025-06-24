# Nx Workspace

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Finish your CI setup](#finish-your-ci-setup)
- [Run tasks](#run-tasks)
- [Add new projects](#add-new-projects)
- [Install Nx Console](#install-nx-console)
- [Useful links](#useful-links)

---

## Architecture Overview

### Config-Driven Accounts Feature

This workspace uses a robust, scalable, and maintainable config-driven architecture for the Accounts feature, supporting multiple business segments (Commercial, Business, Retail).

#### Key Decisions

- **Centralized Segment Configs:**
  - All configuration for each segment is centralized in `ACCOUNTS_SEGMENT_CONFIGS` (see `libs/accounts/src/lib/accounts/configs.ts`).
  - Each segment config contains three sections:
    - `feature` (**feature config**): Feature toggles and API parameters.
    - `journey` (**journey config**): UI/UX journey options.
    - `layout` (**layout config**): Layout and display options.
  - All configs are strongly typed and easy to extend, as defined in `accounts-journey-config.service.ts`.
- **Override Pattern:**
  - **Feature** and **Layout** configs are always sourced from `ACCOUNTS_SEGMENT_CONFIGS` and cannot be overridden by the consuming app.
  - **Journey** config is provided via Angular DI (`ACCOUNTS_JOURNEY_CONFIG_TOKEN`), allowing the app to override it if needed.
- **App Integration:**
  - Route data for the accounts feature uses the correct segment's `feature` config.
  - The journey config is provided via DI using the correct segment's `journey` config, but can be overridden at the app level.
  - This enforces consistency and prevents accidental overrides of feature/layout configs.
- **Service Refactor:**
  - `AccountsConfigService` only exposes the journey config via DI, with clear comments explaining the override pattern.

#### Config Structure Example

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

#### Segment Configurations

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

#### Overriding Journey Config

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

#### Benefits

- **Scalable:** Adding new segments or config types is easy and type-safe.
- **Maintainable:** All configs are in one place, reducing duplication and confusion.
- **Clear Boundaries:** Only journey config is overridable, which is enforced by design.
- **Extensible:** You can add more config types (e.g., permissions, branding) in the future using the same pattern.

---

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/5rBBV65SQv)

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve app-business
```

To create a production bundle:

```sh
npx nx build app-business
```

To see all available targets to run for a project, run:

```sh
npx nx show project app-business
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Add new projects

While you could add new projects to your workspace manually, you might want to leverage [Nx plugins](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) and their [code generation](https://nx.dev/features/generate-code?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) feature.

To generate a new application, use:

```sh
npx nx g @nx/angular:app demo
```

To generate a new library, use:

```sh
npx nx g @nx/angular:lib mylib
```

You can use `npx nx list` to get a list of installed plugins. Then, run `npx nx list <plugin-name>` to learn about more specific capabilities of a particular plugin. Alternatively, [install Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to browse plugins and generators in your IDE.

[Learn more about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Browse the plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

- [Learn more about this workspace setup](https://nx.dev/getting-started/tutorials/angular-monorepo-tutorial?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
