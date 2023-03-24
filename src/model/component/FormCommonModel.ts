export interface OptionForm {
  label?: string
  field: string
  component: JSX.Element | any
  typeComponent?: "input" | "select" | "date"
  gridDesktop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 
};

export interface PropsFormCommon {
  options: OptionForm[]
  optionsSelect: any[]
  onSearch?: (formData: any) => void
  showButtonSearch?: boolean
};