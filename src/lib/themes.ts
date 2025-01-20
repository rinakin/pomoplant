type ThemeTypes = {
  label: string;
  value: string;
};

export const THEMES: ThemeTypes[] = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Slate',
    value: 'slate',
  },
  {
    label: 'Pastel Pink',
    value: 'pastelPink',
  },
  {
    label: 'Steampunk Cogs',
    value: 'steampunkCogs',
  },
  {
    label: 'Vintage Vinyl',
    value: 'vintageVinyl',
  },
  {
    label: 'Misty Harbor',
    value: 'mistyHarbor',
  },
  {
    label: 'Zen Garden',
    value: 'zenGarden',
  },
];

export const themeValues = THEMES.map((item) => item.value);
