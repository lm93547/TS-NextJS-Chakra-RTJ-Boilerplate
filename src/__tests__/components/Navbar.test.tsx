import { fireEvent, render } from "@testing-library/react";
import Navbar from "../../components/Navbar";
import { ThemeWrapper } from "../testHelpers/themeWrapper";
import {RouterContext} from "next/dist/shared/lib/router-context";
import * as useRouter from "next/router";
import { navLinks } from "../../constants/navLinks";

const push = jest.fn()

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: {product: ""},
            asPath: "",
            push,
        };
    },
}));

afterEach(()=>{
    jest.clearAllMocks()
})

describe("Navbar UI test", () => {
  test("The Navbar UI component renders without console errors", () => {
    render(<Navbar />, { wrapper: ThemeWrapper });
    const consoleError = jest.spyOn(global.console, "error");
    expect(consoleError).toBeCalledTimes(0);
  });
  test("The Navbar UI calls router.push when the logo is clicked", () => {
    const { getByTestId } = render(<RouterContext.Provider value={useRouter.useRouter()} ><Navbar /></RouterContext.Provider>, { wrapper: ThemeWrapper });
    fireEvent.click(getByTestId("route-home"));
    expect(push).toBeCalled();
  });
  test("The Navbar UI link click calls router.push when the links are each clicked", () => {
    const { getAllByTestId } = render(<RouterContext.Provider value={useRouter.useRouter()} ><Navbar /></RouterContext.Provider>, { wrapper: ThemeWrapper });
    navLinks.map((_, i)=>{
        fireEvent.click(getAllByTestId("nav-link")[i]);
    })
    expect(push).toBeCalledTimes(navLinks.length);
  });
});
