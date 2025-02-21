import {
  Container,
  Paper,
  Typography,
  Stack,
  List,
  Button,
} from "@mui/material";
import InstructionItem from "../components/InstructionItem";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Quiz Instructions
        </Typography>
        <Stack spacing={2}>
          <List>
            <InstructionItem primary="1. For multiple-choice questions, select the one best answer (A, B, C, or D)." />
            <InstructionItem primary="2. For integer-type questions, write your numerical answer clearly." />
            <InstructionItem primary="3. No calculators unless specified." />
            <InstructionItem primary="4. You have 30 minutes to complete this quiz." />
          </List>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate("/quiz")}
        >
          Start Quiz
        </Button>
      </Paper>
    </Container>
  );
};

export default Instructions;
