# セットアップガイド — 無料体験版

> **セットアップだけは、このページを上から順に進めます。**
> Session 0 が始まったら、進行役は AI に切り替わります。分からない言葉は、今すぐ理解しなくて大丈夫です。

所要時間の目安: 20〜40分（ダウンロード時間を含む）

---

## 先に結論: 今回は何を入れる？

| 必要なもの | 役割 | 今回必要？ |
|---|---|---|
| **GitHub** | 教材の自分用コピーを置く場所 | 必須 |
| **Git** | 変更を記録する道具 | 必須 |
| **VS Code** | ファイルを開くエディタ | 必須 |
| **AI パートナー** | Session 0 からの進行役 | 必須 |
| **Node.js / npm** | Next.js アプリをローカルで動かす道具 | **任意** |

> ⚠️ **Session 0〜3 では Next.js や `npm run dev` を使いません。** Node.js は「ブラウザの60秒プレビューを自分のPCでも動かしてみたい」人だけ、最後に任意で入れます。

---

## Step 1: GitHub アカウントを用意する

[GitHub](https://github.com) を開き、アカウントがなければ **Sign up** から無料で作ります。
すでにある人はログインだけでOKです。

**GitHub** は「Git の記録をインターネット上に置く場所」です。Session 3 で意味を丁寧に学ぶので、今はアカウントだけ作れば十分です。

---

## Step 2: Git を入れる

### 🍎 Mac

ターミナルを開きます（`Command + Space` →「ターミナル」→ Enter）。次を入力します。

```bash
git --version
```

バージョン番号が出れば、すでに入っています。初回にインストールを聞かれたら、画面の案内どおり **「インストール」** を選びます。

### 🪟 Windows

[Git for Windows](https://git-scm.com/downloads/win) をダウンロードして実行します。
途中の選択肢は、特別な理由がなければ **初期設定のまま Next** で進めて大丈夫です。

終わったら PowerShell を開き、次を入力します。

```powershell
git --version
```

`git version 2...` のように表示されれば成功です。

> `git` が見つからないと出たら、ターミナルを一度閉じて開き直してください。それでも直らなければ、表示全文を AI に貼って相談しましょう。

### Git に自分の名前を教える

Session 2 で変更を記録するとき、Git は「誰の記録か」を必要とします。次の `あなたの名前` と `メールアドレス` を、自分のものに置き換えて **1行ずつ** 実行してください。

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
```

GitHub へ記録を送る予定なら、GitHub アカウントに登録しているメールアドレスを使うのがおすすめです。メールアドレスを公開したくない人は、GitHub のメールアドレス非公開設定を確認してから進めてください。

確認は次でできます。

```bash
git config --global user.name
git config --global user.email
```

---

## Step 3: この教材を自分用にコピーする（フォーク）

**フォーク（fork）** は、公開されている教材を GitHub 上で **自分専用のコピー** にすることです。

1. [体験版リポジトリ](https://github.com/ayies128/next-ai-camp-trial) を開く
2. 右上の **Fork** をクリック
3. 表示されたまま **Create fork** をクリック

画面左上が `あなたのGitHub名 / next-ai-camp-trial` になれば成功です。

---

## Step 4: 自分のコピーをパソコンに取り込む（clone）

**clone（クローン）** は、GitHub 上のコピーをパソコンに取り込むことです。

### 1. 自分のリポジトリのURLをコピーする

フォーク後のページで、緑色の **Code** ボタン → **HTTPS** → コピーアイコンを押します。
`https://github.com/あなたの名前/next-ai-camp-trial.git` のような文字列がコピーされます。

### 2. ターミナルに貼り付ける

次の `あなたの名前` の部分を、コピーしたURLに置き換えて実行します。

```bash
git clone https://github.com/あなたの名前/next-ai-camp-trial.git
```

終わったら、フォルダへ移動します。

```bash
cd next-ai-camp-trial
```

`README.md` や `AGENTS.md` という名前が見えれば成功です。

```bash
ls
```

> 🪟 Windows の PowerShell でも、上の3つのコマンドは同じです。保存場所を変えたい人以外は、最初に出ているフォルダのままでOKです。

> 💡 OneDrive / iCloud Drive が同期する「デスクトップ」「書類」は、最初は避けるのがおすすめです。同期がプログラムのファイルに追いつかず、エラーの原因になることがあります。

---

## Step 5: VS Code と AI を開く

### VS Code を入れる

[Visual Studio Code](https://code.visualstudio.com/) をダウンロードしてインストールします。

起動したら、メニューから **ファイル → フォルダーを開く** を選び、Step 4 でできた `next-ai-camp-trial` フォルダを開きます。

### AI パートナーを選ぶ

この教材は **Claude Code** と **Codex** のどちらでも進められます。すでに使えるほうを1つ選んでください。

- Claude Code を選ぶ人: [Claude Code 公式ガイド](https://code.claude.com/docs/en/overview) と、このリポジトリの [Claude Code 向けガイド](./claude-code-guide.md)
- Codex を選ぶ人: [Codex の公式ドキュメント](https://developers.openai.com/codex/)

AI のパネルを開き、**いま開いている `next-ai-camp-trial` フォルダを読み取れる状態**にします。初回に「このフォルダを信頼しますか？」と聞かれたら、フォークした自分の教材であることを確認してから信頼してください。

---

## Step 6: AI にバトンを渡す

AI のパネルに、次をそのまま貼り付けて送ります。

```text
はじめまして。プログラミングは完全に未経験です。
このリポジトリで無料体験版を始めます。

ここから先の進行は、あなたがリードしてください。
どのファイルをいつ読むか、次に何をするかは、毎回あなたから指示してください。
準備ができたら、Session 0 から始めたいです。
```

これでセットアップは終わりです 🎉

**この段階で `npm install` や `npm run dev` を実行する必要はありません。**
AI が Session 0 を案内します。以後は、毎回 **「続きから始めよう」** と送れば大丈夫です。

---

## 任意: ローカルでプレビューを動かす

これは学習本体ではありません。Session 0〜3 を終えた後、「ブラウザの60秒プレビューがどう動いているかを見たい」と思った人だけ行います。

1. [Node.js](https://nodejs.org/) の **LTS** 版をインストールする
2. ターミナルでこのリポジトリのフォルダにいることを確認する
3. 次を順に実行する

```bash
npm install
npm run dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く
5. 終えるときはターミナルで `Control + C`（Windows は `Ctrl + C`）を押す

> ここで出る `npm`、`localhost`、Next.js は本編で順番に学びます。分からないまま進めても問題ありません。体験版で必須なのは、ブラウザ上の公開プレビューだけです。

---

## 困ったとき

| 起きたこと | まずすること |
|---|---|
| `git: command not found` | ターミナルを閉じて開き直す。直らなければ Git を入れ直す |
| `Repository not found` | **フォーク後の自分のURL**を `git clone` に使っているか確認する |
| VS Code でフォルダが空に見える | `next-ai-camp-trial` フォルダそのものを開き直す |
| AI が何をすべきか分からない | `AGENTS.md を読み、Session 0 を進めてください` と送る |
| エラーの意味が分からない | エラー文を省略せず、そのまま AI に貼る |

解決しなければ、[GitHub Issues](https://github.com/ayies128/next-ai-camp-trial/issues) にエラー全文・OS（Mac/Windows）・試したことを書いてください。
