// import { Html, Head, Main, NextScript } from 'next/document'
import styles from './mystyle.module.css'
export default function commsetup() {
  return (
    <>
        <div style={{position:"relative", left:"747px", top:"427px"}}>
        <form action="/send-data-here" method="post">
        <label htmlFor="first" style={{width:"99px",height:"24px"}}>First name:</label><br/>
        <input  className={styles.inputbox} type="text" placeholder="Type here"  /><br/><br/>
        
        <button style = {{border: "1px solid #000000",position: "absolute",
                                width: "595px",
                                height: "66px",
                                left: "747px",
                                top: "555px",

                      filter: "dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25)) dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25)) dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25)) dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25)) dropShadow(0px 4px 4px rgba(0, 0, 0, 0.25))"}}  >Submit</button>
      </form>

        </div>
       

      </>
    
  )
}
