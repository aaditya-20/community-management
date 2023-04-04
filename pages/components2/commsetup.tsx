// import { Html, Head, Main, NextScript } from 'next/document'
// import styles from './mystyle.module.css'
export default function commsetup() {
  return (
    <>
      <div style={{ position: "relative", left: "747px", top: "427px" }}>
        <form action="/send-data-here" method="post">
          <label htmlFor="first" style={{ width: "99px", height: "24px" }}>
            First name
          </label>
          <br />
          <input
            style={{
              position: "absolute",
              width: "600px",
              height: "60px",
              background: "#2E363F",
              backdropFilter: "blur(40px)",
              borderRadius: "6px",
              boxSizing: "border-box",
            }}
            type="text"
            placeholder="Type here"
          />
          <br />
          <br />

          <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
            <button
              style={{
                border: "1px solid #000000",
                position: "absolute",
                width: "298px",
                height: "66px",
                // left: "747px",
                top: "120px",
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #8570E4 0%, #8D79F6 100%)",
              }}
              className="btn btn-active"
            >
              Button
            </button>
            <button
              style={{
                border: "1px solid #000000",
                position: "absolute",
                width: "298px",
                height: "66px",
                left: "297px",
                top: "120px",

                background: "#FE702A",
              }}
              className="btn"
            >
              Button
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
