
import React, { Component } from 'react';
import logo from './images/ebrics-logo-3.png';
import certlogo from './images/cert-logo.png';
import real_state_1 from './images/real_state_1.jpg';
import real_state_2 from './images/real_state_2.jpg';
import real_state_3 from './images/real_state_3.jpg';
import real_state_4 from './images/real_state_4.jpg';
import moveToTop from './images/go_up.png';
import prop1 from './images/prop_1.jpg';
import $ from 'jquery';

import './css/home.css';
import './ionicons/css/ionicons.css';
import Login from './component/Login';
import Services from './component/Services';
import UpdateProfile from './component/UpdateProfile';
import FAQ from './component/FAQ';
import PropertyDetail from './component/PropertyDetail';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './component/Search.js';

import '../node_modules/react-notifications/dist/react-notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';



class App extends Component {
  constructor(props) {
    super(props);

    $(window).bind("keypress", function (e) {
      if (e.keyCode === 13 && e.target.id === 'autocomp') {
        e.preventDefault();
      }
    });

    this.state = {
      searchValue: "",
      showServicesModal: false,
      showModal: false,
      sessionData: "",
      licenseNumber: ''
    };
    this.searchValueChange = this.searchValueChange.bind(this);
    this.renderFAQComonent = this.renderFAQComonent.bind(this);
    this.renderUpdateProfileComponent = this.renderUpdateProfileComponent.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.handleServiceModalCloseClick = this.handleServiceModalCloseClick.bind(this);
    this.logoutClicked = this.logoutClicked.bind(this);
    this.handleServiceOptionClick = this.handleServiceOptionClick.bind(this);
    this.searchData = this.searchData.bind(this);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.renderMyServicesComonent = this.renderMyServicesComonent.bind(this);
    this.renderMyProfileComonent = this.renderMyProfileComonent.bind(this);
    this.clickLink = this.clickLink.bind(this);
    this.renderContactComponent = this.renderContactComponent.bind(this);
    this.handleMenuClick2 = this.handleMenuClick2.bind(this);
    this.isEquals = this.isEquals.bind(this);
    this.handleServiceModalShowClick = this.handleServiceModalShowClick.bind(this);
    this.handleCancelProfileClick = this.handleCancelProfileClick.bind(this);
    this.loadLicenseDetails = this.loadLicenseDetails.bind(this);
    this.getAccessTokenKey = this.getAccessTokenKey.bind(this);
    this.topFunction = this.topFunction;
  }

  loadLicenseDetails(licenseNumberSelected) {
    this.setState({ licenseNumber: licenseNumberSelected });
    this.setState({ searchValue: "License Detail" });
  }

  handleCancelProfileClick(e) {
    this.setState({ searchValue: '' });
  }

  searchValueChange(e) {
    this.setState({ searchValue: e.target.value });
    e.preventDefault();
  }

  handleServiceOptionClick(e) {
    console.log(e.target);
    if (e.target.id === "UpdateProfileOption") {
      this.setState({ searchValue: "My Profile" });
      this.handleMenuItemClick(undefined, 'My Profile');
    } else if (e.target.id === "UpdateApplicationOption") {
      this.setState({ searchValue: "Update " });
      this.handleMenuItemClick(undefined, 'Update');
    } else {

    }
  }

  renderFAQComonent(e) {
    this.setState({ searchValue: e.target.innerText });
    this.handleMenuItemClick(e);
  }
  renderContactComponent(e) {
    this.setState({ searchValue: e.target.innerText });
    this.handleMenuItemClick(e);
  }

  renderUpdateProfileComponent(e) {
    this.setState({ searchValue: e.target.id });
    this.handleMenuItemClick(e);
  }
  /*
   * This method is responssible to open respective FAQ question quering custom search.
   *
   */
  handleMenuClick2(targetId) {
    $('html, body').animate({
      scrollTop: $("#sectionComponent").offset().top
    }, 100);
    setTimeout(function () {
      document.getElementById('createApp' + targetId).className = "";
      $('html, body').animate({
        scrollTop: $("#que-row-" + targetId).offset().top
      }, 10);
      $("#que-row-" + targetId).css("background-color", "black").css("color", "white").css('font-weight', 'bold');

    }, 100);
  }

