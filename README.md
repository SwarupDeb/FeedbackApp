# FeedbackApp
An employee review system built with Node.js, MongoDB, and EJS for efficient performance tracking and feedback management.

## Table of Contents
- [Project Overview](#project-overview)
- [Directory Structure](#directory-structure)
- [Usage](#usage)
- [Getting Started](#getting-started)
- [Contributing](#contributing)

## Project Overview

Employee Review System is designed to help you effectively manage employee reviews and feedback. It provides a user-friendly interface for administrators and employees alike.

## Directory Structure

Here's an overview of the project's directory structure:

```
- assets
  - css
    - admin.css
    - header.css
    - home.css
    - layout.css
    - sign.css
  - images
    - logo.gif
    - profile.gif
    - rating.webp
- config
  - flashMiddleware.js
  - mongoose.js
  - passport-local.js
- controllers
  - admin_controller.js
  - home_controller.js
  - review_controller.js
  - user_controller.js
- models
  - review.js
  - user.js
- node_modules
- routes
  - admin.js
  - index.js
  - reviews.js
  - users.js
- views
  - _header.ejs
  - addEmployee.ejs
  - admin.ejs
  - employee.ejs
  - forget_password.ejs
  - home.ejs
  - layout.ejs
  - sign_in.ejs
  - sign_up.ejs
- .gitignore
- index.js
- package-lock.json
- package.json
```

## Usage

To use this Employee Review System, follow the installation instructions below.

## Getting Started

1. Clone this repository to your local machine.
2. Make sure you have Node.js and MongoDB installed.
3. Run `npm install` to install the project's dependencies.
4. Set up your MongoDB connection in `config/mongoose.js`.
5. Start the application using `node index.js`.

## Contributing

We welcome contributions from the community! Feel free to open issues and submit pull requests to help improve the Employee Review System.
