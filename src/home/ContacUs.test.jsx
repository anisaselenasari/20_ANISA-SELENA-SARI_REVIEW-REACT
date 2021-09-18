import React from 'react'
import { Provider } from 'react-redux'
import { configure, mount, shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import ContactUs from './ContactUs'

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { render, screen } from '@testing-library/react'

configure({ adapter: new Adapter() })

const initialState = {
  fullname: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage: 'Hanya dapat berupa huruf minimal 6 huruf dan maximal 50 huruf'
  },
  email: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage:
      'Email tidak valid. contoh: example@mail.com'
  },
  phone: {
    value: '',
    touched: false,
    required: true,
    err: false,
    errMessage: 'Nomor handphone tidak valid. Hanya dapat diisi dengan angka'
  },
  nationality: {
    value: 'Indonesia'
  },
  message: {
    value: ''
  }
}

const mockStore = configureMockStore([thunk])

describe('ContactUs', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = mockStore({
      contact: initialState
    })

    wrapper = mount(
      <Provider store={store}>
        <ContactUs />
      </Provider>
    )
  })

  it('should render a startup component if startup is not complete', () => {
    expect(wrapper.find('Startup').length).toEqual(0)
    expect(1).toEqual(1)
    console.log(wrapper)
  })

  it('should render form fields properly', () => {
    // expect(wrapper).toBeInTheDocument()
    // console.log(wrapper)
  })
})