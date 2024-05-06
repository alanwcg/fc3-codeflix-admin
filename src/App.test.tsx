import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders the root component without crashing", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    // expect(getByText(/learn/i)).toBeInTheDocument();
  });
});
