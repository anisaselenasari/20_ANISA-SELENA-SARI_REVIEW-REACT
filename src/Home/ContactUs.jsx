import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changed, reset, touched, findAllInvalid } from '../store/contact'
import { useHistory } from 'react-router-dom'

import '../assets/css/ContactUs.css'
// import '../../assets/css/contactus.css'
import poster from '../assets/img/bgrn.jpg'
import logo from '../assets/img/logo-ALTA-v2.png'

export default function ContactUs() {
  const contact = useSelector((state) => state.contact) //untuk mengambil status dan mengembalikan data apapun yang diinginkan
  const dispatch = useDispatch() //mengirimkan data ke peredam jadi kek pengeditan gtu dan di usedispatch ini kita menggunakan payload.payload adalah string
  // jadi intinya tuh useselector dan usedispatch saling berkaitan, jadi kita mengambil data menggunakan useselector, abis itu kita olah
  // di usedispatch, setelah itu. kita akan mengeluarkan data yang telah dirubah itu dgn use selector lagi
  const history = useHistory() 

  function formChangedHandler(e) {        //untuk perubahan formulir atau pengeditan formulir
    const { name, value } = e.target     // tidah akan terhubung kemana mana 
    dispatch(changed({ name, value }))
  }

  function touchedHandler(e) {      // disini ketika kita klik maka dia akan jalan 
    const { name } = e.target
    dispatch(touched({ name }))
  }

  function submitHandler(e) {    // disini adalah untuk submit, ketika dia sudah sesuai dia akan lanjut.nah tapi ketika dia 
    e.preventDefault()           // gak sesuai dia akan munculin tulisan erornya
    let isValid = true

    for (const field in contact) {
      const input = contact[field]

      if (input.err || (input.required && !input.value)) {
        isValid = false
        break
      }
    }

    !isValid && alert('Form tidak valid!') // jika formulir tidak sesuai dengan yang udah kita setting, dia akan keluar alert 
    // punya hubungan sama baris ke 33 dan 34
    isValid ? history.push('/ReviewMessage') : dispatch(findAllInvalid()) // jika formulir sudah sesuai dengan yg kita setting dia akan 
    // mengeluarkan data telah kita masukkan di contact us, akan terhubung di revies
    //hubungannya dengan baris 27 dan 28
  }

  // * useEffect ini akan dijalankan 1x saja
  
  useEffect(() => {
    dispatch(reset())
  }, [dispatch])

  return (
    <main> 
      {/* baris 55 sampe 61 itu gambar */}
      <div className="container-content-image">
        <img className="content-image bg-img" src={poster} alt="poster" />
        <div className="content-image backrop-img"></div>
        <img className="content-image logo" src={logo} alt="logo" />
      </div>

      <div className="content-form">
        <h2>Contact Us</h2>
        <form action="/" method="post" autoComplete="off">
          <div className="mb-2">
            <label htmlFor="fullname" className="form-label">
              Full Name
              <span>*</span>
            </label>
            <input
              value={contact.fullname.value}
              onChange={formChangedHandler}    //menjalankan baris 18
              onFocus={touchedHandler}          // menjalankan baris 23
              name="fullname"
              id="fullname"
              type="text"
              className={`${                      // dibaris ini ketika nama yang kita buat sudah sesuai dia gak akan mengeluarkan apapun
                contact.fullname.err && contact.fullname.touched
                  ? 'errField'            // dibaris ini ada hubungan dengan file contact.js.. karna kita seetting dia disana
                  : ''  // nah kalo gak sesuai dia akan mengeluarkan eror
              } form-control form-control-sm`}
              placeholder="Your full name here..."
            />
            <p
              className={`${
                contact.fullname.err && contact.fullname.touched
                  ? 'show'  // nah dia akan nampilin kalo dia eror
                  : 'hide' // nah kalo udh bener dia di hide
              } errMessage`}
            >
              {contact.fullname.errMessage}
            </p>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email Address
              <span>*</span>
            </label>
            <input
              value={contact.email.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="email"
              id="email"
              type="email"
              className={`${
                contact.email.err && contact.email.touched ? 'errField' : ''
              } form-control form-control-sm`}
              placeholder="example@mail.com"
            />
            <p
              className={`${
                contact.email.err && contact.email.touched ? 'show' : 'hide'
              } errMessage`}
            >
              {contact.email.errMessage}
            </p>
          </div>
          <div className="mb-2">
            <label htmlFor="phone" className="form-label">
              Phone Number
              <span>*</span>
            </label>
            <input
              value={contact.phone.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="phone"
              id="phone"
              type="text"
              className={`${
                contact.phone.err && contact.phone.touched ? 'errField' : ''
              } form-control form-control-sm`}
              placeholder="0812xxxxxxxx"
            />
            <p
              className={`${
                contact.phone.err && contact.phone.touched ? 'show' : 'hide'
              } errMessage`}
            >
              {contact.phone.errMessage}
            </p>
          </div>
          <div className="mb-4">
            <label htmlFor="nationality" className="form-label">
              Nationality
            </label>
            <select
              value={contact.nationality.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="nationality"
              id="nationality"
              className="form-select form-select-sm"
              aria-label=".form-select-sm example"
            >
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Filipina">Filipina</option>
              <option value="Thailand">Thailand</option>
            </select>
          </div>

          <div className="mb-2">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              value={contact.message.value}
              onChange={formChangedHandler}
              onFocus={touchedHandler}
              name="message"
              id="message"
              className="form-control form-control-sm"
              rows="3"
              placeholder="Enter your message here..."
            ></textarea>
          </div>
      

          <div className="container-my-button">
            <button
              onClick={submitHandler}    // ini hubungannya sama baris ke  28
              type="submit"
              className="btn my-button"
            >
              Submit
            </button>

          </div>
         
        </form>
      </div>
    </main>
  )
}