import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import GameSession from './GameSession';

test("Questions and Answers are properly rendered", () => {
  // Arrange
  let questions = [
      {
        question: "Meine BeispielFrage",
        answers: ["Antwort 1", "Antwort 2", "Antwort 3"],
        correct_answer: "Antwort 1",
      }
  ]

  // Act
  render(
      <GameSession questions={ questions } />
  )

  // Assert
  expect(screen.getByText("Meine BeispielFrage"))
  expect(screen.getByText("Antwort 1"))
  expect(screen.getByText("Antwort 2"))
  expect(screen.getByText("Antwort 3"))
});
