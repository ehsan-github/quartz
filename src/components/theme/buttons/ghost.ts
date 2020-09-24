export default {
  color: 'primary',
  bg: 'unset',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',

  ':hover': {
    bg: 'primaryShade2',
  },
  ':focus': {
    outline: 'none',
  },
  ':active': {
    outline: 'none',
    bg: 'primaryShade2',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'primary',
  },
  ':disabled': {
    bg: 'unset',
  },
};
