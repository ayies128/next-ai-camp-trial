# Session 03: GitHub を使ってみよう — フォーク・ブランチ・PR

## 🎯 このセッションの到達目標

- [ ] Git と GitHub の違いを説明できる
- [ ] fork、clone、push、pull を英語の意味から説明できる
- [ ] 自分のフォークを `origin`、教材本体を `upstream` として見分けられる
- [ ] ブランチを作り、変更を push し、自分のフォーク内で PR を作成・マージできる

## ⏱ 所要時間 / 難易度

- 所要: 60〜75分目安
- 難易度: ★★

## 📋 前提

- Session 02 を終え、`git status`、`git add`、`git commit` を使える
- GitHub にログインできる
- 自分の GitHub アカウントに `ayies128/next-ai-camp-trial` をフォークし、その自分用コピーを PC にクローンしている
- 練習で作るファイル: `practice/session-01-terminal/my-first-pr.md`

> 🔧 **このセッションに Node は不要です。** Git と GitHub の操作だけを練習します。

---

## 🗺 いまここ

> [技術地図](../../docs/tech-map.md) で、4 層の全体像を確認できます。
>
> 今回も **⓪ 共通の道具** です。GitHub は、Git の記録をネット上で共有する場所です。自分の変更を安全に試し、あとから見返せる形で残す流れを身につけます。

---

## 🧠 まず自分で考えてみる（AI に聞く前に 3 分）

**問い**: 「教材本体は講師が更新する」「自分は自由に練習したい」を両立させるには、なぜ教材を自分のアカウントへコピーしてから PC に取り込むのでしょう？

---

## 🗣 今日の新出用語

| 用語 | 英語の意味 | 一言でいうと |
| --- | --- | --- |
| GitHub（ギットハブ） | Git + hub（拠点） | Git の記録を置いて共有するサービス |
| remote（リモート） | 遠くの・離れた | ネットの向こうにある通信相手 |
| origin（オリジン） | 起点・出どころ | 自分がクローンしたコピーの定番名 |
| upstream（アップストリーム） | 川の上流 | フォーク元の教材本体の定番名 |
| push（プッシュ） | 押し出す | 手元の記録を GitHub へ送る |
| pull（プル） | 引き寄せる | GitHub の記録を手元へ取り込む |
| branch（ブランチ） | 木の枝 | 本体から分けて試す作業場所 |
| main（メイン） | 主要な | 基本になる本体の枝 |
| pull request / PR | 取り込むお願い | 変更を本体へ合流してもらう提案 |
| merge（マージ） | 合流する | 枝の変更を本体に取り込むこと |

→ 詳しくは [用語辞典](../glossary.md) を見てください。

---

## 📖 理論パート — 読みながら小さく確かめる

### 1. Git は手元の記録道具、GitHub はネット上の置き場所

Session 02 の **Git** は、あなたの PC の中でファイルの変更を記録する道具でした。**GitHub** は、その記録をネット上に置き、他の場所や他の人と共有できるサービスです。

「ノートに書く道具」と「ノートを置く共有棚」は別物です。Git で commit しただけでは、まだ PC の中にしかありません。GitHub へ送ると、ブラウザでも履歴を見られるようになります。

> 👀 **みてみて**: ブラウザで `https://github.com/あなたのGitHubユーザー名/next-ai-camp-trial` を開いてください。VS Code のファイル一覧と見比べ、同じ `knowledge/` と `practice/` がネット上にも見えることを確認します。

### 2. fork と clone は、自由に練習するための 2 段階

**fork = 英語で「枝分かれさせる」**です。教材本体 `ayies128/next-ai-camp-trial` を、自分の GitHub アカウントの下へ丸ごとコピーします。教材本体には直接変更を送らず、自分のコピーで安心して練習するためです。

**clone = 英語で「複製する」**です。自分の GitHub 上のコピーを、ファイルと履歴ごと PC に取り込みます。fork は GitHub 上、clone は PC 上の操作、と覚えてください。

> ✋ **やってみて**: 教材フォルダのいちばん上で次を打ってください。

