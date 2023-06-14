import { ITaskApi } from '../interfaces/ITaskApi';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export const countTask = (
  tasks: ITaskApi[],
  status: TaskCounterStatusType,
): number => {
  if (!Array.isArray(tasks)) return 0;
  return tasks.filter((task) => task.status === status)
    .length;
};
