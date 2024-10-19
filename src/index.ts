import { server } from "./mocks/node";

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
async function app() {
	const response = await fetch("https://swapi.dev/api/people");
	const characters = await response.json();
	console.log(characters);

	const responseById = await fetch("https://swapi.dev/api/people/1");
	const character = await responseById.json();
	console.log(character);
}

app();
