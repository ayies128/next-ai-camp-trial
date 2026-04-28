import Link from "next/link";

/**
 * 🎓 AIブートキャンプ 体験版へようこそ！
 *
 * このページは「あなたが最初に編集する画面」です。
 * Claude Code に「app/page.tsx の見出しを自分の名前に変えて」と話しかけて、
 * ファイルが書き換わる体験をしてみましょう。
 *
 * ─────────── 最初のミッション ───────────
 * 🎯 1. 35行目の "プログラミング完全未経験" を、自分のプログラミング経験に書き換える
 * 🎯 2. 41行目の絵文字を好きなものに変える
 * 🎯 3. 保存（Cmd+S）して、ブラウザで自動更新されるのを確認する
 * ─────────────────────────────────────
 */
export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Hero */}
        <header className="mb-12 text-center sm:text-left">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700 dark:bg-orange-950 dark:text-orange-200">
            🎓 AIブートキャンプ 体験版
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            ようこそ！
            <br />
            <span className="text-orange-600 dark:text-orange-400">プログラミング</span>
            と
            <span className="text-orange-600 dark:text-orange-400"> AI協働スキル</span>
            を
            <br />
            同時に学ぼう。
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            このページが見えていれば、最初のセットアップは成功です 🎉
            <br />
            次は <strong>Claude Code に話しかけて、このページを書き換えてみましょう。</strong>
            <br />
            <span className="text-sm text-zinc-500">
              ※ ここで身につく「AIへの指示の出し方」は、プログラミング以外の仕事にも一生使えます。
            </span>
          </p>
        </header>

        {/* First Mission */}
        <section className="mb-12 rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950/30">
          <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
            🎯 最初のミッション（5分）
          </h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            ターミナルで <code className="rounded bg-zinc-200 px-2 py-0.5 font-mono text-sm dark:bg-zinc-800">claude</code> と入力して Claude Code を起動し、こう話しかけてみよう：
          </p>
          <pre className="mb-4 overflow-x-auto rounded-lg bg-zinc-900 p-4 text-sm text-zinc-100">
            <code>{`apps/trial-web/app/page.tsx の見出しに
書いてある「プログラミング完全未経験」を、
私の状況に合わせて書き換えて。
私は ___ という状況です。`}</code>
          </pre>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            ✅ ファイルを保存（Cmd+S）するとブラウザが自動で更新されます。<br />
            ✅ うまくいかなかったら、その内容ごと Claude Code に貼り付けて聞いてOK。
          </p>
        </section>

        {/* Sessions */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">📚 体験版で学べること（Session 0〜3）</h2>
          <ul className="space-y-3">
            {[
              { num: "0", title: "プロジェクトの歩き方", desc: "ツールのセットアップ、学習の進め方", time: "30分" },
              { num: "1", title: "Git ってなに？", desc: "ファイルの変更を記録するセーブポイント", time: "30分" },
              { num: "2", title: "GitHub を使ってみよう", desc: "ブランチとPR、チーム開発の基本", time: "45分" },
              { num: "3", title: "Web の世界を知ろう", desc: "HTML/CSS/JavaScript の役割と開発者ツール", time: "60分" },
            ].map((s) => (
              <li
                key={s.num}
                className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-orange-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-800"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 font-mono text-lg font-bold text-orange-700 dark:bg-orange-950 dark:text-orange-200">
                  {s.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-bold">{s.title}</h3>
                    <span className="text-xs text-zinc-500 dark:text-zinc-500">⏱️ {s.time}</span>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{s.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Next Step */}
        <section className="mb-12 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 dark:from-orange-950/40 dark:to-amber-950/40">
          <h2 className="mb-3 text-2xl font-bold">🚀 体験版を終えたら？</h2>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            全20セッションの本編で、<strong>あなたが作ったWebアプリをインターネットに公開</strong>できます。
            ログイン機能・データベース連携まで、Claude Code と一緒に作り切れます。
          </p>
          <Link
            href="/welcome"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
          >
            次のページへ →
          </Link>
        </section>

        {/* Footer Links */}
        <footer className="border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
          <p className="mb-2">📖 詳しい使い方は README.md / docs/ を参照</p>
          <p>
            🎓 本編プラン：{" "}
            <a
              href="https://menta.work/plan/20251"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-orange-600 underline hover:text-orange-700 dark:text-orange-400"
            >
              MENTA で月額5,500円〜
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
