import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";

import '../style/app.scss';
import Header from './Header';
import Map from './Map';


class App extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
            container: String
        }
    }

    componentDidMount(){
        const root: HTMLElement = document.getElementById('root');
        const container: HTMLElement = document.createElement('div');
        container.id = 'mapView';
        
        root.appendChild(container);

        this.setState(() => ({container: container}))
    }
  
  render() {
    
      return <div>
        <div id="Navbar">
          <Navbar fluid staticTop inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home"><span>TSX</span> ArcGIS</a>
              </Navbar.Brand>
            </Navbar.Header>

            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={3} href="#">
                Link
              </NavItem>
            </Nav>
          </Navbar>
        </div>
          

          <Header />
          <Map container={this.state.container.id} />
        </div>; 
  }
}

ReactDOM.render(<App />, document.getElementById('root'));