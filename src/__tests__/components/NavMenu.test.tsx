import { fireEvent, render } from "@testing-library/react";
import NavMenu from "../../components/NavMenu";
import { navLinks } from "../../constants/navLinks";
import { ThemeWrapper } from "../testHelpers/themeWrapper";
import * as useRouter from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";

const push = jest.fn();

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: { product: "" },
      asPath: "",
      push,
    };
  },
}));

afterEach(() => {
  jest.clearAllMocks();
});

describe("NavMenu UI test", () => {
  test("The NavMenu UI component renders without console errors", () => {
    render(<NavMenu />, { wrapper: ThemeWrapper });
    const consoleError = jest.spyOn(global.console, "error");
    expect(consoleError).toBeCalledTimes(0);
  });
  test("The NavMenu link list renders the correct links", () => {
    const { getByText } = render(<NavMenu />, { wrapper: ThemeWrapper });
    navLinks.map((link) => {
      expect(getByText(link.title)).toBeTruthy();
    });
  });
  test("The Navbar UI link click calls router.push when the links are each clicked", () => {
    const { getAllByTestId } = render(
      <RouterContext.Provider value={useRouter.useRouter()}>
        <NavMenu />
      </RouterContext.Provider>,
      { wrapper: ThemeWrapper }
    );
    navLinks.map((_, i) => {
      fireEvent.click(getAllByTestId("nav-link")[i]);
    });
    expect(push).toBeCalledTimes(navLinks.length);
  });
});
