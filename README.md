# Note-Taking App 📝

## Overview 🌟

This is a simple note-taking app that lets users upload markdown files, check grammar, save the note, and render it in HTML. The app provides endpoints for checking grammar, saving notes, listing saved notes, and rendering the markdown content as HTML.

## Features 🚀

- **Grammar Checking** ✍️: Check the grammar of markdown text.
- **Save Notes** 💾: Save the note passed in as Markdown text.
- **List Notes** 📋: Retrieve a list of all saved notes.
- **Render Markdown** 🔨: Get the HTML version of the Markdown note.

## Installation 🔧

### Prerequisites 🧰

- Node.js
- npm
- MongoDB (for storing saved notes)

### Setup 🛠️

1. Clone this repository:

   ```bash
   git clone https://github.com/Aymen-Guerrouf/-Markdown-Note-taking-App-.git
   ```

2. Install dependencies:

   ```bash
   cd note-taking-app
   npm install
   ```

3. Set up your environment variables (e.g., for MongoDB and other settings):

   - Create a `.env` file and add necessary configurations like MongoDB URI.

4. Run the server:
   ```bash
   npm start
   ```

## Endpoints 📡

### 1. POST `/api/grammar-check` 📝

Check the grammar of a provided markdown text.
Save a markdown note.

- **Request**:
  - This endpoint expects a multipart/form-data request with the following fields:
    - `file` (file): The markdown file (`.md`) to be uploaded.

### 2. POST `/api/notes` 💾

Save a markdown note.

- **Request**:
  - This endpoint expects a multipart/form-data request with the following fields:
    - `file` (file): The markdown file (`.md`) to be uploaded.

### 3. GET `/api/notes` 📋

List all saved notes.

### 4. GET `/api/notes/:id` 🔨

Render a markdown note as HTML.

- **Response**:
  - Returns the HTML version of the markdown note.

## Libraries Used 📚

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Marked**: Markdown parser to render the markdown as HTML.
- **LanguageTool API**: For grammar checking.
## Project URL
<href>https://roadmap.sh/projects/markdown-note-taking-app </href>
## License 🛡️

This project is licensed under the MIT License.
