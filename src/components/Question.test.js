import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Question from './Question';

describe("Dies ist ein Testpaket für die Question-Komponente", () => (
  test('renders Question component', () => {
    // Arrange
    const q = {
      "question": "Who am I",
      "answers" : ["Answer 1","Answer 2","Answer 3"],
      "correct_answer": "Answer 1"
    };
    // Act
    render(
      <Question key="123" question= { q }/>
    );

    // Assert
    let question = screen.getByText("Who am I");
    expect(question).toBeInTheDocument();
    let a1 = screen.getByText("Answer 1");
    expect(a1).toBeInTheDocument();
    let a2 = screen.getByText("Answer 2");
    expect(a2).toBeInTheDocument();
    let a3 = screen.getByText("Answer 3");
    expect(a3).toBeInTheDocument();
  })
))