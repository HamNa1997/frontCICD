import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import './App.css'

function App() {
  return (
    <div>
      <div align="center">
        <h3 className='titre'>CV INDEXATION WITH ELK</h3>
        <tr>
              <td><Button variant="primary" href={process.env.REACT_APP_LINK1}>Upload</Button></td>
              <td><Button variant="primary" href={process.env.REACT_APP_LINK2}>Search</Button></td>
        </tr>
      </div>
    </div>
  );
}

export default App;
