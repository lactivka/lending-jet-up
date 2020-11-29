import Comments from '../Comments';
import Description from '../Description';
import Introduction from '../Introduction';
import Motivation from '../Motivation';
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
      </main>
    </div>
  );
}

export default App;
