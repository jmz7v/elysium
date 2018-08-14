// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import ShallowRenderer from 'react-test-renderer/shallow'
import ReactTestUtils from 'react-dom/test-utils'
import { render, fireEvent, cleanup } from 'react-testing-library'

// Components
// import Button, { config } from './index'
import Title, { Subtitle, DocumentTitle }  from './index'
import Helmet from 'react-helmet'

// Other
afterEach(cleanup)

const props = {
  title: 'hello',
}

describe('<Title/>', () => {
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

  test('Renders <Subtitle/> component', () => {
    const subtitle = 'there'
    const { getByText } = render(<Subtitle subtitle={subtitle} />)
    const { textContent, className } = getByText(subtitle)

    // Assert
    expect(textContent).toEqual(subtitle)
    expect(className.split(' ')).toContain('subtitle')
  })
 
  test('Return null from <DocumentTitle/>', () => {
    const { queryByTestId } = render(<DocumentTitle {...props} show={false} />)

    // Assert
    expect(queryByTestId('documentTitle')).toBeNull()
  })

})
