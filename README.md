# Simple To-Do List App

## Overview

This is a lightweight, browser-based To-Do List application built with HTML, JavaScript, and CSS. It allows users to add, mark as complete, and delete tasks, with data persistence using the browser's `localStorage`. The app features a clean interface and utilizes Font Awesome icons for visual enhancements.

## 📸 Screenshot

![screenshot of project](https://i.ibb.co/jkpCFFTD/todo-list-app-ezgif-com-optimize.gif)

## Features

- **Add Tasks**: Enter tasks via an input field and add them by clicking the "Add" button or pressing the Enter key.
- **Mark as Complete**: Click on a task to toggle its completion status (visually indicated by a checked style).
- **Delete Tasks**: Remove tasks by clicking the "X" icon next to each task.
- **Data Persistence**: Tasks are saved in the browser's `localStorage`, ensuring they persist across page reloads.
- **Responsive Design**: The app is styled to be user-friendly on various screen sizes.

## Technologies Used

- **HTML**: Structures the app's layout, including a header, input form, and task list.
- **JavaScript**: Handles task addition, completion toggling, deletion, and local storage operations.
- **CSS**: Styles the app for a clean and modern look (styles defined in `style.css`).
- **Font Awesome**: Provides icons for the "Add" button, task list header, and delete functionality (loaded via CDN).

## File Structure

- `index.html`: The main HTML file containing the app's structure.
- `script.js`: JavaScript file with logic for task management and local storage.
- `style.css`: CSS file for styling the app.
- Font Awesome CDN: Used for icons, included in the HTML `<head>`.

## How It Works

1. **Task Input**: Users enter tasks in the input field (`#input-box`). Tasks are added by clicking the "Add" button or pressing Enter.
2. **Task Display**: Tasks are appended as `<li>` elements to the unordered list (`#list-container`). Each task includes a `<span>` with a delete icon.
3. **Task Interaction**:
   - Clicking a task (`<li>`) toggles the `checked` class for completion status.
   - Clicking the delete icon (`<span>`) removes the task.
4. **Data Persistence**: The `saveData()` function saves the task list's HTML to `localStorage` after every action. The `showTask()` function loads saved tasks on page load.

## Setup Instructions

1. **Clone or Download**: Download the project files (`index.html`, `script.js`, `style.css`).
2. **Host Locally**: Place the files in a web server directory (e.g., using VS Code Live Server, XAMPP, or another local server).
3. **Open in Browser**: Open `index.html` in a modern web browser (Chrome, Firefox, etc.).
4. **Ensure Internet Access**: The Font Awesome icons require an internet connection to load from the CDN.
5. **Style the App**: Create or modify `style.css` to customize the app's appearance.

## Usage

- **Add a Task**: Type a task in the input field and press Enter or click the "Add" button.
- **Complete a Task**: Click on a task to mark it as complete (toggles a visual checked style).
- **Delete a Task**: Click the "X" icon next to a task to remove it.
- **Persistent Storage**: Tasks remain available after refreshing the page, thanks to `localStorage`.

## Limitations

- **No Validation Beyond Empty Input**: The app only checks for non-empty input before adding tasks.
- **Single Device**: `localStorage` is browser-specific, so tasks are not synced across devices or browsers.

## Future Improvements

- Add task categories or priorities.
- Implement task editing functionality.
- Include a clear-all button to remove all tasks at once.
- Add support for syncing tasks across devices using a backend service.
- Enhance accessibility (e.g., ARIA attributes for screen readers).
- Improve the check off "button" before each task
- Overall enhancements to the aesthetics (i.e. boxshadows)

## 👋 About the Author

Hi! I’m Phillip Cantu, an American digital nomad, a Full Sail University web development student, and a [4Geeks Academy Full Stack Development with AI Bootcamp](https://4geeksacademy.com/us/apply?ref=REFERRALQEZPTJCK-17696). I’m passionate about creating modern, user-friendly, and practical applications that help people learn and build faster.

You can find me here:

- **GitHub:** [hereisphil](https://github.com/hereisphil)
- **LinkedIn:** [PhillipCantu](https://www.linkedin.com/in/phillipcantu/)
- **Instagram:** [@philtheotaku](https://www.instagram.com/philtheotaku/)
