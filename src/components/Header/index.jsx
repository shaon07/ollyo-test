import { Checkbox } from 'antd'
import React from 'react'
import { styles } from './index.css'

export default function Header() {
  return (
    <div className={`${styles.headerWrapper}`}>
      <h2 className={`${styles.titleLeft}`}>
        <Checkbox defaultChecked />
        <span>1 Files Selected</span>
      </h2>
      <h4 className={`${styles.titleRight}`}>Delete Files</h4>
    </div>
  )
}
