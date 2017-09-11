import React from 'react'
import { intlShape } from 'react-intl'

class BaseComponent extends React.Component {
  static contextTypes = {
    intl: intlShape,
  }

  constructor(props, context) {
    super(props, context)
    this.formatMessage = this.context.intl.formatMessage
  }

  assignState (state) {
    return new Promise((resolve) => {
      const newState = Object.assign({}, this.state, state)
      this.setState(newState, () => {
        resolve()
      })
    })
  }
}

export default BaseComponent
