import { Container, Paper, Stack, Typography, Button } from "@mui/material";
import moment from "moment";
import { useEffect, useState, useRef } from "react";
import Questions from "../components/Questions";
import { quiz } from "../data/data.json";

const Quiz = () => {
  const timerRef = useRef(null);

  const [timeLeft, setTimeLeft] = useState(moment.duration(30, "minutes"));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [reattempts, setReattempts] = useState(1);
  const [showAttempts, setShowAttempts] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.asSeconds() <= 1) {
          clearInterval(timerRef.current);
          setTimeUp(true);
          setScore(0);
          return moment.duration(0);
        }
        return moment.duration(prevTime.asSeconds() - 1, "seconds");
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  // Stop timer when last question is submitted
  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswered(false);
    } else clearInterval(timerRef.current);
  };

  const handleReattempt = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setAnswered(false);
    setTimeLeft(moment.duration(30, "minutes"));
    setReattempts((prev) => prev + 1);
    setShowAttempts(false);
    setTimeUp(false);
  };

  const handleShowAttempts = () => {
    setShowAttempts(true);
  };

  const currentQuestion = quiz[currentQuestionIndex];

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h5" textAlign="center">
          Time Left: {moment.utc(timeLeft.asMilliseconds()).format("mm:ss")}
        </Typography>

        <Stack marginTop={"2rem"}>
          {!timeUp ? (
            <Questions
              {...currentQuestion}
              setAnswered={setAnswered}
              setScore={setScore}
              stopTimer={stopTimer}
              isLastQuestion={currentQuestionIndex === quiz.length - 1}
            />
          ) : (
            <Typography variant="h6" textAlign="center" color="error">
              Time is up! Your score: 0 / {quiz.length}
            </Typography>
          )}
        </Stack>

        {!timeUp && (
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ marginTop: 2 }}
          >
            <Button
              onClick={handleNext}
              disabled={!answered || currentQuestionIndex === quiz.length - 1}
              variant="outlined"
            >
              Next
            </Button>
          </Stack>
        )}

        {((currentQuestionIndex === quiz.length - 1 && answered) || timeUp) && (
          <>
            {!timeUp && (
              <Typography variant="h6" textAlign="center" sx={{ marginTop: 3 }}>
                Final Score: {score} / {quiz.length}
              </Typography>
            )}
            <Stack
              direction="row"
              justifyContent="center"
              spacing={2}
              sx={{ marginTop: 2 }}
            >
              <Button variant="contained" onClick={handleReattempt}>
                Reattempt Quiz
              </Button>
              {!timeUp && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleShowAttempts}
                >
                  Check Attempts
                </Button>
              )}
            </Stack>
          </>
        )}

        {showAttempts && (
          <Typography variant="h6" textAlign="center" sx={{ marginTop: 3 }}>
            Total Attempts: {reattempts}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Quiz;
