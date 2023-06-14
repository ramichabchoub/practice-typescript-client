import React from 'react';

export interface ITaskFooter {
  id: number;
  status?: string;
  onStatusChange?: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
  ) => void;
  onClick?: (
    id: number,
    e?:
      | React.MouseEvent<HTMLButtonElement | MouseEvent>
      | React.MouseEvent<HTMLAnchorElement>,
  ) => void;
}
