1. What could be changed in Companies page to make the code more maintainable?
- Move the getBackgroundColor into the Companies component scope if there is no intention of sharing it. If there is a need to share it, then it should be in a Util function.
- Create a separate CSS file as I did for the Campaigns component.
- Refactor the following status resolution logic into a separate function c.campaignStatus === "CLOSED"
                ? "Funded"
                : c.campaignType === "EOI"
                ? "EOI Open"
                : "Accepting Investments"
- Destructure company object so we can use the properties without c.foo, c.bar, etc.
  - i.e. `companies.map((c)`  => `companies.map(({id, name})`
3. Would you change the way styling is handled in the solution? If so, what would you change?
- No, we should avoid inline style, instead we can use separate CSS file as I mentioned my answer in question 1.

3. Any other improvements or changes you would make?
- Use State management like Redux of MobX for state management.
- Use Storybook for component showcase and playground.
- Use SASS instead of CSS for extra logic and DRY.
- Add component and unit tests.
