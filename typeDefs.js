const { gql } = require("apollo-server");

const typeDefs = gql`
  schema {
    query: OurQuery
  }
  """
  Our special root query type.
  """
  type OurQuery {
    """
    A simple greeting
    """
    greeting: String!
    """
    It might greet you. Or... It might not...
    """
    schroedingersCatGreeting: String
    """
    Do not feel obliged to click on them. Although they are interesting.
    """
    interestingUrls: [String!]!
    """
    Result of a 6-sided dice throw. Returns a random number between **1** and **6**.
    """
    randomDiceThrow: Int!
    """
    A pi constant. Ratio of a circle's circumference to its diameter.
    [Read more on wikipedia](https://en.wikipedia.org/wiki/Pi)
    """
    pi: Float!
    """
    An answer to an important question. Especially when you are at the office few days after monday.
    """
    isTodayFriday: Boolean!
    """
    When you really need to succed.
    """
    randomCoinTossesUntilTrue: [Boolean!]!
    """
    It tells you what day is it now.
    """
    today: DayOfWeek!
    """
    Consecutive list of days when most of us need to work.
    """
    workDays: [DayOfWeek!]!
    """
    A random quote to inspire or cheer you up.
    """
    randomQuote: Quote!
    """
    If one random quote won't do. Maybe a few will.
    """
    fewRandomQuotes: [Quote!]!
    """
    Show all scheduled meeting for current week
    """
    sheduledMeetings: [Meeting!]!
  }
  """
  This type describe one scheduled meeting with date and person details
  """
  type Meeting {
    date: Date!
    person: Person!
  }
  """
  Type defines Day of meeting
  """
  type Date {
    day: DayOfWeek!
  }
  """
  Type defines Person details which one got a meeting
  """
  type Person {
    name: String!
    surname: String!
    email: String!
  }
  """
  A concise representation of each weekday. There are 7 of them.
  """
  enum DayOfWeek {
    MON
    TUE
    WED
    THU
    FRI
    SAT
    SUN
  }

  """
  An object representing a quote with an author
  """
  type Quote {
    """
    Text of the quote
    """
    text: String
    """
    Author's name
    """
    author: String
  }
`;

module.exports = typeDefs;
