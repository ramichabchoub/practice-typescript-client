import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
