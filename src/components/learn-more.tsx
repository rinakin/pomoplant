import React from 'react';
import Container from '@/components/ui/container';
import { Leaf } from 'lucide-react';

const LearnMore = () => {
  return (
    <section className="py-14">
      <Container>
        <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">Learn more:</h3>
        <ul className="flex list-inside flex-col justify-center gap-6 md:flex-row md:gap-8">
          <li className="flex items-center space-x-2">
            <Leaf size={20} color="#2f7b5d" />
            <a
              href="https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#c2bda3] px-4 py-2 text-sm text-gray-800 transition-all duration-200 hover:bg-[#afaa93]"
            >
              <span className="font-semibold">Lifehacker</span>: Productivity 101
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <Leaf size={20} color="#2f7b5d" />
            <a
              href="https://todoist.com/productivity-methods/pomodoro-technique"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#c2bda3] px-4 py-2 text-sm text-gray-800 transition-all duration-200 hover:bg-[#afaa93]"
            >
              <span className="font-semibold">todoist</span> - The Pomodoro Technique
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <Leaf size={20} color="#2f7b5d" />
            <a
              href="https://www.themuse.com/advice/take-it-from-someone-who-hates-productivity-hacksthe-pomodoro-technique-actually-works"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-[#c2bda3] px-4 py-2 text-sm text-gray-800 transition-all duration-200 hover:bg-[#afaa93]"
            >
              <span className="font-semibold">The Muse</span>: Why Pomodoro Works
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default LearnMore;
