let body = document.getElementById("loadContent");
const regionSkane = require("../img/regionSkane.svg");
const asterisk = require("../img/asterisk.svg");
const lansstyrelsen = require("../img/lansstyrelsen.svg");
body.innerHTML = `<header class="navbar z-depth-2">
  <nav class="blue darken-4" role="navigation">
    <div class="nav-wrapper">
      <a class="brand-logo">
        <span class="kullaberg">
          <img class="left logoImg responsive-img turn" src="${asterisk}" alt="Kullaberg" />Kullaberg Report</span>
      </a>
    </div>
  </nav>
</header>
<main class="main row">
  <div class="">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Report an Issue</span> After you press 'Send' your prefered email application will start and you can continue to
          write up your report in detail. We encourage you to attach image and/or video that might aid in the evaluation
          of your report. Thank you for keeping Kullaberg beautiful!</div>
      </div>
    </div>
  </div>
  <div class="">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <span class="card-title">Your Position</span>
          <span id="coordinates">
            You have not granted permission for us to locate your position.
          </span>
        </div>
      </div>
    </div>
    <div id="sendButton" class="col s12 center"> </div>
  </div>
</main>
<footer class="blue darken-4 white-text page-footer">
  <section id="contact" class="row">
    <div class="col s12 m12 l6 contactButtons">
      <a href="mailto:naturum.kullaberg@lansstyrelsen.se?cc=carlos.velasco@lansstyrelsen.se" class="tooltipped" data-position="bottom"
        data-delay="50" data-tooltip="Email: naturum.kullaberg@lansstyrelsen.se">
        <i class="mdi mdi-email medium grey-text text-lighten-4 contactIcon"></i>
      </a>
      <a href="tel:46042347056" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Tel: +46 (0)42 347 056">
        <i class="mdi mdi-phone-classic medium grey-text text-lighten-4 contactIcon"></i>
      </a>
      <a href="http://www.kullabergsnatur.se/" class="tooltipped onlineOnly" data-position="bottom" data-delay="50" data-tooltip="Website: KullabergsNatur.se">
        <i class="mdi mdi-web medium grey-text text-lighten-4 contactIcon"></i>
      </a>
      <a href="https://www.facebook.com/kullabergsnaturreservat/" class="tooltipped onlineOnly" data-position="bottom" data-delay="50"
        data-tooltip="Facebook: Kullabergs Naturreservat">
        <i class="mdi mdi-facebook-box medium grey-text text-lighten-4 contactIcon"></i>
      </a>
      <a href="https://www.instagram.com/kullabergsnaturreservat/" class="tooltipped onlineOnly" data-position="bottom" data-delay="50"
        data-tooltip="Instagram: naturum Kullaberg">
        <i class="mdi mdi-instagram medium grey-text text-lighten-4 contactIcon"></i>
      </a>
    </div>
  </section>
  <div class="row">
    <div class="col s6 m4 l2">Design
      <br>
      <a class="orange-text text-lighten-3 modal-trigger" href="#carlos">Carlos Velasco</a>
    </div>
    <div class="col s6 m4 l2">Sponsors
      <br>
      <a class="orange-text text-lighten-3 modal-trigger" href="#skane">Region Skåne</a>
      <br>
      <a class="orange-text text-lighten-3 modal-trigger" href="#lansstyrelsen">Lansstyrelsen Skåne</a>
    </div>
    <!-- <div class="col s6 m4 l2">Language
      <br>
      <a class="orange-text text-lighten-3" href="#">Svenska</a>
      <br>
      <a class="orange-text text-lighten-3">English</a>
    </div> -->
  </div>
</footer>
<div id="carlos" class="modal">
  <div class="modal-content row center-align">
    <div class="col s12">
      <h2 class="blue-text text-darken-4">Carlos Velasco</h2>
      <h4 class="flow-text">Front-End JavaScript Application Developer</h4>
    </div>
    <div class="col s12">
      <a href="mailto:Carlos@2ActiveDesign.com" class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Email: Carlos@2ActiveDesign.com">
        <i class="mdi mdi-email medium"></i>
      </a>
      <a href="https://www.linkedin.com/in/carlosevelasco
                         " class="tooltipped onlineOnly" data-position="bottom" data-delay="50" data-tooltip="LinkedIn Profile">
        <i class="mdi mdi-linkedin medium"></i>
      </a>
      <!-- <a href="https://www.behance.net/2Active" class="tooltipped onlineOnly" data-position="bottom" data-delay="50" data-tooltip="Behance Portfolio">
        <i class="mdi mdi-behance medium"></i>
      </a> -->
      <a href="https://github.com/xtreemze?tab=repositories
                         " class="tooltipped onlineOnly" data-position="bottom" data-delay="50" data-tooltip="Github Repositories">
        <i class="mdi mdi-github-box medium"></i>
      </a>
    </div>
  </div>
</div>
<div id="skane" class="modal">
  <div class="modal-content row center-align">
    <img src="${regionSkane}" alt="Region Skane" class="responsive-img" /> </div>
</div>
<div id="lansstyrelsen" class="modal">
  <div class="modal-content row center-align">
    <img src="${lansstyrelsen}" alt="Lansstyrelsen Skane" class="responsive-img" /> </div>
</div>
`;