```bash
git remote -v
```

`origin` の URL に `https://github.com/あなたのGitHubユーザー名/next-ai-camp-trial.git` が表示されれば正しい状態です。`origin` は **origin = 起点・出どころ** という、最初の通信相手に付ける定番名です。

### 3. `origin` と `upstream` を分けると、練習場所と教材本体を混同しない

フォークを使うときは、`origin` を **自分のフォーク**、`upstream` を **教材本体** と呼ぶのが定番です。**upstream = 川の上流**。教材の更新が流れてくる大元、というイメージです。

もし前の表示で `origin` が `ayies128/next-ai-camp-trial` だったら、教材本体を直接クローンしています。先にブラウザで教材本体をフォークしてから、次の 2 行を実行してください。`rename` は英語で「名前を変える」。ここでは元の `origin` を教材本体用の `upstream` へ名前変更します。`あなたのGitHubユーザー名` は自分の ID に置き換えます。

```bash
git remote rename origin upstream
git remote add origin https://github.com/あなたのGitHubユーザー名/next-ai-camp-trial.git
```

すでに `origin` が自分のフォークなら、教材本体を `upstream` として追加します。`git remote -v` に `upstream` がない場合だけ実行してください。

```bash
git remote add upstream https://github.com/ayies128/next-ai-camp-trial.git
```

> ✋ **やってみて**: もう一度 `git remote -v` を実行し、次の対応を声に出して確認してください。

| 名前 | どこを指す？ |
| --- | --- |
| `origin` | あなたの GitHub アカウントの `next-ai-camp-trial` |
| `upstream` | `ayies128/next-ai-camp-trial` の教材本体 |

### 4. push と pull は、PC と GitHub の間で記録を行き来させる

**push = 英語で「押し出す」**なので、PC の commit を GitHub へ送ります。反対に **pull = 英語で「引き寄せる」**なので、GitHub の新しい commit を PC へ取り込みます。

同じ名前のファイルをいきなり上書きする操作ではありません。Git は commit という記録の単位で、足りない分を行き来させます。

> 👀 **みてみて**: ターミナルで次を打ってください。

```bash
git branch --show-current
git status
```

最初は多くの場合 `main` と表示されます。`main = 主要な` は、教材の基本となる枝です。次はここを直接いじらず、別の枝で練習します。

### 5. ブランチと PR は、本体を壊さずに変更を確認する仕組み

**branch = 英語で「木の枝」**です。`main` という幹から作業用の枝を出すと、途中の失敗が本体に直接混ざりません。

変更を GitHub へ送り、「この枝を main に取り込んでください」と出す提案が **pull request（PR）** です。PR の内容をブラウザで確認してから **merge = 合流する**すれば、変更が main に入ります。

> 👀 **みてみて**: ブラウザで自分の `next-ai-camp-trial` を開き、上部の「Pull requests」タブを見つけてください。今は何もなくて大丈夫です。演習で、ここに自分の 1 件を作ります。

---

## 🎨 演習課題（30 分）

### 課題 1: 自分用の枝で変更を作り、GitHub へ送る

教材フォルダのいちばん上で、まず作業用ブランチを作ります。

```bash
git switch -c feat/session-03-github-practice
```

`switch` は「切り替える」、`-c` は create（作る）の略です。つまり「この名前の新しい枝を作り、そこへ切り替える」です。

VS Code で `practice/session-01-terminal/my-first-pr.md` を新規作成し、次を自分の言葉で書いて保存してください。

```markdown
# はじめての PR

この変更を自分のフォークで PR にします。
```

次を 1 行ずつ実行します。`git add .` は使わず、今回のファイルだけを指定します。

```bash
git status
git add practice/session-01-terminal/my-first-pr.md
git commit -m "docs: add my first PR note"
git push -u origin feat/session-03-github-practice
```

最後の `-u` は upstream の略ではなく、今いるローカルの枝と `origin` の枝を「次回から対応づける」指定です。次回以降は同じ枝から `git push` とだけ打てるようになります。

