import { Status } from '../../createTaskForm/enums/Status';

export type TaskCounterStatusType =
  | Status.TODO
  | Status.IN_PROGRESS
  | Status.DONE;

export interface ITaskCounter {
  count?: number;
  status?: TaskCounterStatusType;
  subtitle?: string;
}
