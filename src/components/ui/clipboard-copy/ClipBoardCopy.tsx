import { FC, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import copyIcon from 'src/assets/icons/copy-icon.svg'

import styles from './ClipBoardCopy.module.scss'

const ClipBoardCopy: FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    setCopied(true)
  }

  return (
    <div className={styles.block}>
      <CopyToClipboard text={text} onCopy={handleCopy}>
        <img className={styles.copyIcon} src={copyIcon} alt='copy' />
      </CopyToClipboard>

      {copied ? (
        <div className={styles.copied}>
          <span>Copied</span>
        </div>
      ) : null}
    </div>
  )
}

export default ClipBoardCopy