### 課題 2: 自分のフォーク内で PR を作り、確認してマージする

1. ブラウザで**自分の GitHub アカウントの** `next-ai-camp-trial` を開く
2. 「Compare & pull request」が出たら開く。出ない場合は「Pull requests」→「New pull request」を開く
3. **base repository（取り込み先のリポジトリ）が `あなたのGitHubユーザー名/next-ai-camp-trial`、base（取り込み先の枝）が `main`** になっていることを確認する
4. compare（比べる側）が `feat/session-03-github-practice` になっていることを確認する
5. タイトルに「Session 03: はじめての PR」と書き、PR を作る
6. 「Files changed」で、追加した `my-first-pr.md` だけが入っていることを確認する
7. 「Merge pull request」を選び、合流を確定する

> ⚠️ base repository が `ayies128/next-ai-camp-trial` のままなら、作成を止めてください。この体験版では教材本体へ PR を送らず、**自分のフォークの中だけで**練習します。

マージできたら PC に戻り、次を実行します。

```bash
git switch main
git pull origin main
git status
```

ブラウザで合流した変更を、手元の `main` にも取り込みます。

---

## 📕 閉本再現（8 分）— このセッションで一番大事

**このページを閉じてから**、AI に次を送ってください。

```text
Session 03 の閉本再現をします。
私が「自分のフォークで安全に変更を main へ入れる」手順を、fork / clone / branch / add / commit / push / PR / merge / pull の順に説明します。
1つずつ私に説明させ、意味や順番が違うところだけヒントをください。
答えの一覧は先に見せないでください。
```

最後に、`origin` と `upstream` がどこを指すかを、URL を使って説明できれば合格です。

---

## 🤖 AI への話しかけ方

```text
git remote -v の結果を見て、origin と upstream がどこを指しているか確認してください。
変更やコマンド実行はせず、危ない接続だけ教えてください。
```

```text
PR を作る前に、今回の変更ファイルと合流先が安全か一緒に確認したいです。
私が画面を説明するので、確認項目を1つずつ聞いてください。
```

> ⚠️ AI に「PR を作ってマージして」と丸投げしないでください。特に PR の合流先は、あなた自身が必ず `あなたのGitHubユーザー名/next-ai-camp-trial` であることを確認します。

---

## 🆘 つまずき FAQ

### Q: `git push` で認証エラーが出た

A: エラー全文を AI に見せ、「GitHub への認証で止まった。今の `origin` を変えずに、必要な認証手順を 1 つずつ案内して」と頼んでください。トークンやパスワードをチャットに貼らないでください。

### Q: PR の合流先が教材本体になっている

A: PR を作成せずに戻ります。base repository を自分の `next-ai-camp-trial` に変更できるか確認してください。自分のフォークがない場合は、先に教材本体をフォークします。

### Q: `git switch -c` で「すでに存在する」と出た

A: 同じ練習枝を前に作っています。`git switch feat/session-03-github-practice` でその枝へ移動するか、末尾を `-2` にした別の名前を使います。

### Q: マージ後に手元に変更が見えない

A: `git switch main` の後で `git pull origin main` を実行したか確認します。ブラウザの main に変更があることも先に確認してください。

---

## ✅ 合格ライン

- [ ] Git と GitHub の違いを説明できる
- [ ] `origin` が自分のフォーク、`upstream` が教材本体だと確認できた
- [ ] ブランチを作り、変更を push できた
- [ ] 自分のフォークの main に PR を作ってマージできた
- [ ] **教材を閉じて、変更を安全に main へ入れる順番と理由を説明できた**

---

## 🎓 体験版を終えたら

この 4 回で、AI と学ぶ進め方、文字で PC を扱う感覚、変更を記録・共有する流れを一通り体験しました。

本編では、この共通の道具を使いながら、画面を作る技術、データを扱う技術、世界へ届ける技術へ進みます。迷ったら、いつでも [技術地図](../../docs/tech-map.md) と自分の `knowledge/sessions/` の記録へ戻ってください。
