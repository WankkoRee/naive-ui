import themedBaseStyle from './themed-base.cssr.js'
import themedSizeStyle from './themed-size.cssr.js'

export default [
  {
    key: 'syntheticTheme',
    watch: [
      'syntheticTheme'
    ],
    CNode: themedBaseStyle
  },
  {
    key: 'cssrSize',
    watch: [
      'syntheticTheme',
      'cssrSize'
    ],
    CNode: themedSizeStyle
  }
]