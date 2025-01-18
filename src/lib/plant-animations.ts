import { PlantData } from '@/types/types';
import PeaceLily from '@/assets/lottie/peace-lily.json';
import SnakePlant from '@/assets/lottie/snake-plant.json';
import Coffee from '@/assets/lottie/coffee.json';
import Cactus from '@/assets/lottie/cactus.json';

export const PLANT_ANIMATIONS: PlantData[] = [
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    animationData: PeaceLily,
    growthEndFrame: 102,
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    animationData: SnakePlant,
    growthEndFrame: 310,
  },
  {
    id: 'cactus',
    name: 'Cactus',
    animationData: Cactus,
    growthEndFrame: 390,
  },
  {
    id: 'coffee',
    name: 'Coffee',
    animationData: Coffee,
    growthEndFrame: 460,
  },
];
