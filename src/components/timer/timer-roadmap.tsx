import React from 'react';

import useSessionStore from '@/stores/session-store';

import Container from '@/components/ui/container';
import RoadmapIcon from './roadmap-icon';
import RoadmapProgress from './roadmap-progress';

const TimerRoadmap = () => {
  const { sessions, activeSessionIndex } = useSessionStore();

  return (
    <div>
      <Container>
        <div className="flex h-[70px] flex-row items-center justify-center rounded-xl bg-muted p-3 shadow min-[440px]:p-4">
          {sessions.map((item, index) => (
            <React.Fragment key={index}>
              <RoadmapIcon
                phase={item.phase}
                completed={item.completed}
                isActive={index === activeSessionIndex}
                aria-label={`Session ${index + 1} - Phase: ${item.phase} - ${item.completed}% completed`}
              />
              {index !== sessions.length - 1 && <RoadmapProgress completed={item.completed} />}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TimerRoadmap;
