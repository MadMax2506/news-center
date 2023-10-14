## :hammer_and_wrench: Setup

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main git@github.com:MadMax2506/react-template.git your-project-name
cd your-project-name
npm i -g pnpm vite
pnpm i
```

- Adjust custom settings in `index.html`
- Adjust app name in `src\context\LanguageContext\locales`
- Replace `<USER>` and `<PROJECT>` in `src/renderer/components/Todo/TodoLink.tsx` with the related GitHub information

## :nut_and_bolt: Starting Development

Start the app in the `dev` environment:

```bash
pnpm i
pnpm start:dev
```

## :computer: Starting Production

Start the app in the `prod` environment:

```bash
pnpm i
pnpm build
pnpm start:prod
```
