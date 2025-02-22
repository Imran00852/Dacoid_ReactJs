# Quiz Application

This is a simple **interactive quiz platform** built using **React.js** and **Material-UI (MUI)**. The application supports **multiple-choice** and **integer-based questions**, tracks the user's score, and includes a **countdown timer** for the quiz.

## Features

- **Dynamic Question Handling:** Supports multiple-choice and integer-based questions.
- **Live Score Tracking:** Updates score based on correct answers.
- **Countdown Timer:** 30-minute timer that stops when the last question is submitted.
- **Reattempt Feature:** Allows users to restart the quiz with a fresh timer.
- **Attempts Tracker:** Keeps track of how many times the user has reattempted the quiz.

## Technologies Used

- **React.js**
- **Material-UI (MUI)** for UI components
- **Moment.js** for time management

## Installation & Setup

### Prerequisites

Ensure you have **Node.js** and **npm** (or **yarn**) installed on your system.

### Steps to Run

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Imran00852/Dacoid_ReactJs.git
   cd Dacoid_ReactJs
   ```
2. **Install dependencies:**
   ```sh
   npm install  # or yarn install
   ```
3. **Start the application:**
   ```sh
   npm start  # or yarn start
   ```
4. Open **http://localhost:5173/** in your browser to view the quiz.

## Project Structure

```
quiz-app/
│── src/
│   ├── components/
│   │   ├── Questions.js       # Renders the quiz questions
│   │   ├── InstructionItem.jsx # Instruction item component
│   ├── data/
│   │   ├── data.json          # Stores quiz questions and answers
│   ├── pages/
│   │   ├── Quiz.js            # Main quiz logic (timer, navigation, scoring)
│   │   ├── Instruction.jsx    # Instructions page
│   ├── App.js                 # Root component
│── public/
│── package.json
│── README.md
```

## Usage

- **Select an answer** (for multiple-choice) or **enter a number** (for integer-based questions).
- Click **"Next"** to move to the next question.
- The **timer stops when the last question is submitted**.
- Click **"Reattempt Quiz"** to restart the quiz with a fresh timer.


## Live Demo
Check out the deployed application: **[Quiz App](https://dacoid-react-js.vercel.app)**



















