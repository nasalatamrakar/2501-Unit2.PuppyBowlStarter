const {
  fetchAllPlayers,
  fetchSinglePlayer,
  addNewPlayer,
} = require("./script");

describe("fetchAllPlayers", () => {
  // Make the API call once before all the tests run
  let players;
  beforeAll(async () => {
    players = await fetchAllPlayers();
  });

  test("returns an array", async () => {
    expect(Array.isArray(players)).toBe(true);
  });

  test("returns players with name and id", async () => {
    players.forEach((player) => {
      expect(player).toHaveProperty("name");
      expect(player).toHaveProperty("id");
    });
  });
});

// TODO: Tests for `fetchSinglePlayer`
describe("fetchSinglePlayer", () => {
  test("should return a player object with full details", async () => {
    const player = await fetchSinglePlayer(testPlayerId);
    expect(player).toHaveProperty("id", testPlayerId);
    expect(player).toHaveProperty("breed");
    expect(player).toHaveProperty("status");
    expect(player).toHaveProperty("team");
  });
});
// TODO: Tests for `addNewPlayer`

