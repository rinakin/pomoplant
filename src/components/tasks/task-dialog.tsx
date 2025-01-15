import React, { useState } from 'react';
import { Trash } from 'lucide-react';

import { Task } from '@/types/types';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import ConfirmationDialog from '@/components/ui/confirmation-dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface TaskDialogProps {
  updateTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  trigger: React.ReactNode;
  task: Task;
}
const TaskDialog: React.FC<TaskDialogProps> = ({ task, trigger, updateTask, removeTask }) => {
  const { name, note } = task;
  const [isEditing, setIsEditing] = useState(false); // track whether dialog is in edit mode
  const [updateName, setUpdateName] = useState(name);
  const [updateNote, setUpdateNote] = useState(note);

  const onUpdateTask = () => {
    const taskData = {
      ...task,
      name: updateName,
      note: updateNote,
    };
    updateTask(taskData);
    setIsEditing(false);
  };

  const onRemoveTask = () => {
    setIsEditing(false);
    removeTask(task.id);
  };

  // Reset the task dialog state (i.e when closing the edit form or dialog to restore original task details)
  const resetDialog = () => {
    setIsEditing(false);
    setUpdateName(name);
    setUpdateNote(note);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto" onCloseAutoFocus={resetDialog}>
        <DialogHeader className={'space-y-2 pt-4 text-start'}>
          <DialogTitle>{isEditing ? 'Edit task' : name}</DialogTitle>
          <DialogDescription>
            {isEditing ? 'Edit your task details' : note || 'No notes for this task.'}
          </DialogDescription>
        </DialogHeader>
        {isEditing && (
          <>
            <div className="space-y-1">
              <Label>Task name</Label>
              <Input
                placeholder="Task name..."
                value={updateName}
                onChange={(e) => {
                  setUpdateName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-1">
              <Label>Notes</Label>
              <Textarea
                value={updateNote}
                onChange={(e) => {
                  setUpdateNote(e.target.value);
                }}
              />
            </div>
          </>
        )}
        <DialogFooter className="mt-3">
          {!isEditing && (
            <div className="flex flex-row justify-end gap-4">
              <DialogClose asChild>
                <Button variant="outline">Close</Button>
              </DialogClose>
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
            </div>
          )}
          {isEditing && (
            <div className="flex w-full flex-row items-center justify-between">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
              <div className="flex flex-row gap-4">
                <ConfirmationDialog
                  title="Confirm Task Deletion"
                  description="Are you sure you want to delete this task? This action is permanent and cannot be undone."
                  onConfirm={onRemoveTask}
                  trigger={
                    <Button variant="destructive" size="icon">
                      <Trash />
                    </Button>
                  }
                />

                <Button
                  type="submit"
                  onClick={onUpdateTask}
                  disabled={updateName.trim().length === 0}
                >
                  Update
                </Button>
              </div>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDialog;
