## Cat-alogue

My friend Dave is hoarding cats and he has asked me to help organize his growing furry
family of cats.
As a user, one should be able to

- add cats to the collection,
- view the list of cats and their individual details (e.g. name, date of birth...)
- as well as edit the details,
- and remove cats that have gone to Cat Heaven

Bonus:

- sort cats,
- search cats

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash

yarn

```

then, run the development server:

```bash

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Plan

### Tech Stack

- NextJs - App Router
- React
- Typescript
- Tailwind for style

### Home Page

Display all the cats - app/cats/page.tsx
Button to add new cat at the top
Button to add a new cat at the bottom (in case the cat list is very long)
Search input (only visible when there is at least 1 cat)
Card showing: - the cat's name - placeholder pic - edit button - remove button

### Add a new Cat - Add Cat Page

A form to add a new cat - cats/add/page.tsx
Header
Input for name (required)
Input for date of birth (required)
Inout for breed
Inout for Color
Save button

### View cat - Cat Details Page

Display individual cat details - app/cats/[id]/page.tsx

- View when card is clicked on from HomePage
- View after a cat has been added
  - name
  - date of birth
  - breed (if available)
  - color (if available)
  - edit button
  - back to list button

### Edit Cat Page

Form for editing cat information - cats/edit/[id]/page.tsx

- Header
- Input for name (required) prefilled
- Input for date of birth (required) prefilled
- Inout for breed prefilled if applicable
- Inout for Color prefilled if applicable
- Save button

## Improvements / To-do's

1. Responsiveness
2. Accessibility (WAVE browser extention)
3. Browser Compatibility (BrowserStack)
4. Picture upload
5. Unit, (Jest, React Testing Library) Integration and E2E tests (Playwright)
6. Sort functionality (Spread original array and then sort method)
7. UI component seperation - Atomic Design
   Atoms

- Buttons, input fields, labels, icons, colors, typography.
  Molecules
  The Card components combining an text and a button, the navigation menu with icons and labels
  Organisms
- Header containing a logo, navigation menu, and search form; a product listing section with product cards.
  Templates
  Pages

8. DB integration (Firebase)
9. Active Link indication among many other UI improvements
   - UX process
   - User research
   - Product Research
   - Wireframes
   - Low-fidelity prototype
   - high-fedility designs
10. Date validation
11. Clean up package.json - unused dependencies
12. Design Token definitions

## Known Bugs

1. Next App Router dehydration issue when starting/refreshing on localhost:3000/cats
   - workaround: navigate back to root /
