import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.HIGH:
      return 'error.light';
    case Priority.NORMAL:
      return 'gray.900';
    case Priority.LOW:
      return 'info.light';
    default:
      return 'gray.900';
  }
};
