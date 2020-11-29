import Comments from '../Comments';
import Description from '../Description';
import Download from '../Download';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Motivation from '../Motivation';
import NotFit from '../NotFit';
import Opportunities from '../Opportunities';
import Sanctions from '../Sanctions';
import './index.scss';


function App() {
  return (
    <div className="app">
      <main>
        <Introduction />
        <Description />
        <Opportunities />
        <Motivation />
        <Sanctions />
        <Comments />
        <NotFit />
        <Download />
        <Footer />
      </main>
    </div>
  );
}

export default App;
