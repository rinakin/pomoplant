'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { PLANT_ANIMATIONS } from '@/lib/plant-animations';
import { ControllerRenderProps } from 'react-hook-form';
import { TSessionsFormSchema } from '@/schemas';

interface ChangePlantProps {
  field: ControllerRenderProps<TSessionsFormSchema, 'plant'>;
}
const ChangePlant: React.FC<ChangePlantProps> = ({ field }) => {
  return (
    <FormItem className="flex flex-row items-center gap-2 space-y-0">
      <FormLabel>Plant:</FormLabel>
      <FormControl>
        <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
          <SelectTrigger className="w-[180px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem key={'none'} value={'none'}>
              None
            </SelectItem>
            <SelectItem key={'random'} value={'random'}>
              Random
            </SelectItem>
            {PLANT_ANIMATIONS.map((item) => (
              <SelectItem key={item.id} value={item.id}>
                {item.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};

export default ChangePlant;
