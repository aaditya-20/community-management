import React from 'react'

type ButtonProps = {
  onClick: () => void
  label: string
  styles?: string
}

const Button: React.FC<ButtonProps> = ({ onClick , label, styles }) => {
  return (
    <button  className={styles}>
      {label}
    </button>
  )
}

export default Button
