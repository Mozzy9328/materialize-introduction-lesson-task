import React from "react";

function App() {
  return (
    <>
      <nav className="navbar" role="navigation">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">
            Logo
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
            <li>
              <a href="/">Link</a>
            </li>
          </ul>

          <a href="/" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div className="parallax-container">
        <div className="section">
          <div className="container">
            <h1 className="header">Heading Text</h1>
            <div className="row">
              <h5 className="header col s8 light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </h5>
              <h5 className="header col s8 light">Ut enim ad minim veniam, quis nostrud exercitation ullamc</h5>
            </div>
            <div className="row">
              <a href="/" className="btn-large white black-text">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="image first-image">
          <img
            src="https://images.unsplash.com/photo-1494481524892-b1bf38423fd1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="night view of highway"
          />
        </div>
      </div>

      <section className="content">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m12 l4">
                <div className="icon-block">
                  <h2 className="center">
                    <i className="material-icons">group</i>
                  </h2>
                  <p className="light center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="col s12 m12 l4">
                <div className="icon-block">
                  <h2 className="center">
                    <i className="material-icons">group</i>
                  </h2>
                  <p className="light center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>

              <div className="col s12 m12 l4">
                <div className="icon-block">
                  <h2 className="center">
                    <i className="material-icons">group</i>
                  </h2>
                  <p className="light center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="parallax-container">
        <div className="image second-image">
          <img
            src="https://images.unsplash.com/photo-1455459182396-ae46100617cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
            alt="night view of city landscape"
          />
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, soluta veritatis eum cumque doloribus
                deleniti accusamus quidem modi ab, magnam maxime temporibus. Facere accusantium maxime deserunt tenetur
                neque dolore doloribus necessitatibus.
              </p>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Contact</h5>
              <ul>
                <li>
                  <a className="white-text" href="/">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div className="col l3 s12">
              <h5 className="white-text">Navigate</h5>
              <ul>
                <li>
                  <a className="white-text" href="/">
                    Link 1
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 2
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 3
                  </a>
                </li>
                <li>
                  <a className="white-text" href="/">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Copyright Text</div>
        </div>
      </footer>
    </>
  );
}

export default App;
