import React from 'react';
import { Pencil } from 'lucide-react';
import { CheckedState } from '@radix-ui/react-checkbox';

import useTasksStore from '@/stores/tasks-store';
import { cn } from '@/lib/utils';
import { Task } from '@/types/types';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import TaskDialog from './task-dialog';

interface TaskItemProps {
  task: Task;
}
const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { updateTask, removeTask } = useTasksStore();
  const { name, completed, note } = task;

  // Toggle between task completion state when use clicks on checkbox
  const onCheckChange = (checked: CheckedState) => {
    if (!checked) {
      updateTask({ ...task, completed: false });
    } else {
      updateTask({ ...task, completed: true });
    }
  };

  return (
    <div
      className={cn(
        `relative flex items-center justify-between rounded-lg border-2 border-border p-3`,
        {
          'border-muted bg-muted opacity-55': completed,
        },
      )}
    >
      <div className="flex items-center gap-4">
        <Checkbox
          id={`${task.id}`}
          className="md:h-5 md:w-5"
          checked={completed}
          onCheckedChange={onCheckChange}
        />
        <div>
          <Label htmlFor={`${task.id}`} className="text-sm md:text-base">
            {name}
          </Label>
          {note && <p className="text-xs text-muted-foreground">{note}</p>}
        </div>
      </div>
      <div className="flex flex-row items-center gap-1">
        <TaskDialog
          updateTask={updateTask}
          removeTask={removeTask}
          task={task}
          trigger={
            <Button size={'icon'} variant={'ghost'}>
              <Pencil />
            </Button>
          }
        />
      </div>
    </div>
  );
};

export default TaskItem;
