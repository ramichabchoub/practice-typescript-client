import { ITaskHeader } from './ITaskHeader';
import { ITaskBody } from './ITaskBody';
import { ITaskFooter } from './ITaskFooter';

export interface ITask
  extends ITaskHeader,
    ITaskBody,
    ITaskFooter {
  id?: string;
  status?: string;
  prioprity?: string;
}
