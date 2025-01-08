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
    label: 'Slate Dark',
    value: 'slateDark',
  },
  {
    label: 'Cotton Candy',
    value: 'cottonCandy',
  },
  {
    label: 'Cotton Candy Dark',
    value: 'cottonCandyDark',
  },
];

export const themeValues = THEMES.map((item) => item.value);
