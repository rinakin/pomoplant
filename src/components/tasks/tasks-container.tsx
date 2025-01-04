import React from 'react';
import Container from '../ui/container';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
const TasksContainer = () => {
  return (
    <section>
      <Container>
        <div className="rounded-xl bg-muted p-4 py-8 text-muted-foreground shadow">
          <Input />
        </div>
      </Container>
    </section>
  );
};

export default TasksContainer;
