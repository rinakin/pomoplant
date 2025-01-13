'use client';

import React, { useState } from 'react';
import { Plus, Trash } from 'lucide-react';

import useTasksStore from '@/stores/tasks-store';

import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import ConfirmationDialog from '@/components/ui/confirmation-dialog';
import TaskList from './task-list';
import AddTaskForm from './add-task-form';

const TasksContainer = () => {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const { tasks, clearTasks } = useTasksStore();

  return (
    <section>
      <Container>
        <div className="border-0 bg-background shadow-none">
          <h2 className="flex flex-row items-center gap-2 text-lg font-semibold tracking-tight md:text-2xl">
            Tasks
          </h2>
          <div className="flex flex-col gap-6 py-6">
            <TaskList tasks={tasks} />
            {!showTaskForm && (
              <div className="flex flex-col justify-end gap-4 md:flex-row">
                <Button className="md:order-2" onClick={() => setShowTaskForm(true)}>
                  <Plus /> Add Task
                </Button>
                {tasks.length !== 0 && (
                  <ConfirmationDialog
                    trigger={
                      <Button variant={'outline'} className="md:order-1">
                        <Trash />
                        Clear Tasks
                      </Button>
                    }
                    title="Clear All Tasks"
                    description="Are you sure you want to delete all tasks? This action is irreversible, and your task list will be permanently cleared."
                    onConfirm={clearTasks}
                  />
                )}
              </div>
            )}
            {showTaskForm && <AddTaskForm hideTaskForm={() => setShowTaskForm(false)} />}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TasksContainer;
