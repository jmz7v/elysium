// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import ReactTestUtils from 'react-dom/test-utils'
import { render, fireEvent, cleanup } from 'react-testing-library'

// Components
// import Button, { config } from './index'
import Title from './index'
import Helmet from 'react-helmet'

// Other
afterEach(cleanup)

const props = {
  title: 'hello',
}

describe('Title', () => {
  test('Renders the title from props', () => {
    const { getByText } = render(<Title {...props} />)
    const { textContent, className } = getByText(props.title)

    // Assert
    expect(textContent).toEqual(props.title)
    expect(className.split(' ')).toContain('title')
  })

  test('Renders the subtitle from props', () => {
    const subtitle = 'there'
    const { getByText } = render(<Title {...props} subtitle={subtitle} />)
    const { textContent, className } = getByText(subtitle)

    // Assert
    expect(textContent).toEqual(subtitle)
    expect(className.split(' ')).toContain('subtitle')
  })

  // test('Renders the helmet if documentTitle is true', () => {
  //   const renderer = new ShallowRenderer();
  //   renderer.render(<Title documentTitle />);
  //   const result = renderer.getRenderOutput();
  //   const { children } = result.props
  //   // expect(children.some(child => ReactTestUtils.isElementOfType(child, Helmet))).toBeTruthy()
  //   children.forEach(child => {
  //     console.log(child)
  //   })
  //   expect(children.some(child => ReactTestUtils.isElementOfType(child, Helmet))).toBeTruthy()
  // })




  
  // test('Renders the helmet if documentTitle is true', () => {
    // const renderer = new ShallowRenderer();
    // renderer.render(<Title />);
    // const result = renderer.getRenderOutput();
    // const { children } = result.props
    // console.log(children)
    // expect(children.some(child => ReactTestUtils.isElementOfType(child, Helmet))).toBeFalsy()
  // })
})
