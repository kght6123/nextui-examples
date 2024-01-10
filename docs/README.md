# docs

## pnpm のインストール

```bash
$ volta install pnpm
$ pnpm --version
8.14.1
```

## monorepo の作成

```bash
$ pnpm init
# pnpm-workspace.yaml を作成
$ mkdir -p packages
$ cd packages
% pnpm create vite 
../../.pnpm-store/v3/tmp/dlx-31777       |   +1 +
../../.pnpm-store/v3/tmp/dlx-31777       | Progress: resolved 1, reused 0, downloaded 1, added 1, done
✔ Project name: … react-aria-example
✔ Select a framework: › React
✔ Select a variant: › TypeScript + SWC

Scaffolding project in /Volumes/Develop/kght6123/nextui-examples/packages/react-aria/react-aria-example...

Done. Now run:

$ cd react-aria-example
$ pnpm install
$ pnpm run dev

# "react-aria-example": "pnpm -C packages/react-aria-example" をpackage.jsonへ追加

$ cd ../..
$ pnpm react-aria-example dev
$ pnpm react-aria-example add -E react-aria-components
```

