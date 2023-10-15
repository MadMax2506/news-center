## :hammer_and_wrench: Setup

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main git@github.com:MadMax2506/news-center.git news-center
cd news-center
npm i -g pnpm vite
pnpm i
```

## :nut_and_bolt: Starting Development

1. Copy `.env.sample` to `.env`
1. Start the app in the `dev` environment:

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
