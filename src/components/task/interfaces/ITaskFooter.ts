import React from 'react';

export interface ITaskFooter {
  id: number;
  status?: string;
  onSatatusChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  onClick?: (
    e:
      | React.MouseEvent<HTMLButtonElement | MouseEvent>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
