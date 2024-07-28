import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react';
import Question from './Question';

describe("Questions testing", () => {
  test('renders Question component', () => {
    // Arrange
    const q = [{
      "question": "Who am I",
      "answers" : ["Answer 1","Answer 2","Answer 3"],
      "correct_answer": "Answer 1"
    }];
    // Act
    render(
      <Question key="123" questions = { q }/>
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

  test("evaluate correct answer works", () => {
    // Arrange
    const q = [{
      "question": "Who am I",
      "answers" : ["Answer 1","Answer 2","Answer 3"],
      "correct_answer": "Answer 1"
    }];

    // Act
    render(
      <Question key="123" questions = { q }/>
    );
    let a1 = screen.getByText("Answer 1");
    fireEvent.click(a1);

    // Assert
    let feedback = screen.getByText(/score:.1.von.1/i);
    expect(feedback).toBeInTheDocument();
    let next = screen.getByText(/weiter/i);
    expect(next).toBeInTheDocument();
  })

  test("evaluate wrong answer works", () => {
    // Arrange
    const q = [{
      "question": "Who am I",
      "answers" : ["Answer 1","Answer 2","Answer 3"],
      "correct_answer": "Answer 1"
    }];

    // Act
    render(
      <Question key="123" questions = { q }/>
    );
    let a2 = screen.getByText("Answer 2");
    fireEvent.click(a2);

    // Assert
    let feedback = screen.getByText(/score:.0.von.1/i);
    expect(feedback).toBeInTheDocument();
    let next = screen.getByText("Weiter");
    expect(next).toBeInTheDocument();
  })

  test("evaluate only single answer possible", () => {
    // Arrange
    const q = [{
      "question": "Who am I",
      "answers" : ["Answer 1","Answer 2","Answer 3"],
      "correct_answer": "Answer 1"
    }];

    // Act
    render(
      <Question key="123" questions = { q }/>
    );
    let a2 = screen.getByText("Answer 2");
    fireEvent.click(a2);

    let a3 = screen.getByText("Answer 1");
    fireEvent.click(a3);

    // Assert
    let feedback = screen.getByText(/score:.0.von.1/i);
    expect(feedback).toBeInTheDocument();
  })
})