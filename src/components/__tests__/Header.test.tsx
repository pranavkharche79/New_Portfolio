import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "../Header";
import { ThemeProvider } from "../ThemeProvider";

// Mock framer-motion to avoid animation issues in tests
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const filteredProps = Object.fromEntries(
        Object.entries(props).filter(([key]) =>
          !["initial", "animate", "exit", "transition", "whileInView", "viewport"].includes(key)
        )
      );
      return <div {...filteredProps}>{children}</div>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

describe("Header", () => {
  it("renders the logo", () => {
    renderWithTheme(<Header />);
    expect(screen.getByText("<Pranav />")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderWithTheme(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders GitHub and LinkedIn links", () => {
    renderWithTheme(<Header />);
    expect(screen.getByLabelText("GitHub profile")).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByLabelText("LinkedIn profile")).toHaveAttribute(
      "target",
      "_blank"
    );
  });

  it("renders the dark mode toggle", () => {
    renderWithTheme(<Header />);
    const toggle = screen.getByLabelText(/Switch to .* mode/);
    expect(toggle).toBeInTheDocument();
  });

  it("has mobile menu toggle button", () => {
    renderWithTheme(<Header />);
    const menuBtn = screen.getByLabelText("Toggle menu");
    expect(menuBtn).toBeInTheDocument();
    fireEvent.click(menuBtn);
    // After click, mobile links should be visible
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThanOrEqual(2); // Desktop + mobile
  });
});
