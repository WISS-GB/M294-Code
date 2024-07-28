import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App.jsx';

jest.mock("../components/GlobalNavigation", () => () => <div>NavigationRenderedXYZ</div>); // Hier wird der Mock definiert



describe("Dies ist ein Testpaket für die App-Komponente", () => (

    test("Navigation sollte gerendert werden", () => {
        // Arrange
        let gesuchterText = "NavigationRenderedXYZ"

        // Act
        render(
          <MemoryRouter>
            <App/>
          </MemoryRouter>
        ); // Die App-Komponente wird aufgerufen

        // Assert
        expect(screen.getByText(gesuchterText)) // im gerendert DOM wird ein bestimmter Text erwartet
    })

));

test("Test Impressum route works", ()=> {
    // Arrange

    // Act
    render (
      <MemoryRouter initialEntries={["/impressum"]}>
        <App />
      </MemoryRouter>

    )
    // Assert
    expect(screen.getByText("Impressum"))

})

test("Test Rules route works", ()=> {
  // Arrange

  // Act
  render (
    <MemoryRouter initialEntries={["/rules"]}>
      <App />
    </MemoryRouter>

  )
  // Assert
  expect(screen.getByText("Fightclub Rules"))

})


test('demo', () => {
  expect(true).toBe(true)
})