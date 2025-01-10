import React, { useState } from 'react';
import { Minus, Notebook, Plus } from 'lucide-react';

import useTasksStore from '@/stores/tasks-store';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

interface AddTaskFormProps {
  hideTaskForm: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ hideTaskForm }) => {
  const { addTask } = useTasksStore();
  const [showAddNote, setShowAddNote] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskNote, setTaskNote] = useState('');

  const onAddTask = () => {
    const taskData = {
      name: taskName,
      note: taskNote,
    };
    addTask(taskData);
    hideTaskForm();
  };

  return (
    <Card className="flex flex-col gap-4 rounded-lg bg-muted p-4 md:p-6">
      <Input
        placeholder="What task do you want to complete?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      {showAddNote && (
        <Textarea
          placeholder="Add notes."
          value={taskNote}
          onChange={(e) => setTaskNote(e.target.value)}
        />
      )}
      {!showAddNote && (
        <Button variant={'outline'} value={taskNote} onClick={() => setShowAddNote(true)}>
          <Notebook /> Add note
        </Button>
      )}
      <div className="flex flex-row justify-end gap-4">
        <Button variant={'ghost'} onClick={hideTaskForm}>
          <Minus />
          Cancel
        </Button>
        <Button onClick={onAddTask} disabled={taskName.trim().length === 0}>
          <Plus />
          Add
        </Button>
      </div>
    </Card>
  );
};

export default AddTaskForm;
