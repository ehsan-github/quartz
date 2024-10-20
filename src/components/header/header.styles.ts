import { SxStyleProp } from 'rebass';

export const rightSectionStyles = {
  display: 'flex',
  alignItems: 'center',

  fontFamily: 'label',

  // Actions
  '> div:first-of-type': {
    display: 'flex',
    alignItems: 'center',
    mr: '15px',

    '> span': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      borderRightStyle: 'solid',
      borderRightWidth: '1px',
    },
  },

  // Menu button
  '> span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    cursor: 'pointer',
    outline: 'none',

    p: '20px 20px 20px 12px',
  },
};

export const leftSectionStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '240px',
  height: '39px',

  cursor: 'pointer',

  borderRadius: '0px 3px 3px 0px',
};

export default {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  position: 'relative',

  zIndex: 30,

  width: '100%',
  height: '70px',

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
} as SxStyleProp;
