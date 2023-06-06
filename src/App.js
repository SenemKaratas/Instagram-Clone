//import logo from "./logo.svg";
import "./App.css";
import screen1 from "./screen1.png";
import screen2 from "./screen2.png";
import screen3 from "./screen3.png";
import screen4 from "./screen4.png";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef();
  useEffect(() => {
    //console.log(ref.current);
    //console.log(ref.current.querySelectorAll("img"));
    let images = ref.current.querySelectorAll("img");
    let total = images.length;
    let current = 0;
    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    setInterval(imageSlider, 3000);
  }, [ref]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[468px] h-[581px] relative bg-[length:468px_634px] bg-[top_left_-46px] bg-logo-pattern">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[110px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500"
            src={screen1}
            alt="Sreen1"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src={screen3}
            alt="Sreen3"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src={screen2}
            alt="Sreen2"
          ></img>
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-linear"
            src={screen4}
            alt="Sreen4"
          ></img>
        </div>
      </div>
      <div className="w-[450px] bg-white border p-10 flex flex-col items-center">
        <img
          className="h-[100px] w-[175px]"
          src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png"
        ></img>
        <form>
          <label>
            <input></input>
          </label>
          <input
            className="w-96 border-2 p-2 mb-2 bg-zinc-50"
            placeholder="Telefon numarası, kullanıcı adı veya e-posta"
          ></input>
          <input
            className="w-96 border-2 p-2 bg-zinc-50"
            placeholder="Şifre"
          ></input>
        </form>
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
