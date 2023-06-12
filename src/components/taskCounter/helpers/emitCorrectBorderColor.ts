import { TaskCounterStatusType } from '../interfaces/ITaskCounter';
import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectBorderColor = (
  status: TaskCounterStatusType,
): string => {
  switch (status) {
    case Status.TODO:
      return 'error.light';
    case Status.IN_PROGRESS:
      return 'warning.light';
    case Status.DONE:
      return 'success.light';
  }
};
