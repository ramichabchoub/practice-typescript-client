import { Status } from '../../createTaskForm/enums/Status';
import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.TODO:
      return 'Todo';
    case Status.IN_PROGRESS:
      return 'In Progress';
    case Status.DONE:
      return 'Done';
  }
};
