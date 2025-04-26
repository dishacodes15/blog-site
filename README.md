# Glitches - A Personal Blog Platform

Glitches is a simple blog application built with Node.js, Express, and EJS. It allows users to read blog posts and provides an administrative interface for creating, editing, and deleting posts. Authentication for the admin section is handled using JSON Web Tokens (JWT).

## Features

*   View published blog posts on the homepage.
*   Read individual blog posts on dedicated pages.
*   Admin login system.
*   Protected admin dashboard to manage posts.
*   Create new blog posts using a text editor.
*   Edit existing blog posts.
*   Delete blog posts.
  

## Tech Stack

*   **Backend:** Node.js, Express.js
*   **Templating Engine:** EJS (Embedded JavaScript templates)
*   **Database:** MongoDB (with Mongoose ODM)
*   **Authentication:** JSON Web Tokens (JWT), bcrypt (for password hashing)
*   **Styling:** CSS 


## Usage

*   **Public Site:** Access the main blog at the root URL (`/`).
*   **Admin Login:** Navigate to `/admin` to access the login page.
*   **Admin Dashboard:** After successful login, you'll be redirected to the admin dashboard (e.g., `/admin/dashboard`) to manage posts.

---

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

## Author

* Disha Madhusudana

## Acknowledgments

* TheNetNinja on Youtube
