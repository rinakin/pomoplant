import React from 'react';
import Container from '@/components/ui/container';

import useSessionStore from '@/stores/session-store';
import RoadmapIcon from './roadmap-icon';
import RoadmapProgress from './roadmap-progress';

const TimerRoadmap = () => {
  const { sessions, activeSessionIndex } = useSessionStore();

  console.log(sessions);

  return (
    <div>
      <Container>
        <div className="flex flex-row items-center justify-center rounded-xl bg-muted p-2 py-4 shadow min-[440px]:p-4">
          {sessions.map((item, index) => (
            <React.Fragment key={index}>
              {index !== 0 && <RoadmapProgress completed={item.completed} />}
              <RoadmapIcon
                phase={item.phase}
                completed={item.completed}
                isActive={index === activeSessionIndex}
              />
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TimerRoadmap;
