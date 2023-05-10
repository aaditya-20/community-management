
import Sidebar from "../components/molecules/Sidebar";
import Header from "../components/atoms/Header";
import { supabase } from "../utils/supabaseClient";



export default function Home() {
  return (
    <>
      {/* <header>
        <span className="heading">User Profile</span>
        <button> Logout </button>
      </header> */}
      <Header />

      <div className="main-div">
        <nav>
          {/* <div>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              focusable="false"
              data-darkreader-inline-stroke=""
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              ></path>
            </svg>
            Quest
          </div>
          <div>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              focusable="false"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
              data-darkreader-inline-fill=""
            >
              <path
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M32 160v296a8 8 0 008 8h136V160a16 16 0 00-16-16H48a16 16 0 00-16 16zM320 48H192a16 16 0 00-16 16v400h160V64a16 16 0 00-16-16zm144 160H352a16 16 0 00-16 16v240h136a8 8 0 008-8V224a16 16 0 00-16-16z"
              ></path>
            </svg>
            Leaderboard
          </div> */}
          <Sidebar />
        </nav>

        <main>
          <div>
            <section className="first-section">
              <div className="profile-img">
                <img src="https://picsum.photos/200/300" alt="profile" />
              </div>
              <div className="links-zone">
                <span> mial.com </span>
                <span> discord </span>
                <button> Twitter </button>
                <button> LinkedIn </button>
              </div>
            </section>

            <label className="label">
              Username <br />
              <input type="text" />
              <button className="updateButton"> Update </button>
            
            </label>

            <label className="label">
              Etherium address <br />
              <input type="text" />
            </label>
            <span>
              {" "}
              Please enter your address so that we can send you reward{" "}
            </span>

            <section className="second-section">
              <div> Public Information </div>
              <span>
                {" "}
                Choose which information to display on yo9ur zelay profile{" "}
              </span>
            </section>

            <section className="section-three">
              <div> Danger Zone </div>
              <button> Delete My Account </button>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
