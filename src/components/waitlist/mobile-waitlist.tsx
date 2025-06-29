'use client';
import React, { useState, useEffect } from 'react';
import { Check, TabletSmartphone } from 'lucide-react';

import { submitWaitlist } from '@/lib/actions/waitlist';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const MobileWaitlist = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('waitlist-signup-status');
    const hasSignedUp = status === 'true';
    setIsVisible(!hasSignedUp);
    setIsSubmitted(!!hasSignedUp);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await submitWaitlist(email);
      setIsSubmitted(true);
      setEmail('');
      localStorage.setItem('waitlist-signup-status', 'true');
      if (!response.success) throw new Error();
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog>
          <div className="relative duration-200 ease-in-out hover:scale-105">
            <DialogTrigger asChild>
              <button className="flex items-center gap-2 rounded-full bg-[#505C3D] px-4 py-3 text-white shadow-lg">
                <TabletSmartphone size={18} />
                Mobile App Waitlist
              </button>
            </DialogTrigger>
            <button
              onClick={() => setIsVisible(false)}
              className="shadow-mdhover:bg-gray-300 absolute -right-2 -top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full border bg-gray-200 text-base text-gray-600 hover:bg-gray-300"
              aria-label="Close"
            >
              ×
            </button>
          </div>
          <DialogContent className="sm:max-w-[425px]">
            {isSubmitted ? (
              <>
                <DialogHeader>
                  <DialogTitle>{`You're on the list!`}</DialogTitle>
                  <DialogDescription>
                    {`Thanks for joining the waitlist. We'll notify you when the mobile app launches.`}
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center py-4">
                  <div className="rounded-full border bg-popover p-2">
                    <Check size={44} className="text-accent" />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button className="w-full">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <DialogHeader>
                  <DialogTitle>Join the waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to know when our mobile app launches. Early users will get
                    exclusive benefits.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      className="text-muted-foreground placeholder:text-muted-foreground/70"
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <DialogFooter className="gap-4">
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Joining...' : 'Join now'}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default MobileWaitlist;
