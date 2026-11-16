# CurlyDB

A web platform that helps people with curly hair find the right care for their hair type and share tips with each other.

Only around 15 % of people have naturally curly hair, and finding the right routine, products and techniques can be overwhelming. CurlyDB brings together structured care guides for all nine curl types and a community where people share what works for them.

> Semester project for the *Prototyping* module, BSc Business Information Systems, ZHAW (December 2024 to January 2025).

## Features

- **Curl type overview:** all nine curl types, from waves to tight coils, with a description of how to recognise each one.
- **Care routines:** a detail page per curl type with a four-step routine (wash, style, dry, refresh) and the community tips for that type.
- **Insider community:** users share their own tips through a form with validation. Tips can be filtered by curl type.
- **Ratings:** every tip can be rated with stars. Ratings are stored in a separate collection, and the average rating and count are updated on the tip.
- **Chatbot:** an embedded chatbot answers questions about curly hair care.

## Tech stack

- **Frontend & server:** SvelteKit (server-side data loading and form actions)
- **Database:** MongoDB with the official Node.js driver
- **Styling:** Bootstrap 5
- **Deployment:** Netlify

## Data model

Three MongoDB collections:

| Collection  | Content                                                           |
|-------------|-------------------------------------------------------------------|
| `hairtypes` | The nine curl types, each with its care routine                   |
| `insiders`  | Community tips, linked to a curl type, with average rating        |
| `ratings`   | Individual star ratings, referencing a tip                        |

## Project structure

```
src/
├── lib/
│   ├── db.js                  # Database access (queries, inserts, rating update)
│   └── components/            # HairtypeCard, RoutineCard, InsiderCard, InsiderTypeCard
└── routes/
    ├── +page.svelte           # Landing page
    ├── hairtypes/             # Curl type overview and detail pages
    └── insider/               # Community tips, filter and create form
```

## Running locally

Requirements: Node.js 18+ and a MongoDB database.

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the project root:
   ```
   DB_URI=mongodb+srv://<user>:<password>@<cluster>/
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Documentation

The full project documentation (in German) is in [`src/documentation/`](src/documentation/).

## Author

Selin Soy
