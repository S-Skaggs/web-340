const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // Create a character object
    const testCharacter = {
      class: "Warrior",
      gender: "Male",
      fact: "Is afraid of spiders"
    };

    characterCreator.write(`${testCharacter.gender}, ${testCharacter.class}, ${testCharacter.fact}`);

    characterCreator.on("data", (data) => {
      expect(data.toString().trim()).toBe(`Created a ${testCharacter.gender} gendered ${testCharacter.class} who ${testCharacter.fact}.`);
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid or missing character data");
      done();
    });

    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // Create a character object
    const testCharacter = {
      class: "Mage",
      gender: "Female",
      fact: "Collects feathers."
    };
    const dataToSend = `${testCharacter.gender}, ${testCharacter.class}, ${testCharacter.fact}`;
    const expectedOutput = `Created a ${testCharacter.gender} gendered ${testCharacter.class} who ${testCharacter.fact}.`;

    characterCreator.write(dataToSend, "utf8", () => {
      characterCreator.on("data", (data) => {
        expect(data.toString().trim()).toBe(expectedOutput);
        done();
      });
    });
  });
});