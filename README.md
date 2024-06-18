# Code Review Exercise (Web Components / Frontend)

## Purpose

We're interested in how you to respond to code at both a technical and team level and have created this exercise to mimic your review of a teammate's pull request in this simplified context.

## Instructions

1. Read this complete README, which provides the necessary info and context for your code review.
2. Open and read the three exercise files ([`nav.html`](nav.html), [`styles.css`](styles.css), [`components.js`](components.js)), which are included in this repo and are also replicated on [CodePen](https://codepen.io/md-famli/pen/ExJMQBN).
  - Note that this is a _simplified_ exercise and so does not include all the files or the file structure of a working codebase. In both the JS and CSS files, references are made to where components or files might be broken up.
  - For example, because the code is being replicated on CodePen, the HTML file is not a valid HTML file and more like a partial. Additionally, the links in the menu do not go anywhere. Please feel free to ignore these sort of things in your code review.
3. Consider the feedback and change requests you might make on this PR. Feel free to make notes in the files themselves or separately.
4. For the interview itself, please have all three files open in a code editor and be prepared to share your screen so we can discuss specific areas of the code.
  - Optional: If you have a CodePen account, it would also be fine to fork the CodePen example and share that (or copy the code to an equivalent service).

### Running this code locally

This is not required, but should you prefer to run the code locally, we're happy to provide some guidance and set up around that.

ℹ️ These directions assume a macOS developer environment. If you are not using macOS and need additional assitance/guidance, please let us know.

1. [Clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) or [download](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives#downloading-source-code-archives-from-the-repository-view) the code from GitHub.
2. Using Terminal (or your preferred command line interface), navigate into the directory with these project files.
3. Start a web server via: `python3 -m http.server`
(If this doesn't work, try: `python -m http.server`)
4. Using your preferred web browser, go to `http://0.0.0.0:8000` or `localhost:8000`.

💡 Note that the `index.html` is provided only to enable loading this project locally. Please focus your code review on the markup as written in `nav.html`.

### Advice

- We ask that you do not spend more than 60 minutes on this. This is an exercise, not a real review of code that may be pushed to production.
- Please focus your code review on what you know already and are comfortable with instead of researching things that are unknown to you.
- In general, it is preferable to provide a list of concerns and go deep on 1-2 of those in terms of how you'd address them than to be truly exhausive in your list of concerns.
- In terms of design, the expectation here is _not_ for this code to be pixel perfect. It's more important to cover the broad strokes of the design than to focus on pixel-specific differences among the existing feature, the screenshots and this PR.

## Context for the pull request

The engineering team is interested in exploring developing with Web Components and has selected a few existing key features to refactor as Web Components. This PR is one such instance for the team to establish:

- Can the existing features be rebuilt as Web Components? What, if any, obstacles or blockers are uncovered?
- Best practices for Web Components to then be carried over from the main codebase to the design system.
- The existing feature being refactored in this PR is the main site navigation for [Washington Paid Family & Medical Leave](https://paidleave.wa.gov/individuals-and-families/). Screenshots of the feature are included in this repo (all taken at 1024px wide) and include:
  - [`example-default.png`](/screenshots/example-default.png) - What the navigation element looks like prior to any interaction.
  - [`example-menu-hover.png`](/screenshots/example-menu-hover.png) - What a top-level navigation item looks like when it is hovered.
  - [`example-submenu-open.png`](/screenshots/example-submenu-open.png) - What the "Individuals and Families" submenu looks like when opened, including link and button styles are prior to interaction.
  - [`example-submenu-open2.png`](/screenshots/example-submenu-open2.png) - What the "Employers" submenu looks like when opened, including link and button styles are prior to interaction.
  - [`example-submenu-button-hover.png`](/screenshots/example-submenu-button-hover.png) - What the submenu button looks like when hovered.
  - [`example-submenu-link-hover.png`](/screenshots/example-submenu-link-hover.png) - What a submenu navigation looks like when it is hovered.

  **NOTE: For the purposes of this exercise, the Self-employed menu item has been removed.**

### Acceptance criteria

This code should:
- Generally replicate the look and interactions of the current navigation, including keyboard navigation
- Introduce no new/additional performance concerns
- Introduce no new/additional accessibility concerns
- Provide an example for future Web Component development

## Discussion questions

The following questions will guide our discussion:
- Describe your overall approach to reviewing this code. What was familiar and unfamiliar? Do you feel you were missing any context to understand this PR?
- What, if any, acceptance criteria or expected use cases have not been met in this code?
- What concerns do you have about the code in this pull request and how would you approach resolving them?
- Did your code review identify:
  - performance concerns?
  - accessibility concerns?
  - significant/meaningful design mismatches?
  And how would you recommend addressing them?
- If you had an extra hour on this exercise, how would you opt to spend that time?
