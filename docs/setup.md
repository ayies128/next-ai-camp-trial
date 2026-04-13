# セットアップガイド

> 学習を始める前に必要なツールを準備するためのガイドです。
> 上から順番に進めてください。わからないところは Claude Code に聞けば教えてくれます。

---

## 必要なものチェックリスト

### README で準備済みのもの

| # | ツール | 種類 | 何に使う？ |
|---|--------|------|-----------|
| 1 | VS Code | インストール | コードを書くためのエディタ（メモ帳の高機能版） |
| 2 | Claude Code | VS Code 拡張機能 | AI と対話しながら学習・開発する |
| 3 | Anthropic アカウント（Claude） | アカウント＋課金 | Claude Code を使うために必要 |
| 4 | GitHub | アカウント作成 | コードをインターネット上に保存・共有する |

### Session 0 で準備するもの

| # | ツール | 種類 | 何に使う？ |
|---|--------|------|-----------|
| 5 | Node.js | インストール | プログラムを動かすための土台 |
| 6 | Git | インストール | ファイルの変更履歴を記録する |
| 7 | Obsidian | インストール | 学習ノートを見やすく管理する |

### Session 15 で準備するもの（今はスキップ OK）

| # | ツール | 種類 | 何に使う？ |
|---|--------|------|-----------|
| 8 | Supabase | アカウント作成 | データベース（データの保存場所）とログイン機能 |
| 9 | Vercel | アカウント作成 | 作ったアプリをインターネットに公開する |

---

## 1. Node.js のインストール

**Node.js（ノードジェイエス）** は、JavaScript というプログラミング言語を動かすためのソフトです。
このプロジェクトを動かすのに必要です。

### macOS の場合

1. https://nodejs.org/ja にアクセス
2. **「LTS」と書かれたボタン**（左側の緑のボタン）をクリックしてダウンロード
3. ダウンロードした `.pkg` ファイルをダブルクリック
4. インストーラーの指示に従って「続ける」→「インストール」

### Windows の場合

1. https://nodejs.org/ja にアクセス
2. **「LTS」と書かれたボタン**（左側の緑のボタン）をクリックしてダウンロード
3. ダウンロードした `.msi` ファイルをダブルクリック
4. インストーラーの指示に従って「Next」→「Install」

### インストールできたか確認

ターミナル（Mac）またはコマンドプロンプト（Windows）を開いて、以下を入力：

```bash
node -v
```

`v18.x.x` や `v20.x.x` のようにバージョン番号が表示されれば成功です！

> **ターミナルの開き方**
> - Mac: 「アプリケーション」→「ユーティリティ」→「ターミナル」
> - Windows: スタートメニューで「cmd」と検索 →「コマンドプロンプト」

---

## 2. Git のインストール

**Git（ギット）** は、ファイルの変更履歴を記録するツールです。
「セーブポイント」を作って、いつでも前の状態に戻せるようになります。

### macOS の場合

ターミナルを開いて以下を入力：

```bash
git --version
```

- バージョンが表示されれば **すでにインストール済み** です！
- 「インストールしますか？」と聞かれたら「インストール」をクリック

### Windows の場合

1. https://git-scm.com にアクセス
2. 「Download for Windows」をクリック
3. ダウンロードしたファイルを実行
4. インストーラーの設定は **すべてデフォルト（初期設定）のまま「Next」** でOK
5. 最後に「Install」をクリック

### インストールできたか確認

```bash
git --version
```

バージョン番号が表示されれば成功です！

### Git の初期設定

> 💡 **Claude Code で設定できます！** Claude Code を先にインストールした場合は、
> Claude Code に「Git の初期設定をして。名前は〇〇、メールは〇〇で」と言えば自動でやってくれます。

手動でやる場合：

```bash
git config --global user.name "あなたの名前（ローマ字でOK）"
git config --global user.email "あなたのメールアドレス"
```

---

## 3. VS Code のインストール

**VS Code（ブイエスコード）** は、コードを書くためのエディタです。
メモ帳の超高機能版だと思ってください。色分けや補完機能があって、コーディングが楽になります。

### インストール手順

