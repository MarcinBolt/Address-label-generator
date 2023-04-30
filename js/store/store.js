// INIT_STORE to dobry pomysl z dwoch powodow:
// 1) na pewno chcecie jakies startowe wartosci
// 2) musicie w ten sposob okreslic strukture danych! :)
const INIT_STORE = {
	userNick: "Mist",
	userName: "Jan",
	userLastName: "Kowalski",
	userPhone: "666111222",
	address: "ul. Warszawska 5/3",
	postCode: "00-111",
	city: "Warszawa",
	userAge: 33,
	userLoggedIn: false,
	userPass: "123456",
	// ...
};

let store = INIT_STORE;

// INPUT: nic
// OUTPUT: Object (store)
const getStore = () => store;

// INPUT: String
// OUTPUT: undefined
// fn zmienia store
const setUsername = (userName) => {
	store = { ...store, userName };
};

// INPUT: nic
// OUTPUT: undefined
// fn zmienia store
const logUserIn = () => {
	store = { ...store, userLoggedIn: true };
};

// TODO:
// dodatkowe funkcje, np. logUserOut, signUserUp,
// setUserAge

const Store = { getStore, setUsername, logUserIn };

export default Store;
