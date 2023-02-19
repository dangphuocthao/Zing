import Ads from './component/Ads';
import Header1 from './component/Header1';
import Footer from './component/Footer';

function App(props) {
  return (
    <>
          <Ads/>
          <Header1 />
          {props.children}
          <Footer/>
          
    </>
  );
}

export default App;
