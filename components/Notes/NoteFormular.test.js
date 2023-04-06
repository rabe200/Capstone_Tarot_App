import { render, screen } from "@testing-library/react";
import NoteFormular from "../../pages/cards/dailycard/detail/notes";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      back: jest.fn(),
    };
  },
}));

describe("NoteFormular", () => {
  test("renders correctly", () => {
    render(<NoteFormular />);
    const noteFormular = screen.getByRole("form");
    expect(noteFormular).toBeInTheDocument();
  });
});
