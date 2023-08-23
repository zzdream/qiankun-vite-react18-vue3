import { useState, useEffect } from 'react'
import './SvgIcon.less'
interface Props {
  color?: string
  className?: string
  onClick?: () => void
  href: string
}
const SvgIcon = (props: Props) => {
  const [color, setColor] = useState(props.color || '#ccc')
  const [className, setClassName] = useState(props.className)
  const [href, setHref] = useState(props.href)

  useEffect(() => {
    setColor(props.color || '#ccc')
    setClassName(props.className)
    setHref(`#${props.href}`)
  }, [props.href, props.className, props.color])

  const onClick = () => {
    if (props.onClick) {
      props.onClick()
    }
  }
  return (
    <svg className={`svgClass ${className}`} aria-hidden='true' onClick={onClick}>
      <use xlinkHref={href} fill={color}></use>
    </svg>
  )
}

export default SvgIcon
