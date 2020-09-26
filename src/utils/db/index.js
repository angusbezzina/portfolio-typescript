import { projects } from "./data";

export function getProjectBySlug(slug) {
  return projects.find(project => project.slug === slug);
}
