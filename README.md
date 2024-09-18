## Cat-alogue

My friend Dave is hoarding cats and he has asked me to help organize his growing furry
family of cats.
As a user, one should be able to
● add cats to the collection,
● view the list of cats and their individual details (e.g. name, date of birth...)
● as well as edit the details,
● and remove cats that have gone to Cat Heaven

Bonus:
● sort cats,
● search cats

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

### Home Page

Display all the cats - app/cats/page.tsx

### Add a new Cat - Add Cat Page

A form to add a new cat - cats/add/page.tsx

### View cat - Cat Details Page

Display individual cat details - app/cats/[id]/page.tsx

- View when card is clicked on from HomePage
- View after a cat has been added

### Edit Cat Page

Form for editing cat information - cats/edit/[id]/page.tsx

## Improvements / To-do's

1. Responsiveness
2. Accessibility
3. Browser Compatibility
4. Picture upload
5. Unit and E2E tests
6. Sort functionality
7. UI component seperation
8. DB integration

## Known Bugs

1. Next App Router dehydration issue when starting/refreshing on localhost:3000/cats
   - workaround: navigate back to root /