  /*
   * This method is responssible to compare two strings to check whether both are equal or not.
   *
   */
  isEquals(targetObject, targetString) {
    if (targetObject !== 'undefined' && targetObject !== undefined && targetObject !== null && targetObject !== 'null') {
      if (targetObject === targetString) {
        return true;
      }
    } else if(targetObject == null && (targetString == null || targetString === 'null' || targetString === '')){
      return true;
    }
    return false;
  }

  handleMenuItemClick(e, targetString, targetSubString) {
    if (e !== undefined && e.target.id === "footerComponent") {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    } else {
      if (this.isEquals(targetString, "FAQ")) {
        if (this.isEquals(targetSubString, "password")) {
          this.handleMenuClick2(5);
        } else if (this.isEquals(targetSubString, "renew")) {
          this.handleMenuClick2(2);
        } else if (this.isEquals(targetSubString, "new")) {
          this.handleMenuClick2(1);
        } else if (this.isEquals(targetSubString, "payment")) {
          this.handleMenuClick2(9);
        } else if (this.isEquals(targetSubString, "sign")) {
          this.handleMenuClick2(4);
        } else {
          $('html, body').animate({
            scrollTop: $("#sectionComponent").offset().top
          }, 1000);
        }
      } else if (this.isEquals(targetString, "Contact")) {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      } else if (this.isEquals(targetString, "My Profile")) {
        $('html, body').animate({
          scrollTop: $("#sectionComponent").offset().top
        }, 1000);
      } else if (this.isEquals(targetString, "Property Detail")) {
        $('html, body').animate({
          scrollTop: $("#sectionComponent").offset().top
        }, 1000);
      }
    }
  }

