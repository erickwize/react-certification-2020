# Wizeline Academy - 2021 React Bootcamp

Please refere to the following [GIST](https://gist.github.com/erickwize/d7311bfc972080c162c43cbb7dc80587) for further instructions

# Mini-Challenge 3: Hooks

## The Challenge

> \*_Note:_ Apply TDD as much as you can.\*

1. Fetch videos using the YouTube API and display them in the **Home View**
   > \*_Note:_ now you can remove the logic that you implemented in the first mini-challenge to display videos from the mock file.\*
2. Implement the logic to search videos using the YouTube API (it's time to enable the search field functionality).
3. Create the **Video Details View** (this section will be displayed when the user clicks on a specific video in the list).

   - 3.1 Display the video player.
   - 3.2 Display the information for the selected video.
   - 3.3 Display a list of related videos.
     > \*_Hint:_ You can use conditional rendering to display or hide the Video Details View according to user interactions.\*

4. Apply styles to the new components you create.
5. Create test cases for your API calls.
6. Create new test cases or modify existing ones for your components if necessary.
7. If you're duplicating code for your API calls inside your components, try creating a custom hook to reuse this logic more easily.

## Acceptance Criteria

- [ ] Videos in the Home View are fetched from the YouTube API and displayed correctly.
- [ ] Users can search for YouTube videos using the search field on the header.
- [ ] A video can be played from the **Video Details View** after clicking on it.
- [ ] The video information and related videos list are displayed correctly on the **Video Details View**.
- [ ] When a user clicks on a related video the video player, information and related videos list are updated.

### Bonus Points

- [ ] Custom Hooks for API calls are implemented and tested correctly.
- [ ] Testing coverage is above 60%. (Please include a screenshot of the code coverage report in your PR description).
