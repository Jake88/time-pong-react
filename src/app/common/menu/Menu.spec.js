import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import Menu from './Menu'
jest.mock('./MenuContainer', () => (Menu) => Menu)

describe('<Menu />', () => {
  const props = {
    go: jest.fn(),
    current: '/',
    active: true
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('snapshot', () => {
    const menu = shallow(<Menu />)
    expect(menu).toBeDefined()
    expect(shallowToJson(menu)).toMatchSnapshot()
  })

  test('should trigger go function with the expected paths', () => {
    const menu = shallow(<Menu {...props}/>)

    menu.find('#link-how-to-play').simulate('click')
    expect(props.go.mock.calls[0]).toEqual(['/'])
    props.go.mockClear()

    menu.find('#link-play').simulate('click')
    expect(props.go.mock.calls[0]).toEqual(['/play'])
    props.go.mockClear()

    menu.find('#link-cards').simulate('click')
    expect(props.go.mock.calls[0]).toEqual(['/cards'])
    props.go.mockClear()

    menu.find('#link-create').simulate('click')
    expect(props.go.mock.calls[0]).toEqual(['/create'])
  })
})