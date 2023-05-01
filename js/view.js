import UtilsDom from "./utils/dom";

const appDOM = UtilsDom.qs("#app");
const appSignedUp = UtilsDom.qs(".app__user-invitation");

// INPUT: Array (templatkowych) Stringow
// OUTPUT: undefined (fn ma za zadanie jedynie manipulowac DOM)
// laczy templatkowe Stringi i wrzuca w #app
const renderAppDOM = (views) => {
	appDOM.innerHTML = views.join("");
};

const renderSignedUser = (name) => {
	appSignedUp.innerHTML = name;
}

const View = { renderAppDOM, renderSignedUser };

export default View;
