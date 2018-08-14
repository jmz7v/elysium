// Libraries
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import { render, fireEvent, cleanup } from 'react-testing-library'

// Components
import Button, { config } from './index'

// Other
afterEach(cleanup)

const props = {
  text: 'button',
  className: 'special-classname',
  kind: 'is-primary',
  loading: false
}

describe('Button', () => {
  test('Call onClick when clicking button', () => {
    const spy = jest.fn()
    const { getByText } = render(<Button text={props.text} onClick={spy} />)

    fireEvent(
      getByText(props.text),
      new window.MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    )

    expect(spy).toHaveBeenCalledTimes(1)
  })

  test('Has main classes', () => {
    const { getByText } = render(<Button {...props} />)
    const { className } = getByText(props.text)

    // Assert
    expect(className.split(' ')).toContain(config.main)
    expect(className.split(' ')).toContain(props.className)
    expect(className.split(' ')).toContain(props.kind)
  })

  test('Adds loading className when loading prop is set', () => {
    const { getByText } = render(<Button {...props} loading />)
    const { className } = getByText(props.text)

    // Assert
    expect(className.split(' ')).toContain(config.loading)
  })

  test('Adds disabled className when disabled prop is set', () => {
    const { getByText } = render(<Button {...props} disabled />)
    const { className } = getByText(props.text)

    // Assert
    expect(className.split(' ')).toContain(config.disabled)
  })
})
