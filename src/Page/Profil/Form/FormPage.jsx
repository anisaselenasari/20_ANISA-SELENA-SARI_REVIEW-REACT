import React, { useState, useRef } from 'react'
import styles from "./FormBuku.module.css"


export default function FormPage() {
    const dataKosong ={
        judul:"",
        pengarang: "",
        cetakan: "",
        tahunTerbit: 0,
        kotaTerbit: "",
        harga: 0,
    }

    const [data, setData] = useState(dataKosong)
    const regex = /^[A-Za-z]*$/;
    const [errMsg, setErrMsg] = useState("")
    const fotoSampul = useRef (null)

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "pengarang") {
            if (regex.test(value)) {
                setErrMsg("")
            } else {
                setErrMsg("Nama Pengarang harus berupa huruf")
            }
        }

        setData({
            ...data,
            [name]: value
        })
        console.log("data", data)
    }

    const handleSubmit = (event) => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert(`Data Buku "${data.judul}" Berhasil Diterima`)
        }
        resetData()
        event.preventDefault()
    }
    
    const resetData = () => {
        setData(dataKosong);
        setErrMsg("")
    }


    return (
        <>
        <h1 styles={{"text-align":"center"}}>Formulir Buku Baru</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Judul:
                <input 
                type="text"
                name="judul"
                required
                onChange={handleInput}
                value={data.judul}
                className={styles.input}/>
            </label>
            <label>
                Pengarang:
                <input 
                type="text"
                name="pengarang"
                required 
                onChange={handleInput}
                value={data.pengarang}
                className={styles.input}/>
            </label>
            <label>
                Cetakan:
                <input 
                type="text"
                name="cetakan"
                onChange={handleInput}
                value={data.cetakan}
                className={styles.input}/>
            </label>
            <label>
                Tahun Terbit:
                <input 
                type="number"
                name="tahunTerbit"
                onChange={handleInput}
                value={data.tahunTerbit}
                className={styles.input}/>
            </label>
            <label>
                Kota Terbit:
                <input 
                type="text"
                name="kotaTerbit"
                onChange={handleInput}
                value={data.kotaTerbit}
                className={styles.input}/>
            </label>
            <label>
                Harga:
                <input 
                type="number"
                name="harga"
                value={data.harga}
                onChange={handleInput}
                className={styles.input}/>
            </label>
            <label>
                Foto Sampul:
                <input 
                type="file"
                refs={fotoSampul}
                className={styles.input}/>
            </label>
            <span className={styles.errorMassage}>{errMsg}</span> <br />
            <input type="submit" value="Submit"/>
            <button onClick={resetData}>Reset</button>
        </form>
        
            
        </>
    )
}


