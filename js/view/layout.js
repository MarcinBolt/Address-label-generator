// TODO: rozbudowac rendering apki

const viewHeader = () => ` 
<header>
<div class="header container">
  <div class="header__logo"></div>
  <nav class="nav nav-signed-out">
    <ul class="nav__list list">
      <li class="nav__list-item list__item">
        <p class="app__sign-in">Create new account</p>
      </li>
      <li class="nav__list-item list__item">
        <p class="app__sign-in">Sign in</p>
      </li>
    </ul>
  </nav>
  <nav class="nav nav-signed-in nav-none">
    <ul class="nav__list list">
      <li class="nav__list-item list__item">
        <p class="app__update-profile">Your profile</p>
      </li>
      <li class="nav__list-item list__item">
        <p class="app__sign-out">Sign out</p>
      </li>
    </ul>
  </nav>
</div>
</header>`;

const viewLayout = () => `
<div class="app__layout container">
<div class="app__menu">
  <div class="app__singed-up">
  <h3 class="app__user-invitation"></h3>
    <p class="app__info">What would you like to do?</p>
    <ul class="main-list list">
      <li class="main-list__item list__item">
        <p class="main-list__text generate-label">Generate new address label</p>
      </li>
      <li class="main-list__item list__item">
        <p class="main-list__text add-addressee">Add new addressee</p>
      </li>
    </ul>
    <div class="app__unsigned">
      <h3 class="app__invitation"></h3>
    </div>
  </div>
</div>
</div>
`;

const viewFooter = () => `
<footer>
<div class="footer container">
  <ul class="footer__list list">
    <li class="footer__list-item list__item"><p class="footer__text">© 2023 | All Rights Reserved |</p></li>
    <li class="footer__list-item list__item"><p class="footer__text">Developed by <a href="#" class="footer__text link">Us</a></p></li>
  </ul>
</div>
</footer>`;

const ViewLayout = { viewHeader, viewLayout, viewFooter };

export default ViewLayout;
