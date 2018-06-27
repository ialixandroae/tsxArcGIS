import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
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
        container.setAttribute("style", "height: 85%; display: flex; flex: 1; justify-content: center; flex-direction: column;");
        root.appendChild(container);

        this.setState(() => ({container: container}))
    }
  
  render() {
    
      return <div>
          <Navbar fluid staticTop inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">TSX ArcGIS</a>
              </Navbar.Brand>
            </Navbar.Header>

            <Nav>
              <NavItem eventKey={1} href="https://developers.arcgis.com/javascript/" target="_blank">
                ArcGIS API for JavaScript
              </NavItem>
              <NavItem eventKey={2} href="https://www.typescriptlang.org/" target="_blank">
                TypeScript
              </NavItem>
              <NavItem eventKey={3} href="https://reactjs.org/" target="_blank">
                React
              </NavItem>
              <NavItem eventKey={4} href="https://react-bootstrap.github.io/" target="_blank">
                React-Bootstrap
              </NavItem>
            </Nav>

            <Nav pullRight>
              <NavItem eventKey={5} href="https://twitter.com/ialixandroae" target="_blank">
                <i className="fab fa-twitter" aria-hidden="true" />
              </NavItem>
              <NavItem eventKey={6} href="https://github.com/ialixandroae" target="_blank">
                <i className="fab fa-github" aria-hidden="true" />
              </NavItem>
            </Nav>
          </Navbar>

          <Header />
          <Map container={this.state.container.id} />
        </div>; 
  }
}

ReactDOM.render(<App />, document.getElementById('root'));