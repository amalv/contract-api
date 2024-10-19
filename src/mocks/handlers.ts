import { http, HttpResponse } from "msw";

type CharacterParams = {
	id: string;
};

type CharacterListResponse = string[];

type CharacterResponse = {
	id: string;
	name: string;
	description: string;
};

export const handlers = [
	http.get<never, never, CharacterListResponse, "https://swapi.dev/api/people">(
		"https://swapi.dev/api/people",
		async () => {
			return HttpResponse.json([
				"Luke Skywalker",
				"Darth Vader",
				"Leia Organa",
			]);
		},
	),

	http.get<
		CharacterParams,
		never,
		CharacterResponse,
		"https://swapi.dev/api/people/:id"
	>("https://swapi.dev/api/people/:id", async ({ params }) => {
		const { id } = params;
		const character = {
			id,
			name: id === "1" ? "Luke Skywalker" : "Unknown",
			description: id === "1" ? "A Jedi Knight" : "Unknown character",
		};
		return HttpResponse.json(character);
	}),
];
