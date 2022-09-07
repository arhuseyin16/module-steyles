import './App.css';
import A from "./components/A/a";
import B from "./components/B/b";

function App() {
  // style =>
  // obje oldugun adikkat et
  // padding-top gibi "-" kavramı yok js de paddingTop

  // componentler altına actıgımız css dosyaları aynı className sahipse birbirini ezmeler olur. bunu önüne gecmek için a.module.css "module" adında acmalıyız.
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: 'red', backgroundColor: 'white', paddingTop: 40}}>
          We don't have to be concerned about it. We just have to let it fall where it will.
          A tree cannot be straight if it has a crooked trunk. We'll play with clouds today.
          That's crazy. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner.
          Work on one thing at a time. Don't get carried away - we have plenty of time.
        </p>
        <div className="alert alert-primary" role="alert">
          A simple primary alert—check it out!
        </div>
        <A/>
        <B/>
      </header>
    </div>
  );
}

export default App;
