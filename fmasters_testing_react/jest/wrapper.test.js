import React from 'react'
import Wrapper from './Wrapper'
import { render } from '@testing-library/react'

describe('Wrapper test', () => {
  it ('should render component', () => {
    const { getByText, debug } = render(<Wrapper />)

    debug()

  })
})