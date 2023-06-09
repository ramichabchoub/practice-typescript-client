import React from 'react';
import { IDisabled } from './IDisabled';

export interface ITextField extends IDisabled {
  label?: string;
  placeholder?: string;
  onChange?: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >,
  ) => void;
}
