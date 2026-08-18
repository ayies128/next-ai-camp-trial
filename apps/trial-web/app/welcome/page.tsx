import Link from "next/link";

const roles = [
  {
    name: "HTML",
    metaphor: "部屋の骨組み",
    description: "見出し、文章、入力欄、ボタンなど「何を置くか」を決めます。",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200",
  },
  {
    name: "CSS",
    metaphor: "部屋の内装",
    description: "色、余白、文字の大きさなど「どう見せるか」を整えます。",
    color: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200",
  },
  {
    name: "JavaScript",
    metaphor: "部屋のしかけ",
    description: "入力やクリックを受け取り、HTML の中身や CSS の見た目をどう変えるか決めます。",
    color: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200",
  },
];

export default function Welcome() {
  return (
    <main className="min-h-screen px-4 py-5 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800"
        >
          ← プレビューに戻る
        </Link>

        <header className="mt-8 rounded-[2rem] border border-stone-200 bg-white/80 px-6 py-8 shadow-sm backdrop-blur sm:px-10 sm:py-10 dark:border-stone-800 dark:bg-stone-950/70">
          <p className="text-sm font-bold tracking-[0.16em] text-orange-600 dark:text-orange-400">ABOUT THIS PREVIEW</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">今触ったものは、何だったの？</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg dark:text-stone-300">
            トップのミニページは、完成した見本です。Webページをつくる HTML・CSS・JavaScript の3つの役割を、コードを書かずに先取り体験できます。
            入力・選択・ボタンの変化を通して、画面がただの画像ではなく「反応するもの」だと感じてもらうために置いています。今は、実装のコードを読んだり、このページと同じものをつくったりする課題ではありません。
          </p>
        </header>

        <section className="mt-6 rounded-[2rem] border border-amber-200 bg-amber-50/80 p-6 sm:p-8 dark:border-amber-900/70 dark:bg-amber-950/30" aria-labelledby="scope-title">
          <p className="text-sm font-bold tracking-[0.16em] text-amber-800 dark:text-amber-200">WHERE IT FITS</p>
          <h2 id="scope-title" className="mt-2 text-2xl font-black text-amber-950 dark:text-amber-50">体験版の内容そのものではありません</h2>
          <p className="mt-3 leading-7 text-amber-950/80 dark:text-amber-100/85">
            無料の体験版は Session 0〜3。まずはプロジェクトの歩き方、ターミナル、変更を記録する Git、共有のための GitHub という共通の道具を学びます。
            このプレビューは、Session 6〜7 の課題や成果物そのものではありません。その土台の先にある「HTML・CSS・JavaScript でページをつくる」学びを、のぞいてもらうための完成見本です。
          </p>
        </section>

        <section className="mt-10" aria-labelledby="roles-title">
          <div className="mb-5">
            <p className="text-sm font-bold tracking-[0.16em] text-orange-600 dark:text-orange-400">THE THREE ROLES</p>
            <h2 id="roles-title" className="mt-1 text-2xl font-black sm:text-3xl">画面の変化を、3つに分けて見る</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {roles.map((role) => (
              <article key={role.name} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-950">
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${role.color}`}>{role.name}</span>
                <h3 className="mt-4 text-xl font-black">{role.metaphor}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-stone-900 px-6 py-8 text-white sm:px-10" aria-labelledby="next-title">
          <p className="text-sm font-bold tracking-[0.16em] text-orange-300">FROM PREVIEW TO PRACTICE</p>
          <h2 id="next-title" className="mt-2 text-2xl font-black sm:text-3xl">「見た」から「自分でつくれた」へ。</h2>
          <p className="mt-3 max-w-2xl leading-7 text-stone-300">
            プレビューを触っただけでは、まだコードを書けるようになるわけではありません。本編 Session 6 では、HTML でページの中身、CSS で見た目を小さく自分でつくります。
            続く Session 7 では、JavaScript でクリックなどにブラウザが反応するしくみも小さく自分でつくります。体験版で土台をつくり、本編で一つずつ手を動かすことで、この変化を自分で生み出せるようになります。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-stone-900 transition hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              もう一度プレビューを触る
            </Link>
            <a
              href="https://menta.work/plan/20251"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-stone-600 px-5 py-3 text-sm font-black text-white transition hover:border-stone-400 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              本編の内容を見る（MENTA）
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
