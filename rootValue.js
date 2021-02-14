const Quotes = require("inspirational-quotes");

const rootValue = () => {
  const today = new Date();
  const DAYS_OF_WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const getRandomDiceThrow = (sides = 6) => Math.ceil(Math.random() * sides);
  const randomCoinToss = () => Math.random() >= 0.5;
  const getRandomCoinTossesUntilTrue = () => {
    const result = [];
    do {
      result.push(randomCoinToss());
    } while (!result[result.length - 1]);
    return result;
  };
  const makeMeeting = (day, name, surname, email) => {
    return {
      date: {
        day,
      },
      person: {
        name,
        surname,
        email,
      },
    };
  };
  const getSheduledMeetings = () => {
    const scheduledMeetings = [];
    scheduledMeetings.push(
      makeMeeting("TUE", "Jan", "Kowalski", "test@test.com")
    );
    scheduledMeetings.push(
      makeMeeting("MON", "Jakub", "Nowak", "test@test.com")
    );
    scheduledMeetings.push(
      makeMeeting("WED", "Bartek", "Długopolski", "test@test.com")
    );
    scheduledMeetings.push(
      makeMeeting("FRI", "Hubert", "Kowal", "test@test.com")
    );
    scheduledMeetings.push(
      makeMeeting("SAT", "Andrzej", "Nowakowski", "test@test.com")
    );
    return scheduledMeetings;
  };
  return {
    greeting: "Hello world!",
    schroedingersCatGreeting: randomCoinToss() ? "Meow!" : null,
    interestingUrls: ["https://kursreacta.pl", "https://64bites.com"],
    randomDiceThrow: getRandomDiceThrow(),
    pi: Math.PI,
    isTodayFriday: today.getDay() === 2,
    randomQuote: Quotes.getQuote(),
    today: DAYS_OF_WEEK[today.getDay()],
    workDays: DAYS_OF_WEEK.slice(1, 6),
    randomCoinTossesUntilTrue: getRandomCoinTossesUntilTrue(),
    fewRandomQuotes: [...Array(getRandomDiceThrow(4) + 1)].map(() =>
      Quotes.getQuote()
    ),
    sheduledMeetings: getSheduledMeetings(),
  };
};

module.exports = rootValue;
