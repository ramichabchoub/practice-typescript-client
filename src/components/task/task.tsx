import { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { TaskHeader } from './_taskHeader';
import { TaskBody } from './_taskBody';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Status } from '../createTaskForm/enums/Status';
import { Priority } from '../createTaskForm/enums/Priority';
import propTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Test Description',
    prioprity = Priority.LOW,
    status = Status.DONE,
    onSatatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display={'flex'}
      width={'100%'}
      justifyContent={'flex-start'}
      flexDirection={'column'}
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(prioprity),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskBody description={description} />
      <TaskFooter
        onClick={onClick}
        onSatatusChange={onSatatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: propTypes.string,
  date: propTypes.instanceOf(Date),
  description: propTypes.string,
  onSatatusChange: propTypes.func,
  onClick: propTypes.func,
  prioprity: propTypes.string,
  status: propTypes.string,
};
