import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ProjectsGrid from "../ProjectsGrid";
import { _resetCache } from "@/lib/getProjects";

// Mock framer-motion
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
    article: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const filteredProps = Object.fromEntries(
        Object.entries(props).filter(([key]) =>
          !["initial", "animate", "exit", "transition", "whileInView", "viewport"].includes(key)
        )
      );
      return <article {...filteredProps}>{children}</article>;
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

const mockProjects = [
  {
    id: "project-1",
    title: "Test Project",
    short: "A test project for unit tests",
    description: "Full description of the test project",
    tech: ["React", "TypeScript"],
    year: 2024,
    thumbnail: "/test-thumb.jpg",
    images: [],
    videoUrl: "",
    githubUrl: "https://github.com/test/project-1",
    liveUrl: "https://test.example.com",
    isAI: false,
  },
  {
    id: "project-2",
    title: "AI Project",
    short: "An AI-assisted project",
    description: "Full description of the AI project",
    tech: ["Python", "TensorFlow"],
    year: 2025,
    thumbnail: "/ai-thumb.jpg",
    images: [],
    videoUrl: "https://youtube.com/watch?v=test",
    githubUrl: "https://github.com/test/project-2",
    liveUrl: "",
    isAI: true,
  },
];

beforeEach(() => {
  // Reset project cache before each test
  _resetCache();

  // Mock fetch to return our test projects
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: () => Promise.resolve(mockProjects),
  });
});

describe("ProjectsGrid", () => {
  it("renders project cards after loading", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("Test Project")).toBeInTheDocument();
      expect(screen.getByText("AI Project")).toBeInTheDocument();
    });
  });

  it("shows featured projects heading", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("Projects")).toBeInTheDocument();
    });
  });

  it("renders filter buttons", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("All")).toBeInTheDocument();
      expect(screen.getByText("AI Projects")).toBeInTheDocument();
      expect(screen.getByText("Non-AI Projects")).toBeInTheDocument();
    });
  });

  it("filters to show only AI projects", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("Test Project")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("AI Projects"));

    await waitFor(() => {
      expect(screen.queryByText("Test Project")).not.toBeInTheDocument();
      expect(screen.getByText("AI Project")).toBeInTheDocument();
    });
  });

  it("filters to show only Non-AI projects", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      expect(screen.getByText("AI Project")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText("Non-AI Projects"));

    await waitFor(() => {
      expect(screen.getByText("Test Project")).toBeInTheDocument();
      expect(screen.queryByText("AI Project")).not.toBeInTheDocument();
    });
  });

  it("shows tech tags on project cards", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      const reactTags = screen.getAllByText("React");
      expect(reactTags.length).toBeGreaterThanOrEqual(1);
      const tsTags = screen.getAllByText("TypeScript");
      expect(tsTags.length).toBeGreaterThanOrEqual(1);
    });
  });

  it("renders GitHub links on project cards", async () => {
    render(<ProjectsGrid />);

    await waitFor(() => {
      const githubLinks = screen.getAllByText("GitHub");
      expect(githubLinks.length).toBeGreaterThanOrEqual(1);
    });
  });
});
