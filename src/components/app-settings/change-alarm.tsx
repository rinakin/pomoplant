'use client';
import React, { useRef, useEffect } from 'react';

import { ALARM_SOUNDS } from '@/lib/audio';

import SettingsHeader from './settings-header';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useSessionStore from '@/stores/session-store';

const ChangeAlarm: React.FC = () => {
  const { alarm, setAlarm } = useSessionStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to preview the selected alarm sound dynamically
  const previewSound = (src: string) => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
    }

    if (audioRef.current.paused === false) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current.src = src;
    audioRef.current.play();
    audioRef.current.loop = false;
  };

  // Stop audio when the component unmounts
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const onClick = (value: string) => {
    if (value === 'none') {
      setAlarm(undefined);
      return;
    }
    const selectedAlarm = ALARM_SOUNDS.find((item) => item.value === value);
    if (selectedAlarm) {
      previewSound(selectedAlarm.value);
      setAlarm(selectedAlarm);
    }
  };

  return (
    <div className="flex w-full flex-row items-center gap-2">
      <SettingsHeader title="Alarm:" />
      <Select onValueChange={onClick} defaultValue={alarm ? alarm.value : 'none'}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={'none'}>No Alarm</SelectItem>
          {ALARM_SOUNDS.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChangeAlarm;