1. https://code.visualstudio.com にアクセス
2. 「Download」ボタンをクリック（お使いの OS 用が自動で選ばれます）
3. ダウンロードしたファイルを実行してインストール

### 日本語化する

1. VS Code を開く
2. 左サイドバーの **四角が 4 つ並んだアイコン**（拡張機能）をクリック
3. 検索バーに「Japanese」と入力
4. 「Japanese Language Pack for Visual Studio Code」の「Install」をクリック
5. VS Code を再起動すると日本語になります

### おすすめ拡張機能（あとから入れてもOK）

| 拡張機能名 | 何をしてくれる？ |
|-----------|---------------|
| Japanese Language Pack | VS Code を日本語化 |
| Claude Code | VS Code の中で Claude Code を使える |
| Tailwind CSS IntelliSense | Tailwind のクラス名を自動補完 |

---

## 4. Claude Code のインストール

> 詳しいガイドは 👉 **[Claude Code 完全ガイド](./claude-code-guide.md)** にあります。
> ここでは最短手順だけ書きます。

### Step 1: Anthropic アカウントを作る

1. https://claude.ai にアクセス
2. 「Sign up（サインアップ）」をクリック
3. Google アカウントで登録するか、メールアドレスで登録
4. メール認証が来たらリンクをクリックして完了

### Step 2: Pro プランに加入する（月額 $20）

Claude Code を使うには有料プランが必要です。

1. https://claude.ai にログイン
2. 画面左下の「Upgrade to Pro」をクリック
3. クレジットカード情報を入力
4. 「Subscribe」で加入完了

> 💰 月額 $20（約 3,000 円）です。いつでも解約できます。
> 学習用途なら Pro プランで十分です。

### Step 3: Claude Code をインストール

**macOS の場合**（ターミナルで実行）：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows の場合**（PowerShell で実行）：

```powershell
irm https://claude.ai/install.ps1 | iex
```

### Step 4: ログインする

```bash
claude
```

初回はブラウザが開きます。claude.ai のアカウントでログインすれば完了！

### インストールできたか確認

```bash
claude --version
```

バージョン番号が表示されれば成功です！

---

## 5. Obsidian のインストール

**Obsidian（オブシディアン）** は、Markdown（マークダウン）形式のメモを管理するアプリです。
このプロジェクトでは学習ノートの管理に使います。ノートがリンクでつながって、あとから振り返りやすくなります。

### インストール手順

1. https://obsidian.md にアクセス
2. 「Get Obsidian」をクリック
3. お使いの OS 用をダウンロード
4. インストールして起動

### このプロジェクトと連携する

1. Obsidian を起動
2. 「Open folder as vault（フォルダを Vault として開く）」を選択
3. このプロジェクトの **`knowledge/` フォルダ** を選択
4. 完了！

これで `knowledge/sessions/`（学習ノート）や `knowledge/prompts/`（プロンプト集）が
Obsidian 上できれいに見られるようになります。

> 📖 詳しい使い方は [Obsidian 運用ガイド](./obsidian-guide.md) を見てください。

---

## 6. GitHub アカウントの作成（README で実施済み）

> README の「はじめかた」で作成済みです。まだの方はそちらを先に進めてください。

**GitHub（ギットハブ）** は、コードをインターネット上に保存・共有するサービスです。
Git で記録した変更履歴をクラウドにバックアップできます。

### アカウント作成手順

1. https://github.com にアクセス
2. 「Sign up」をクリック
3. メールアドレスを入力
4. パスワードを設定（15 文字以上、または 8 文字以上＋数字＋小文字の組み合わせ）
5. ユーザー名を決める（英数字とハイフンが使えます。あとから変更可能）
6. メール認証のコードが届くので入力
7. 完了！

### このプロジェクトの始め方

README の Step 5「自分のプロジェクトを作る」で「**Use this template**」を使って自分のリポジトリを作成します。
詳しくは README を参照してください。

---

## 7. Supabase アカウントの作成（Session 15 で実施）

> ⏭ **今はスキップして OK です。** フェーズ C（Session 15〜）で使います。

**Supabase（スーパベース）** は、データベース（データの保存場所）とログイン機能を簡単に使えるサービスです。