  handleModalShowClick(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      showModal: true
    })
    $('#userModal').find("#error").hide();
    $('#userModal').find("#email-input").val('');
    $('#userModal').find("#pwd-input").val('');
  }

  handleServiceModalShowClick(e) {
    e.preventDefault();
    console.log(e.target);
    this.setState({
      showServicesModal: true
    })
  }

  searchData(searchStringObj, searchString) {

    if (searchString !== undefined) {
      //Custom Data
      this.setState({
        searchValue: searchString
      });

    } else if (searchStringObj !== undefined && searchStringObj.valueKey !== undefined) {
      //Existing dataType
      this.setState({
        searchValue: searchStringObj.valueKey
      });


    } else {
      if ($('#autocomp').val() === 'undefined' || $('#autocomp').val() === '') {
        this.createNotification('warn_blank_search');
      } else {
        this.setState({
          searchValue: $('#autocomp').val()
        });
      }
    }
  }

  handleServiceModalCloseClick(e) {
    console.log(e);
    this.setState({
      showServicesModal: false
    })
  }

  handleModalCloseClick(loginData) {
    console.log("loginData user " + window.sessionStorage.getItem("user"))
    console.log("loginData" + loginData.sessionData)
    this.setState({
      showModal: false,
      sessionData: loginData.sessionData,
    })
    if(window.sessionStorage.getItem("user") !== '') {
      this.createNotification('success_login');
      this.createNotification('warn_renew');
    }
  }
  logoutClicked() {
    window.sessionStorage.setItem("user", "");
    this.setState({ sessionData: '', searchValue: '', error: false });
    $('.navbar-form').submit();
    this.createNotification('success_logout');
    document.getElementById('gallery_section').style.display = 'block';
  }
  renderMyProfileComonent(e) {
    this.setState({ searchValue: 'My Profile' })
  }
  renderMyServicesComonent(e) {
    this.setState({ searchValue: 'My Services' })
  }
  componentWillMount() {
    this.getAccessTokenKey();
    if (window.sessionStorage.getItem("user")) {
      this.setState({ sessionData: true });
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    //var winHeight = window.innerHeight;
    // Annoying to compute doc height due to browser inconsistency
    var body = document.body;
    var html = document.documentElement;
    //var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    var value = document.body.scrollTop;
    if (value >= 400) {
      $('.trustHubMenuContainer').addClass('fixedHeader');
      $('.header-tranperent').css('margin-bottom', '104px');
    } else {
      $('.trustHubMenuContainer').removeClass('fixedHeader');
      $('.header-tranperent').css('margin-bottom', '0');
    }
  }

  /*
   * Below method is responssible to click the sign-in/Sign-up link to load login page first.
   * This ensures without proper login user can not go for creating/renewing license.
   */
  clickLink(e) {
    window.sessionStorage.setItem("preferedSearchItem", this.state.searchValue);
    this.setState({ searchValue: '' });
    this.myLink.click();
  }

  createNotification = (type) => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success_logout':
          NotificationManager.success('You have successfully logged out.', 'Logout!', 5000);
          break;
        case 'success_login':
            NotificationManager.success('You have successfully logged in.', 'Login!', 3000);
            break;
        case 'warn_blank_search':
            NotificationManager.warning('Empty search is not allowed. Kindly choose some defined services or search with some key words', 'Empty search!', 8000);
            break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
  };
  getAccessTokenKey(){
    $.ajax({
          type: "POST",
          url: "https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG9d8..z.hDcPL21tjQ4dMYTTxU4ebAqL_LBVNTcuI8gnp0IlsiVryp_EktuRdh3EhQK5JSfLODmB7RZ_.t&client_secret=6626014265278475363&username=essdev@salesforce.com&password=testing123SUqrs8mGl3b3uDOqLgi2TwZN",
          success: function(data){
           console.log(data);
            if (isNaN(parseInt( data ))) {
             window.sessionStorage.setItem("access_token", data.access_token);
            }
           }.bind(this)
       });
  }

  topFunction(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  }

  render() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
            document.getElementById("feedback_btn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    const { showModal } = this.state;
    const { showServicesModal } = this.state;
    let component;
    /*
     * Below block of code is used to load default search page. Here default search page means the page that
     * Customer want to search before login. It will redirect the User to Login page first, and then
     * after login, it will redirect to the searched page. Example - If User wants to search New Application page
     * before login, then they will be forwared to login page first and after login they can see the New Application page.
     *  -------------------------- START --- Default Load Page--------------------------------
     */
    if (window.sessionStorage.getItem("preferedSearchItem") !== 'undefined' && window.sessionStorage.getItem("user") !== '') {
      if (window.sessionStorage.getItem("preferedSearchItem") === 'Property Detail') {
        if (!this.isEquals(window.sessionStorage.getItem("user"), '')) {
          component = <PropertyDetail/>;
          this.handleMenuItemClick(undefined, 'Property Detail');
        } else {
          this.clickLink();
        }
      }
      window.sessionStorage.setItem("preferedSearchItem", undefined);
    }
    /*
     *  -------------------------- END ----- Default Load Page --------------------------------
     */
    if (!(this.state.searchValue === '')) {
      if (this.state.searchValue === 'Property Detail') {
        if (this.state.sessionData === undefined || this.state.sessionData === '') {
          this.clickLink();
        } else {
          document.getElementById('gallery_section').style.display='none';
          component = <PropertyDetail access_token={this.state.access_token} />;
          this.handleMenuItemClick(undefined, 'Property Detail');
        }
      } else if (this.state.searchValue === 'FAQ') {
        document.getElementById('gallery_section').style.display='none';
        component = <FAQ />;
        this.handleMenuItemClick(undefined, 'FAQ');
      } else if (this.state.searchValue === 'My Profile') {
        document.getElementById('gallery_section').style.display='none';
        component = <UpdateProfile profileCancel={this.handleCancelProfileClick} />;
        this.handleMenuItemClick(undefined, 'My Profile');
      } else {
        document.getElementById('gallery_section').style.display='none';
        if (this.state.searchValue !== '' && this.state.searchValue.indexOf('password') > -1) {
          component = <FAQ />;
          this.handleMenuItemClick(undefined, 'FAQ', 'password');
        } else if (this.state.searchValue !== '' && this.state.searchValue.indexOf('renew') > -1) {
          component = <FAQ />;
          this.handleMenuItemClick(undefined, 'FAQ', 'renew');
        } else if (this.state.searchValue !== '' && this.state.searchValue.indexOf('new') > -1) {
          component = <FAQ />;
          this.handleMenuItemClick(undefined, 'FAQ', 'new');
        } else if (this.state.searchValue !== '' && this.state.searchValue.indexOf('payment') > -1) {
          component = <FAQ />;
          this.handleMenuItemClick(undefined, 'FAQ', 'payment');
        } else if (this.state.searchValue !== '' && this.state.searchValue.indexOf('sign') > -1) {
          component = <FAQ />;
          this.handleMenuItemClick(undefined, 'FAQ', 'sign');
        } else{
          document.getElementById('gallery_section').style.display='block';
          this.handleMenuItemClick(undefined, 'Contact');
        }
      }
    }
    return (
      <div className="App">
        <header id="header">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="row">
                  <div className="logo pull-left">
                    <a href="index.html"><img src={logo} className="img-responsive logo-CSDC" alt="logo" /></a>
                  </div>
                  <div>
                    <a href="#"><img src={certlogo} className="img-responsive logo-cert" alt="logo" /></a>
                  </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="margin-top-header">
                    <label className="menu-labels">Home</label>
                    <label className="menu-labels">Profile</label>
                    <label className="menu-labels">Projects</label>
                    <label className="menu-labels">Media & Events</label>
                    <label className="menu-labels">Contact</label>
                    <label className="menu-labels">Careers</label>
                   </div>
                </div>
                <div className="col-sm-1">
                  <div className="col-sm-12 user-logo-div">
                    <li className="dropdown" id="logo-css">
                      <div className="row">
                        <div className="col-sm-6">
                          <img src={require('./images/' + (this.state.sessionData ? (window.sessionStorage.getItem('user') + '.png') : 'user.png'))} alt="logo" className="logoClass" />
                        </div>
                        <div className="col-sm-2 welcome-msg">
                          {window.sessionStorage.getItem('user') ? ('Hello! ' + window.sessionStorage.getItem('user')) : ""}
                        </div>
                      </div>
                      <div className="dropdown-content">
                        <a href="#" ref={(input) => { this.myLink = input; }} style={!this.state.sessionData ? {} : { display: 'none' }} data-toggle="modal" id="loginButton" data-target="#userModal" onClick={this.handleModalShowClick}>Sign in / Sign up</a>
                        <a href="#" id="usr-profile" style={this.state.sessionData ? {} : { display: 'none' }} onClick={this.renderMyProfileComonent}>My Profile</a>
                        <a href="#" id="usr-faq" onClick={this.renderFAQComonent}>FAQ</a>
                        <a href="#" id="usr-contact" onClick={this.renderContactComponent} >Contact Us</a>
                        <a href="#" id="usr-signout"style={this.state.sessionData ? {} : { display: 'none' }} onClick={this.logoutClicked}>Sign Out</a>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container" id="cont-css">
            <div className="img-back">
            <div className="row" id="img-back-row">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-9" id="search-icon">
                        <form className="navbar-form" role="search">
                          <div className="input-group">
                              <div className="dropdown">
                                  <button className="dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">All Commercials
                                  <span className="caret"></span></button>
                                  <ul id="menu_items"className="dropdown-menu" role="menu" aria-labelledby="menu1">
                                    <li className="menu_child_items_header">
                                        <input type="checkbox" value='new'/>
                                        <label className="radio-btn menu_item_space">

                                          All Commercials </label>
                                    </li>
                                      <li className="menu_child_items">
                                      <input type="checkbox" value='new'/>
                                          <label className="radio-btn menu_item_space">
                                            Commercial showroom </label>
                                      </li>
                                      <li className="menu_child_items">
                                        <input type="checkbox" value='pending' />
                                        <label className="radio-btn menu_item_space">
                                          Industrial plots </label>
                                      </li>
                                      <li className="menu_child_items">
                                        <input type="checkbox" value='hold' />
                                        <label className="radio-btn menu_item_space">
                                          Commercial buildings </label>
                                      </li>
                                      <li className="menu_child_items">
                                        <input type="checkbox" value='published'/>
                                        <label className="radio-btn menu_item_space">
                                          Commercial shops </label>
                                      </li>
                                  </ul>
                              </div>
                              <MuiThemeProvider >
                                  <Search searchDataMethod={this.searchData} />
                              </MuiThemeProvider>

                              <div className="dropdown">
                                  <button className="dropdown-toggle" type="button" id="buy_drop_down" data-toggle="dropdown">Buy
                                  <span className="caret"></span></button>
                                  <ul id="buy_menu_items"className="dropdown-menu" role="menu" aria-labelledby="buy_drop_down">
                                      <li className="buy_menu_child_items">
                                          <input type="radio" value='new'/>
                                          <label className="radio-btn menu_item_space">
                                            Buy </label>
                                      </li>
                                      <li className="buy_menu_child_items">
                                        <input type="radio" value='pending' />
                                        <label className="radio-btn menu_item_space">
                                          Lease </label>
                                      </li>
                                  </ul>
                              </div>
                              <button className="main-search-button" onClick={this.searchData}>Search</button>
                              <button className="main-map-search-button" onClick={this.searchData}>Map Search</button>
                          </div>
                        </form>

                  </div>
                  <div className="col-sm-2"></div>
                </div>
            </div>
            <img src={moveToTop} onClick={this.topFunction} id="myBtn" title="Move to top" />
            <button onClick={this.renderContactComponent} id="feedback_btn" value="Send Feedback" title="Send Feedback">Send Feedback</button>
          </div>
          {showModal ? (<Login access_token={this.state.access_token} handleModalCloseClick={this.handleModalCloseClick} />) : null}
        </section>

        <section id="gallery_section">
          <div className="container">
              <div className="row">
                  <div className="col-sm-12 current_project_lbl">Recently Listed Properties</div>
              </div>
              <div className="row">
                  <div className="col-sm-2"></div>
                  <div className="col-sm-8 current_project_sub_lbl">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</div>
              </div>
                <div className="row down_top">
                    <div className="col-sm-4">
                        <div className="card" id="card-css-1">
                              <img src={real_state_2} alt="img1" id="galery_image" className="zoom" />
                              <div className="container back-img-gallery">
                                <div className="row">
                                  <div className="col-sm-7">
                                      <h5><b>Acrux Chitra</b></h5>
                                      <label className="flat-lbl">Near KIIT Square, Patia</label>
                                      <p>2, 3, 4 BHK Flats</p>
                                  </div>
                                  <div className="col-sm-5">
                                    <p className="flat-price">79.11 lacs</p>
                                    <p></p>
                                    <button className="flat-details" title="See details">See Details</button>
                                  </div>
                                </div>
                              </div>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" id="card-css-2">
                              <img src={real_state_4} alt="img1" id="galery_image" className="zoom"/>
                              <div className="container back-img-gallery">
                                  <div className="row">
                                    <div className="col-sm-7">
                                      <h5><b>Kalinga Residency</b></h5>
                                      <label className="flat-lbl">Ghatikia, Bbsr</label>
                                      <p>2, 3, 4 BHK Flats</p>
                                    </div>
                                    <div className="col-sm-5">
                                      <p className="flat-price">44.05 lacs</p>
                                      <p></p>
                                      <button className="flat-details" title="See details">See Details</button>
                                    </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card" id="card-css-3">                            
                              <img src={real_state_2} alt="img1" id="galery_image" className="zoom" />
                              <div className="container back-img-gallery">
                                <div className="row">
                                  <div className="col-sm-7">
                                      <h5><b>Acrux Chitra</b></h5>
                                      <label className="flat-lbl">Near KIIT Square, Patia</label>
                                      <p>2, 3, 4 BHK Flats</p>
                                  </div>
                                  <div className="col-sm-5">
                                    <p className="flat-price">79.11 lacs</p>
                                    <p></p>
                                    <button className="flat-details" title="See details">See Details</button>
                                  </div>
                                </div>
                              </div>

                        </div>
                    </div>
                </div>
          </div>
       </section>

        <NotificationContainer/>
        <section id="sectionComponent">
          {component}
        </section>
      </div>
    );
  }
}


export default App;
