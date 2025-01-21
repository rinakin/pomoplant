import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Plus } from 'lucide-react';

import useSessionStore from '@/stores/session-store';
import { sessionsFormSchema, TSessionsFormSchema } from '@/schemas';
import { DEFAULT_POMODORO_CYCLE } from '@/lib/timeConfig';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

import { cn } from '@/lib/utils';
import { Session } from '@/types/types';
import useTimerStore from '@/stores/timer-store';

import SettingsHeader from './settings-header';
import SessionHeader from './session-header';
import ChangePlant from './change-plant';
import {
  Form,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
  FormItem,
} from '@/components/ui/form';
interface SessionSettingsProps {
  onSave: () => void;
}

const SessionSettings: React.FC<SessionSettingsProps> = ({ onSave }) => {
  const { sessions, updateSessions, resetSessions, plant, updatePlant } = useSessionStore();
  const { resetTimer } = useTimerStore();
  const form = useForm<TSessionsFormSchema>({
    resolver: zodResolver(sessionsFormSchema),
    defaultValues: { sessions: sessions, plant: plant ? plant.id : 'none' },
  });
  const { control } = form;
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'sessions',
  });

  const onClearSession = () => {
    for (let i = fields.length - 1; i >= 0; i--) {
      remove(i);
    }
  };
  const onDefaultSession = () => {
    replace(DEFAULT_POMODORO_CYCLE);
  };

  const onAddSession = () => {
    append({ minutes: 0, seconds: 0, phase: 'break' });
  };

  const onSubmit = (values: TSessionsFormSchema) => {
    const updatedSessions: Session[] = values.sessions.map((item) => ({
      ...item,
      completed: false,
    }));
    updatePlant(values.plant);
    updateSessions(updatedSessions);
    resetSessions();
    resetTimer();
    onSave();
  };
  return (
    <div className="space-y-4">
      <SettingsHeader title="Customize Sessions" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
            <Button
              type="button"
              variant={'outline'}
              onClick={onDefaultSession}
              className="w-full px-2 sm:w-auto sm:px-3"
            >
              Default Pomodoro
            </Button>
            <FormField
              control={control}
              name="plant"
              render={({ field }) => <ChangePlant field={field} />}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {fields.map((field, index) => {
              const phase = form.watch(`sessions.${index}.phase`);
              return (
                <div
                  key={field.id}
                  className={cn(`rounded-lg border-2 border-border px-4 pb-4 pt-2 shadow-sm`, {
                    'border-border': phase === 'break',
                    'border-primary/70': phase === 'focus',
                  })}
                >
                  <SessionHeader step={index + 1} removeSession={() => remove(index)} />

                  <div className="flex flex-row items-center gap-4">
                    <FormField
                      control={form.control}
                      name={`sessions.${index}.minutes`}
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel>Minutes</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Minutes"
                              type="number"
                              min={0}
                              {...field}
                              onChange={(event) => field.onChange(event.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`sessions.${index}.seconds`}
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel>Seconds</FormLabel>
                          <FormControl>
                            <Input placeholder="seconds" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name={`sessions.${index}.phase`}
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <FormControl>
                          <div className="mt-2 flex flex-row items-center justify-end gap-2">
                            <Switch
                              id="phase-switch"
                              checked={field.value === 'focus'}
                              onCheckedChange={(checked) =>
                                field.onChange(checked ? 'focus' : 'break')
                              }
                            />
                            <span className="text-sm">Focus</span>
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col justify-between gap-6 sm:flex-row sm:gap-4">
            <div className="flex flex-row items-center gap-4">
              <Button
                type="button"
                variant={'secondary'}
                onClick={onAddSession}
                disabled={fields.length >= 6}
              >
                <Plus />
                Add Session
              </Button>
              <Button
                variant={'destructive'}
                type="button"
                onClick={onClearSession}
                className="px-2 sm:px-3"
              >
                Clear Sessions
              </Button>
            </div>

            <Button type="submit" disabled={!form.formState.isDirty}>
              Update
            </Button>
          </div>
          <span className="mt-4 flex justify-center text-xs sm:justify-end">
            *Updating will reset active sessions and current progress.
          </span>
        </form>
      </Form>
    </div>
  );
};

export default SessionSettings;