### アカウント作成手順

1. https://supabase.com にアクセス
2. 「Start your project」をクリック
3. **GitHub アカウントでサインイン**（おすすめ。上で作ったアカウントで OK）
4. 組織（Organization）を作成（名前は何でも OK）
5. 完了！

### プロジェクトの作成

1. ダッシュボードで「New Project」をクリック
2. プロジェクト名を入力（例: `next-ai-camp`）
3. データベースのパスワードを設定（メモしておく！）
4. リージョン（地域）は「Northeast Asia (Tokyo)」を選択
5. 「Create new project」をクリック
6. 数分待つとプロジェクトが作成されます

### 接続情報の取得

1. プロジェクトのダッシュボードで「Settings」→「API」を開く
2. 以下の 2 つをコピー：
   - **Project URL**（`https://xxxxx.supabase.co`）
   - **anon public key**（`eyJ...` で始まる長い文字列）

### プロジェクトに設定する

> 💡 **Claude Code でできます！**
> 「Supabase の URL とキーを .env.local に設定して」と言えばやってくれます。

手動でやる場合：

```bash
# apps/web/ フォルダで
cp .env.local.example .env.local
```

`.env.local` を開いて、コピーした値を貼り付け：

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

---

## 8. Vercel アカウントの作成（Session 20 で実施）

> ⏭ **今はスキップして OK です。** 最後のセッションで使います。

**Vercel（ヴァーセル）** は、Web アプリをインターネット上に公開するためのサービスです。
GitHub と連携すると、コードをプッシュするだけで自動的に公開されます。

### アカウント作成手順

1. https://vercel.com にアクセス
2. 「Sign Up」をクリック
3. **「Continue with GitHub」を選択**（GitHub アカウントで連携）
4. GitHub の認証画面で「Authorize」をクリック
5. 完了！

### プロジェクトのデプロイ（公開）

1. Vercel のダッシュボードで「Add New...」→「Project」
2. GitHub リポジトリ一覧から `next-ai-camp` を選択して「Import」
3. 以下を設定：
   - **Root Directory**: `apps/web` と入力
   - **Framework Preset**: Next.js（自動で選ばれるはず）
4. 「Environment Variables」で Supabase の情報を追加：
   - `NEXT_PUBLIC_SUPABASE_URL` = （Supabase の URL）
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = （Supabase の Key）
5. 「Deploy」をクリック
6. 数分でデプロイ完了！URL が発行されます 🎉

> 💡 **Claude Code でもサポートできます！**
> 「Vercel にデプロイしたい。手順を教えて」と聞けばステップバイステップで案内してくれます。

---

## プロジェクトのセットアップ

このプロジェクトは ZIP ファイルで受け取ります。以下の手順でセットアップしましょう。

> 💡 **Step 2 以降は Claude Code でできます！**
> ZIP を展開したフォルダで Claude Code を起動して
> 「このプロジェクトをセットアップして」と言えば、まとめてやってくれます。

### Step 1: ZIP を展開する

1. 受け取った ZIP ファイルをダブルクリックして展開
2. 展開されたフォルダ（`next-ai-camp`）を好きな場所に移動
   - おすすめ: ホームフォルダやドキュメントフォルダの中

### Step 2: 必要なパッケージをインストール

```bash
cd next-ai-camp/apps/web
npm install
```

### Step 3: Git で管理を開始する

> 💡 これは Session 1 で Claude Code と一緒にやります。ここでは概要だけ。

```bash
cd next-ai-camp
git init
git add .
git commit -m "初期セットアップ"
```

### Step 4: 学習者モードに切り替える

```bash
npm run mode:learn
```

### Step 5: 開発サーバーを起動して確認

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開いて、ページが表示されれば成功です！

---

## 困ったときは

何かうまくいかないときは、Claude Code に聞いてみましょう：

```
Node.js のインストールでエラーが出た。こういうメッセージが出てる: {エラーメッセージ}
```

```
git --version と打ったけど何も表示されない
```

```
npm install でエラーになった
```

エラーメッセージをそのまま貼り付ければ、原因と対処法を教えてくれます。
