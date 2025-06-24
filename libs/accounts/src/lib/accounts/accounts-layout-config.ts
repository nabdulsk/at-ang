export enum ViewType {
  Table = 'table',
  List = 'list',
}
export interface AccountsLayoutConfig {
  showBlueBanner: boolean;
  totalBalanceLabel: string;
  showSortByDefault: boolean;
  listType: ViewType;
}
