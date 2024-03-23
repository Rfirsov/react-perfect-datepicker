declare type TitleMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

declare interface ValueTitleMonth {
  value: number;
  title: TitleMonth;
}
declare interface ValueTitleYear {
  value: number;
  title: string;
}
