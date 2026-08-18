# 🎓 AI ブートキャンプ — 無料体験版（Session 0〜3）

**「何を学ぶのか」と「自分で進められそうか」を、4セッションで確かめるための体験版です。**

プログラミング完全未経験でも大丈夫です。セットアップが済んだら、AI が進行役になります。あなたは「次は何をすればいい？」と聞くだけで進められます 🙌

[![ブラウザで試す](https://img.shields.io/badge/▶_ブラウザで60秒プレビュー-インストール不要-22c55e?style=for-the-badge)](https://trial-web-ayies128s-projects.vercel.app)
[![ライセンス](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)](./LICENSE)

---

## ▶ まず、ブラウザで「変わる」を試す（インストール不要）

### 👉 [60秒プレビューを開く](https://trial-web-ayies128s-projects.vercel.app)

開いたら、画面の **名前** を入れ、**作りたいもの** と **色** を選び、**「いいね！」** を押してください。
あなたの操作に合わせて、画面の見出し・見た目・応援の数がその場で変わります。

これは「コードを変えるとブラウザの表示が変わる」感覚を、コードもアカウントもなしで確かめるための**完成見本**です。

> ⚠️ このプレビューは体験版の Session 0〜3 そのものではありません。実際の学習は、いきなり Next.js や `npm run dev` を使わず、まず道具の正体を知るところから始めます。画面づくりは本編の Session 6 以降で段階的に学びます。

---

## 🎁 体験版で本当にやること

体験版は、本編と同じ最初の4セッションです。すべて **⓪ 共通の道具** のエリア。あとでフロントエンド・バックエンド・インフラを作るための「操縦席」を先に整えます。

| Session | テーマ | できるようになること | 目安 |
|---|---|---|---|
| 0 | プロジェクトの歩き方 | AI と一緒に進める学び方をつかむ | 30分 |
| 1 | ターミナルとファイルの世界 | パソコンの中を安全に探検できる | 45分 |
| 2 | Git ってなに？ | 変更を「セーブポイント」として記録できる | 45分 |
| 3 | GitHub を使ってみよう | 記録をオンラインに置き、共有する仕組みが分かる | 45分 |

> 🗺 4つのセッションが全体のどこにあるかは、[技術地図](docs/tech-map.md) でいつでも確認できます。

各セッションは「説明を1つ読む → すぐ小さく動かす」のリズムです。最後には教材を閉じて、自分の言葉や手で再現します。**「動いた」だけでなく「説明できた」**をゴールにします。

---

## 🚀 はじめかた

**セットアップまでは、この README と [セットアップガイド](docs/setup.md) を使います。**
Session 0 からは、AI が案内役です。

1. [セットアップガイド](docs/setup.md) を上から進め、GitHub 上でこのリポジトリをフォークして自分のパソコンに clone します
2. VS Code で `next-ai-camp-trial` フォルダを開き、使う AI（Claude Code または Codex）にサインインします
3. AI のパネルに、次をそのまま送ります

```text
はじめまして。プログラミングは完全に未経験です。
このリポジトリで無料体験版を始めます。

ここから先の進行は、あなたがリードしてください。
どのファイルをいつ読むか、次に何をするかは、毎回あなたから指示してください。
準備ができたら、Session 0 から始めたいです。
```

### Session 0 からは「AI が教室」

| | セットアップまで | Session 0 から |
|---|---|---|
| 進め方 | README とセットアップガイド | **AI に聞く** |
| 次の一手 | 手順どおりに進める | AI が案内する |
| 困ったとき | エラー文をコピーする | AI にそのまま貼る |

教材を先回りして読破しなくて大丈夫です。迷ったら AI に **「次は何？」** と送ってくださいね。

---

## 必要なもの

| 必要なもの | 何に使う？ |
|---|---|
| PC（Mac / Windows） | 学習と練習 |
| GitHub アカウント（無料） | 自分の教材コピーを置く場所 |
| Git | 変更の記録（Session 2 で意味を学ぶ） |
| VS Code | ファイルを開くエディタ |
| AI パートナー | Claude Code または Codex。すでに使えるほうでOK |

**Node.js と `npm run dev` は、体験版の学習を始めるためには不要です。**
ローカルで60秒プレビューの中身を見たい人だけ、Session 0〜3 を終えた後に [セットアップガイドの任意ステップ](docs/setup.md#任意ローカルでプレビューを動かす) を使ってください。

---

## 体験版のあと

本編では、全24セッションを通じて、HTML / CSS / JavaScript から Next.js、データベース、公開までを1周します。

```text
Session  0〜3   道具の正体を知る ← この体験版
Session  4〜10  Web とプログラミングの基礎
Session 11〜17  Next.js で Web アプリを作る
Session 18〜24  データ・設計・公開までつなげる
```

「続けて作ってみたい」と思ったら、[MENTA の本編プラン](https://menta.work/plan/20251?ref=github-trial) をご覧ください。

---

## リポジトリの見取り図

```text
next-ai-camp-trial/
├── knowledge/lessons/       ← AI が案内する4セッションの教材
├── knowledge/sessions/      ← 学習の記録（自分用・Gitには保存しない）
├── practice/                ← Session 1 で使う安全な練習場
├── docs/                    ← セットアップと全体の案内
└── apps/trial-web/          ← ブラウザの60秒プレビュー（学習本体とは別）
```

| 読みたいもの | ここ |
|---|---|
| セットアップの詳しい手順 | [docs/setup.md](docs/setup.md) |
| 4セッションの全体像 | [docs/roadmap-trial.md](docs/roadmap-trial.md) |
| 毎回の進め方 | [docs/learning-protocol.md](docs/learning-protocol.md) |
| 技術の全体地図 | [docs/tech-map.md](docs/tech-map.md) |
| Claude Code を選んだ人向け | [docs/claude-code-guide.md](docs/claude-code-guide.md) |
| 言葉を意味から調べる | [knowledge/glossary.md](knowledge/glossary.md) |

---

## 困ったとき

エラーや分からない画面が出たら、**表示された文章を省略せず AI に貼る**のがいちばん早いです。
それでも解決しない場合は、[GitHub Issues](https://github.com/ayies128/next-ai-camp-trial/issues) へどうぞ。

## ライセンス

[MIT License](./LICENSE)
