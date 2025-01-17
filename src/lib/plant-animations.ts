import { PlantData } from '@/types/types';
import plantProgress1 from '@/assets/lottie/plant-progress-lottie.json';
import plantProgress2 from '@/assets/lottie/plant-progress-1.json';

export const PLANT_ANIMATIONS: PlantData[] = [
  {
    id: 'plant-1',
    name: 'Plant 1',
    animationData: plantProgress1,
    growthEndFrame: 102,
  },
  {
    id: 'plant-2',
    name: 'Plant 2',
    animationData: plantProgress2,
    growthEndFrame: 460,
  },
];
