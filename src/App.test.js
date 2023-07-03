import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// test takes the name of the test and a callback function as it's two arguments
describe("Testing app component", () => {
  it("Test", () => {

    const {container} = render(<App />);
    expect(container).toMatchSnapshot();
  });

})