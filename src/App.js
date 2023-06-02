import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-[581px] w-[468px]  bg-[length:468px_634px] bg-[top_left_-46px] bg-logo-pattern bg-slate-300 ">
        <img
          className="h-[538px] w-[250px]"
          src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www"
          alt="instagram Ekran Görüntüsü"
        ></img>
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
