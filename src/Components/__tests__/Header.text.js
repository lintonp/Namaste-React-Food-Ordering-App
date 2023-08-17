import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "../Header";

import { Provider } from "react-redux";
import appStore from "../../Store/AppStore";
import { BrowserRouter } from "react-router-dom";
import userContext from "../../Utils/useContext";

describe("Header Component Validations", () => {
  // {/* <userContext.Provider>
  // </userContext.Provider> */}
  it("To validate Login and Logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole("button", { name: "Logout" });
    expect(logoutBtn).toBeInTheDocument();
  });
  it("To validate Cart", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <userContext value={{ loggedinUser: "some name" }}>
            <Header />
          </userContext>
        </Provider>
      </BrowserRouter>
    );
    // const Cart = screen.getByRole("text")
  });
});
