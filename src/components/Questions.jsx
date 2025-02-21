import {
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Questions = ({
  id,
  question,
  options,
  answer,
  type,
  setAnswered,
  setScore,
  stopTimer,
  isLastQuestion
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [userInput, setUserInput] = useState();
  const [isCorrect, setIsCorrect] = useState(null);

  // Reset answered status when the question changes
  useEffect(() => {
    setSelectedOption(null);
    setUserInput("");
    setIsCorrect(null);
    setAnswered(false);
  }, [id, setAnswered]);

  // Handle Multiple Choice Questions
  const handleOptionClick = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      setIsCorrect(option[0] === answer);
      if (option[0] === answer) {
        setScore((prevScore) => prevScore + 1);
      }
      setAnswered(true);
      if (isLastQuestion) stopTimer();
    }
  };

  // Handle Integer Questions
  const handleSubmit = () => {
    setIsCorrect(parseInt(userInput) === answer);
    if (parseInt(userInput) === answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setAnswered(true);
    if (isLastQuestion) stopTimer();
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {id}. {question}
      </Typography>

      {type === "multipleChoice" ? (
        <List>
          {options.map((option, index) => (
            <ListItem
              key={index}
              button
              disabled={selectedOption !== null}
              onClick={() => handleOptionClick(option)}
              sx={{
                backgroundColor:
                  selectedOption === option
                    ? isCorrect
                      ? "lightgreen"
                      : "salmon"
                    : "transparent",
                cursor: selectedOption ? "default" : "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
      ) : (
        <>
          <TextField
            label="Your Answer"
            variant="outlined"
            type="number"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            disabled={isCorrect !== null}
            sx={{ marginBottom: 2, width: "100%" }}
          />
          <Button
            variant="outlined"
            onClick={handleSubmit}
            disabled={isCorrect !== null || userInput.trim() === ""}
            sx={{ width: "30%" }}
          >
            Submit
          </Button>
        </>
      )}

      {isCorrect !== null && (
        <Typography
          variant="h6"
          sx={{ marginTop: 2, color: isCorrect ? "green" : "red" }}
        >
          {isCorrect ? "✅ Correct!" : "❌ Incorrect"}
        </Typography>
      )}
    </>
  );
};

export default Questions;
