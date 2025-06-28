'use client';
import React, { useEffect, useState } from 'react';

import useSessionStore from '@/stores/session-store';

import TimerContainer from '@/components/timer/timer-container';
import TasksContainer from '@/components/tasks/tasks-container';
import AppNavbar from '@/components/app-navbar';
import Container from '@/components/ui/container';
import LoadingSpinner from '@/components/ui/loading';
import MobileWaitlist from '@/components/waitlist/mobile-waitlist';

const AppContainer = () => {
  // Check if store is hydrated (from localStorage)
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Check if hydration is already complete
    if (useSessionStore.persist.hasHydrated()) {
      setHydrated(true);
    } else {
      // Listen for hydration event if there are delays
      const unsubscribe = useSessionStore.persist.onHydrate(() => {
        setHydrated(true);
      });
      // Clean up function
      return () => unsubscribe();
    }
  }, []);

  if (!hydrated) {
    return (
      <Container className="flex min-h-[80vh] items-center justify-center">
        <LoadingSpinner size="lg" />
      </Container>
    );
  }
  return (
    <>
      <MobileWaitlist />
      <AppNavbar />
      <section className="space-y-14 pb-24 pt-4">
        <TimerContainer />
        <TasksContainer />
      </section>
    </>
  );
};

export default AppContainer;
