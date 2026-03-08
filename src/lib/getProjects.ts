import type { Project } from "@/types/project";

let cache: Project[] | null = null;

export async function getProjects(): Promise<Project[]> {
  if (cache) return cache;

  const res = await fetch("/data/projects.json");
  if (!res.ok) throw new Error(`Failed to load projects: ${res.status}`);

  const data: Project[] = await res.json();
  cache = data;
  return data;
}

/** Reset the internal cache — used in tests */
export function _resetCache(): void {
  cache = null;
}
