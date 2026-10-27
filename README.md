# ReactJS-AdminDashboard

An admin dashboard layout in React and Tailwind — the shell you'd drop real data into: a sidebar, a header, and a main content area.

## Layout

| Component | Role |
|---|---|
| `src/components/header/` | Top bar — search, notifications, account menu |
| `src/components/sidebar/` | Navigation rail with the dashboard sections |
| `src/components/main/` | Content area holding the cards, charts and tables |

Composed in `src/App.jsx`.

## Stack

React 18 · Vite · Tailwind CSS

## Running

```bash
npm install
npm run dev
```

Serves on `http://localhost:5173`; `npm run build` writes the production bundle.

## Notes

UI-focused practice build — the panels render static content, so wiring a data source means replacing the placeholder values inside the components. The responsive behaviour is driven entirely by Tailwind's breakpoint classes, with no component library.
