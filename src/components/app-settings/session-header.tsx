import React from 'react';
import { Trash } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SessionHeaderProps {
  step: number;
  removeSession: () => void;
}

const SessionHeader: React.FC<SessionHeaderProps> = ({ step, removeSession }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Session {step}</h3>
        </div>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="duration-200 hover:bg-destructive"
          onClick={removeSession}
        >
          <Trash size={20} />
        </Button>
      </div>
    </>
  );
};

export default SessionHeader;
