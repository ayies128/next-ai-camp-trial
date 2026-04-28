import Link from "next/link";

/**
 * 🎯 ミッション 2: このページに「自分のお気に入り」を3つ表示しよう
 *
 * Claude Code にこう話しかけてみよう:
 * 「app/welcome/page.tsx の "お気に入り3つ" のリストを、
 *  私のお気に入り（例: 映画3本）に書き換えて」
 *
 * 自分のデータに書き換わるのを見ると、「自分が作ってる感」が一気に出ます 🚀
 */
export default function Welcome() {
  // ⭐ ここを Claude Code に書き換えてもらおう
  const favorites = [
    { name: "お気に入り1", reason: "理由をここに書く" },
    { name: "お気に入り2", reason: "理由をここに書く" },
    { name: "お気に入り3", reason: "理由をここに書く" },
  ];

  return (
    <main className="min-h-screen px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-zinc-500 hover:text-orange-600 dark:text-zinc-400"
        >
          ← トップに戻る
        </Link>

        <header className="mb-10">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700 dark:bg-orange-950 dark:text-orange-200">
            🎯 ミッション 2
          </p>
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            自分のデータに書き換えて、
            <br />
            「作ってる感」を体感しよう
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            下のリストはダミー。Claude Code に「自分のお気に入り（映画/本/食べ物など）に書き換えて」と頼んでみよう。
          </p>
        </header>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold">⭐ お気に入り3つ</h2>
          <ul className="grid gap-4 sm:grid-cols-3">
            {favorites.map((fav, i) => (
              <li
                key={i}
                className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-2 text-2xl">⭐</div>
                <h3 className="mb-1 font-bold">{fav.name}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{fav.reason}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12 rounded-2xl border-2 border-dashed border-orange-300 bg-orange-50 p-6 dark:border-orange-800 dark:bg-orange-950/30">
          <h2 className="mb-3 text-xl font-bold">💡 やってみるとわかること</h2>
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>✅ 配列（リスト）にデータを入れると、繰り返し表示される（map）</li>
            <li>✅ オブジェクト（{"{ name, reason }"}）でデータをまとめられる</li>
            <li>✅ Claude Code はファイルを横断的に読んで編集できる</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            ここで触れた「配列」「オブジェクト」「map」は、本編 Session 6 で詳しく学びます。
          </p>
        </section>

        <section className="rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 p-8 dark:from-orange-950/40 dark:to-amber-950/40">
          <h2 className="mb-3 text-2xl font-bold">🎓 もっと作りたくなったら</h2>
          <p className="mb-5 text-zinc-700 dark:text-zinc-300">
            体験版は Session 0〜3 まで。本編では <strong>ログイン機能つきWebアプリ</strong> を作ってインターネットに公開できます。
          </p>
          <a
            href="https://menta.work/plan/20251"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
          >
            🎓 本編プランを見る（MENTA 月5,500円〜）
          </a>
        </section>
      </div>
    </main>
  );
}
