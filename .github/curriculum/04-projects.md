# Ticket 4: Projects Section

**Task:** Showcase your work by building a dynamic projects section.

### Instructions

1. Create a `projects.tsx` component in your `components` folder.
2. Define an array of project objects. Each object should have a title, description, image URL, and a link (GitHub or Live Demo).
3. Use the `.map()` function to iterate through your projects and render them as "cards".
4. Design your cards using Tailwind. Consider adding:
   - A hover effect (e.g., `hover:scale-105 transition-transform`).
   - Rounded corners and subtle shadows.
   - Badges for the technologies used (e.g., "React", "Tailwind").
5. Add the `<Projects />` component to your `App.tsx` below the Hero section.
6. Make sure the section is responsive. Use a grid layout that changes from 1 column on mobile to 2 or 3 columns on larger screens (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`).
7. Make sure you have [data-testid="projects-section"] in the very first tag in your HTML code

**Definition of Done:**
- Running `npx playright test projects.test.ts` in your project directory passes
