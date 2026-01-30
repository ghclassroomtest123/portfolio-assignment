# Ticket 6: Header & Footer

**Task:** Add navigation and a footer to complete the site structure.

### Instructions

1. Create a `header.tsx` component in your `components` folder.
2. Add a navigation bar with links to the different sections of your page (e.g., "About", "Projects", "Skills").
3. Use Tailwind to make the header "sticky" at the top of the page (`sticky top-0 z-50`) and give it a background color or blur effect.
4. Put `data-testid="header-section`
5. Create a `footer.tsx` component to sit at the very bottom of the page.
6. Include links to your professional profiles (LinkedIn, GitHub).
7. Put `data-testid="footer-section"]`
8. Add both components to `App.tsx`. The Header should be at the top, and the Footer at the bottom.
9. Check your site on mobile and desktop. Ensure all links work and the spacing between sections feels balanced.

**Definition of Done:**
- Running `npx playright test header-footer.test.ts` in your project directory passes