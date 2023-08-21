import { render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA from "./mocks/ResCardsmock.json";
import { Provider } from "react-redux";
import appStore from "../../Store/AppStore";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(MOCK_DATA),
//   });
// });

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should validate all Res Cards", async () => {
  //   await act(async () => {
  //     render(
  //       <BrowserRouter>
  //         <Provider store={appStore}>
  //           <userContext value={{ loggedinUser: "some name" }}>
  //             <Body />
  //           </userContext>
  //         </Provider>
  //       </BrowserRouter>
  //     );
  //   });
  console.log("Fetch", fetch);
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Body />
        </Provider>
      </BrowserRouter>
    )
  );
  //   const searchBtn = screen.getByRole("button", { name: "Search" });
  //   expect(searchBtn).toBeInTheDocument();
});
