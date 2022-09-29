import { atom } from 'recoil';

export const navAtom = atom({
  key: 'NAV_ATOM',
  default: [
    {
      name: 'Home',
      link: '/',
    },
  ],
});
