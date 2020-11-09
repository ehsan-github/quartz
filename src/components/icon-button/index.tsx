import React, { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Button as RebassButton, ButtonProps } from 'rebass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Tooltip, { TooltipProps } from '../tooltip';

// Styles
import styles from './icon-button.styles';

export interface IconButtonProps extends Omit<ButtonProps, 'css'> {
  intent?: 'primary' | 'ghost' | 'ghost-white';
  tooltip: string;
  icon: IconProp;
  disabled?: boolean;
  iconOnHover?: IconProp;
  tooltipProps?: Omit<TooltipProps, 'children' | 'mainText'>;
}

const IconButton: FC<IconButtonProps> = ({
  tooltip,
  intent = 'primary',
  icon,
  disabled,
  iconOnHover,
  tooltipProps,
  ...props
}: IconButtonProps) => {
  // @ts-ignore
  const hoverIcon = iconOnHover ?? icon;

  return (
    <Tooltip {...tooltipProps} disabled={disabled} mainText={tooltip}>
      <RebassButton
        sx={styles}
        variant={`icon-${intent}`}
        disabled={disabled}
        {...props}
      >
        <FontAwesomeIcon icon={icon} />
        <FontAwesomeIcon icon={hoverIcon} />
      </RebassButton>
    </Tooltip>
  );
};

export default IconButton;
