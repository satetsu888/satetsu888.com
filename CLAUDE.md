# CLAUDE.md

個人ポートフォリオサイト `satetsu888.com` の実装ガイド。

## プロジェクト概要

自己紹介とプロジェクト一覧を載せる 1 ページの純静的サイト。ルーティングなし。

- React 19 + TypeScript + Vite 6
- Vanilla CSS + CSS Modules
- Cloudflare Workers (Static Assets) にデプロイ。Cloudflare ダッシュボードで GitHub リポジトリを連携しており、`master` への push で Workers Builds が自動ビルド & デプロイする
- 2016 年版の Vue 1 + Webpack 1 サイトからの書き直し

## ディレクトリ構成

```
src/
├── main.tsx / App.tsx
├── sections/     Hero / About / Links / Projects
├── components/   ExternalLink / TechTag / ProjectItem / CompactProjectItem
├── data/         profile.ts / projects.tsx / tech.ts / types.ts
└── styles/       globals.css + *.module.css
public/          me.jpg, favicon.svg
wrangler.jsonc   Cloudflare Workers 設定 (assets: ./dist, SPA fallback)
```

## デザイン方針

- **シンプルな sans-serif (Inter) ベース、控えめなトーン**
- アクセントカラーはオレンジ (`#ce481f`、旧 v1 サイト由来)
- 背景は白 + ごく薄いオレンジ系 radial gradient
- 区切り線は `rgba(...,.08)` 程度の弱いグレー

## データ追加

### プロジェクトを追加する

1. `src/data/projects.tsx` の配列先頭 (= 新しいほう) に挿入
2. `year >= 2020` なら通常表示、`year < 2020` なら archive に自動振り分け
3. `tech` は `TechTagId` のリテラルで指定

新しい技術を `tech` で使う場合:

1. `src/data/types.ts` の `TechTagId` union に slug を追加
2. `src/data/tech.ts` で `react-icons/si` から該当アイコンを import し、`TECH_META` にエントリ追加
3. Simple Icons に該当が無ければ `Icon: null`。自作 SVG は作らない。ラベルのみ表示される

### SNS リンクを追加する

`src/data/profile.ts` の `links` 配列を編集。並び順がそのまま画面に出る。

## コード方針

- 責務の分解: `sections/` / `components/` / `data/` / `styles/` の境界をまたがない
- UI コンポーネントは props 経由でデータを受け取る。`data/` に直接依存するのは `sections/` まで
- グローバル CSS は `styles/globals.css` のみ、セクション固有は CSS Modules

## 開発・ビルド

```bash
npm ci
npm run dev       # dev server (user が実行する)
npm run build     # tsc + vite build (AI が実行してよい)
npm run preview   # dist/ のプレビュー
```

Node バージョンは `.node-version` (24.15.0) 固定。ローカルは nodenv。

## デプロイ

- Cloudflare 側で GitHub 連携済み。`master` への push → Workers Builds が `npm ci && npm run build` を実行し `dist/` を配信
- `wrangler.jsonc` で `not_found_handling: "single-page-application"` を有効化済み (将来のルーティング追加に備えた保険)
- カスタムドメインは Cloudflare ダッシュボード側で設定
