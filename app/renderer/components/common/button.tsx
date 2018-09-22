import React from 'react'
import * as cx from 'classnames'
import styles from './button.css'
import { Icon } from 'renderer/components/Icon'
import Tooltip from 'material-ui/Tooltip'

export interface IIconButtonProps {
  icon: string
  iconSize?: 'small'
  title?: string

  /** Disable button interaction */
  disabled?: boolean

  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>
}

const nbsp = '\u00A0'

export const IconButton: React.SFC<IIconButtonProps> = ({
  title,
  icon,
  iconSize,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      style={
        title
          ? {
              position: 'relative'
            }
          : undefined
      }
      {...props}
    >
      {title ? (
        <Tooltip title={title}>
          <div className={styles.tooltip} />
        </Tooltip>
      ) : null}
      <Icon name={icon} size={iconSize} pointerEvents="none" />
      {!!children && nbsp}
      {children ? <span>{children}</span> : undefined}
    </button>
  )
}

interface IHighlightButtonProps extends IIconButtonProps {
  highlight?: boolean
  glass?: boolean
  blend?: boolean
  size?: 'medium' | 'large'
}

export const HighlightButton: React.SFC<IHighlightButtonProps> = ({
  highlight,
  glass,
  blend,
  size,
  ...props
}) => {
  const className = cx(props.className, styles.highlightBtn, styles[size || 'small'], {
    [styles.highlight]: highlight,
    [styles.outline]: !highlight,
    [styles.glass]: glass,
    [styles.blend]: blend
  })
  return <IconButton {...props} className={className} />
}
