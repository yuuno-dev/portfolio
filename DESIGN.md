# Thaw Portfolio Design System

## Purpose and audience

This is a personal portfolio for an IT student in Kobe who is looking for internship and early-career opportunities. Recruiters should be able to scan the introduction, current learning, education, project status, and contact details without navigating a complex interface.

## Direction

- **Tone:** warm, editorial, restrained, and candid.
- **Memorable detail:** a quiet serif/sans contrast and a framed personal portrait make the introduction feel personal without inventing work or relying on decorative technology motifs.
- **Palette:** paper and charcoal form the reading surface; olive signals learning and secondary emphasis; terracotta marks key labels and actions.
- **Typography:** system sans-serif carries longer reading; Georgia and Japanese Mincho fallbacks create editorial headings; monospace is reserved for small metadata.
- **Shape:** square corners and thin rules keep the page calm. The pill radius is reserved for the theme control.
- **Motion:** short section reveals and theme transitions are optional. `useReducedMotion` disables reveal movement, and the CSS media query removes smooth scrolling and long transitions.
- **Responsive behavior:** the main content is capped at 1180px, with tablet and mobile layouts at 850px and 600px. Small screens keep all four navigation links visible.
- **External dependencies:** none added. Fonts use local system stacks; the page does not depend on Google Fonts or remote image assets.

## Design contract

- **Purpose:** help Japan-based internship recruiters assess Thaw’s current learning, confirmed work, education, and contact details.
- **Audience:** recruiters who need to scan a student profile quickly in either English or Japanese.
- **Primary actions:** open the confirmed Yuno Study Space project or contact Thaw by email.
- **Hierarchy:** circular portrait and short introduction first; confirmed project next; current learning, education, qualifications, and contact details follow.
- **Tone and memorable detail:** restrained warm editorial layout, with the personal portrait and a compact portrait-and-biography composition at medium widths.
- **Target viewports:** 375×812 mobile, 560×583 narrow in-app browser, and 1440×900 desktop.
- **Local reference:** rendered site at `http://127.0.0.1:5173/`; no external page or project source was used as a design instruction.

The page has no asynchronous data, forms, gated features, or transactional actions. Loading, error, success, and permission states do not apply. An empty Projects state remains available in code as a fallback, but the current content includes a confirmed live project. Partial-data handling is not needed because the profile is local static content.

## Tokens

The machine-readable token set lives in [`design-tokens.json`](./design-tokens.json). The same central CSS properties are declared in `src/styles.css`. Use the CSS variables for new color, spacing, shape, and motion decisions rather than introducing one-off values.

### Color contrast review

Ratios below were calculated from the defined sRGB colors. Normal text needs 4.5:1 under WCAG AA; large text needs 3:1.

| Pair | Ratio | Result |
| --- | ---: | --- |
| Day ink on paper | 12.72:1 | Pass |
| Day muted text on paper | 5.03:1 | Pass |
| Day olive on paper | 4.60:1 | Pass |
| Day terracotta on paper | 5.16:1 | Pass |
| Day focus ring on paper | 5.59:1 | Pass |
| Night ink on paper | 12.49:1 | Pass |
| Night muted text on paper | 7.87:1 | Pass |
| Night olive on paper | 6.40:1 | Pass |
| Night terracotta on paper | 5.28:1 | Pass |
| Night focus ring on paper | 8.47:1 | Pass |

Day terracotta was darkened from `#a95f49` to `#98513d` so small labels clear the normal-text contrast target.

## Visual audit

Qualitative 0–10 scores for the current page and token layer. This is a focused local audit, not a competitor benchmark.

| Dimension | Score | Finding |
| --- | ---: | --- |
| Color consistency | 9 | Day/night palettes are centralized; role colors stay consistent. |
| Typography hierarchy | 9 | Serif display headings contrast with readable sans body and restrained mono metadata. |
| Spacing rhythm | 8 | Added a shared 4px-based spacing scale; a few larger editorial gaps remain intentionally fluid. |
| Component consistency | 8 | Links, rules, empty states, and theme control share a restrained visual language. |
| Responsive behavior | 9 | Layout includes desktop, tablet, medium-width side-by-side portrait/biography, and narrow mobile arrangements. |
| Dark mode | 9 | All primary surfaces, text, focus, accent, and rules have night values. |
| Animation | 9 | Motion is limited to short reveals and theme changes, with reduced-motion handling. |
| Accessibility | Reviewed | Semantic landmarks, keyboard controls, visible focus, localized labels, meaningful portrait alt text, and reduced-motion handling were checked. A screen-reader session and 400% zoom review remain outstanding. |
| Information density | 9 | The page is scannable and describes one confirmed project without claiming unverified coding or design work. |
| Polish | Reviewed | The opening layout, project card, metadata, and language controls were checked in rendered views. |

### AI-slop check

No neon, gradients, glass panels, floating dashboard cards, decorative 3D, or excessive animation are used. The portrait carries the visual interest in the introduction.

## Editing guidance

- Change colors and design tokens in `design-tokens.json` and mirror changes in the root CSS custom properties in `src/styles.css`.
- Keep project details honest; add technologies and personal contributions only after they are confirmed.
- Keep English and Japanese copy aligned in `src/content.ts` when editing portfolio content.
- The supplied portrait is stored at `public/images/thaw-profile.jpg`.

## Interactive preview

Open `design-preview.html` directly to compare the day and night palette, type hierarchy, spacing, and common interface details.

## Rendered review notes

- In the connected in-app browser at 564×569, the Japanese/day view showed the circular portrait beside the biography with no visible horizontal overflow. The portrait loaded with localized alt text.
- English/Japanese switching updated the page copy and title. Day/night switching worked. About, Learning, Projects, and Contact navigation reached their matching anchors. The Yuno Study Space card showed the confirmed live URL and prepared-notes contribution.
- Keyboard focus was visible on a focused control. Reduced-motion support was checked in code through Motion's reduced-motion hook and the CSS media query.
- A formal visual-baseline comparison remains inconclusive because no baseline exists. I could not capture local screenshot artifacts or use 375px/1440px viewport overrides in the connected browser; installed headless browser launches failed in this environment. Automated axe, console/network, and Core Web Vitals checks remain unrun. No accessibility certification is claimed.
