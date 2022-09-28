import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../assets/images/logo/logo.png';
//import flag from '../../assets/images/icons/12.png';
import Config from '../../configure';
import $ from 'jquery';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navMenuMobile: false,
      redirect: false
    }
  }
  toggleNavMenu = () => {
    this.setState({ navMenuMobile: !this.state.navMenuMobile })
  }
  handleScroll = () => {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector('.gc_main_menu_wrapper');
    this.setState({ top: (el.offsetTop + 700), height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }
  componentDidUpdate() {
    this.state.scroll > this.state.top ?
      (document.body.style.paddingTop = `${this.state.height}px`) : (document.body.style.paddingTop = '0')
  }
  componentWillUnmount() {
    this.mount = false;
  }
  render() {
    $(document).ready(() => {
      $('.wd_single_index_menu ul li a[href^="#"]').bind('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        var $anchor = $(this);
        if ($(window).width() > 991) {
          var headerH = '60';
        } else {
          headerH = '56';
        }
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 800);
      });
      $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        var target = $('.wd_single_index_menu ul li');
        if (windscroll >= 0) {
          $('.wd_scroll').each(function (i) {
            if ($(this).position().top <= windscroll + 90) {
              target.removeClass('active');
              target.eq(i).addClass('active');
            }
          });
        } else {
          target.removeClass('active');
          $('.wd_single_index_menu ul li:first').addClass('active');
        }

      });
    });
    // let navigation = (
    //   <ul>
    //     <li><a className="nav-link" href="#default">Home</a></li>
    //     <li><a className="nav-link" href="#about">About</a></li>
    //     <li><a className="nav-link" href="#info">How To Earn</a></li>
    //     <li><a className="nav-link" href="#tokens">Tokens</a></li>
    //     <li><a className="nav-link" href="#road_map">Road Map</a></li>
    //     <li><a className="nav-link" href="#faq">FAQS</a></li>
    //     <li><a className="nav-link" href="https://twitter.com/shareholdersG" target="_blank"><i className="fab fa-twitter"></i></a></li>
    //     <li><a className="nav-link" href="https://discord.gg/4QPxsNDA" target="_blank"><i className="fab fa-discord"></i></a></li>
    //   </ul>
    // )
    let navigation = (
      this.props.location.pathname == '/' ?
      <ul>
        <li><a className="nav-link" href="#default">Home</a></li>
        <li><a className="nav-link" href="#about">About</a></li>
        <li><a className="nav-link" href="#info">How To Earn</a></li>
        <li><a className="nav-link" href="#tokens">Tokens</a></li>
        <li><a className="nav-link" href="#road_map">Road Map</a></li>
        <li><a className="nav-link" href="#faq">FAQS</a></li>
        <li><a className="nav-link" href="https://twitter.com/shareholdersG" target="_blank"><i className="fab fa-twitter"></i></a></li>
        <li><a className="nav-link" href="https://discord.gg/4QPxsNDA" target="_blank"><i className="fab fa-discord"></i></a></li>
      </ul>
      :
      <ul>
        <li><Link className="nav-link" to={Config.defaultPath} href="#default">Home</Link></li>
        <li><Link className="nav-link" to={Config.defaultPath} href="#about">About</Link></li>
        <li><Link className="nav-link" to={Config.defaultPath} href="#info">How To Earn</Link></li>
        <li><Link className="nav-link" to={Config.defaultPath} href="#tokens">Tokens</Link></li>
        <li><Link className="nav-link" to={Config.defaultPath} href="#road_map">Road Map</Link></li>
        <li><Link className="nav-link" to={Config.defaultPath} href="#faq">FAQS</Link></li>
        <li><a className="nav-link" href="https://twitter.com/shareholdersG" target="_blank"><i className="fab fa-twitter"></i></a></li>
        <li><a className="nav-link" href="https://discord.gg/4QPxsNDA" target="_blank"><i className="fab fa-discord"></i></a></li>
      </ul>
    )
    return (
      <div id="default" className="wd_scroll_wrap wd_scroll" style={{ zIndex: '1000', position: 'relative' }}>
        <div className="header-top bg-primary"></div>
        <div className="horizon-divider bg-secondary"></div>

        <header className={`gc_main_menu_wrapper ${this.state.scroll > this.state.top ? "menu_fixed animated fadeInDown" : ""}`}>
          <Container fluid>
            <Row className="d-flex align-items-center ">
              <Col className="col-xs-6" sm={7} md={3} lg={3}>
                <div className="logo-area pd-l40">
                  <Link to={Config.defaultPath}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </Col>
              <Col className="col-xs-6 menu-area d-flex justify-content-end ml-auto" sm={5} md={9} lg={9}>
                <div className="menu-navs">
                  <nav className="wd_single_index_menu btc_main_menu">
                    <a href="#id" className="mobile-menu hidden-sm" onClick={(e) => { e.preventDefault(); }}>Menu</a>
                    {navigation}
                  </nav>
                  {/* <div className="language">
                    <span className="lng-in"><img src={flag} alt="" /></span>
                    <ul className="lng-out">
                      <li><img src={flag} alt="" /></li>
                      <li><img src={flag} alt="" /></li>
                    </ul>
                  </div> */}
                </div>
                {/* <div className="rp_mobail_menu_main_wrapper visible-xs">
                  <div className="row">
                    <div className="col-xs-12">
                      <div id="toggle" onClick={this.toggleNavMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" space="preserve" width="25px" height="25px">
                          <g>
                            <g>
                              <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#fff" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#fff" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#fff" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#fff" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#fff" />
                            </g>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div id="sidebar" style={{ left: (this.state.navMenuMobile ? 0 : '-300px'), transition: 'all 0.5s linear' }}>
                    <h1><Link to={Config.defaultPath}>KILLER CUBS</Link></h1>
                    <div onClick={this.toggleNavMenu} id="toggle_close">&times;</div>
                    <div id='cssmenu' className="wd_single_index_menu">
                      {navigation}
                    </div>
                  </div>
                </div> */}
                <div className="btn-group">
                  {/* <Link id="id_Connect" to="#" className="btn1"><i className="fa fa-sign-in"></i><span>Connect</span></Link>
                  <Link id="id_Wallet" to="#" className="btn1"><i className="fa fa-briefcase"></i>Wallet</Link> */}
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </div >
    );
  }
}

// export default Header;
export default withRouter(Header);