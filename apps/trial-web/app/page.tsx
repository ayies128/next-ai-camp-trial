"use client";

import Link from "next/link";
import { useState } from "react";

const goals = [
  "自分を紹介するページをつくる",
  "好きなものを紹介するページをつくる",
  "頭の中のアイデアを形にする",
];

const themeOptions = [
  {
    id: "sunrise",
    name: "あたたかい朝",
    dotClass: "bg-orange-400",
    surfaceClass:
      "from-orange-100 via-amber-50 to-white dark:from-orange-950 dark:via-stone-900 dark:to-stone-950",
    accentClass: "bg-orange-600",
    accentTextClass: "text-orange-700 dark:text-orange-300",
  },
  {
    id: "ocean",
    name: "静かな海",
    dotClass: "bg-sky-500",
    surfaceClass:
      "from-sky-100 via-cyan-50 to-white dark:from-sky-950 dark:via-slate-900 dark:to-slate-950",
    accentClass: "bg-sky-600",
    accentTextClass: "text-sky-700 dark:text-sky-300",
  },
  {
    id: "garden",
    name: "みどりの庭",
    dotClass: "bg-emerald-500",
    surfaceClass:
      "from-emerald-100 via-lime-50 to-white dark:from-emerald-950 dark:via-stone-900 dark:to-stone-950",
    accentClass: "bg-emerald-600",
    accentTextClass: "text-emerald-700 dark:text-emerald-300",
  },
] as const;

type ThemeId = (typeof themeOptions)[number]["id"];

export default function Home() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState<string>(goals[0]);
  const [theme, setTheme] = useState<ThemeId>(themeOptions[0].id);
  const [cheerCount, setCheerCount] = useState(0);

  const displayName = name.trim() || "あなた";
  const activeTheme = themeOptions.find((option) => option.id === theme) ?? themeOptions[0];

  function resetPreview() {
    setName("");
    setGoal(goals[0]);
    setTheme(themeOptions[0].id);
    setCheerCount(0);
  }

  return (
    <main className="min-h-screen px-4 py-5 sm:px-8 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 rounded-[2rem] border border-stone-200/80 bg-white/80 px-6 py-8 shadow-sm backdrop-blur sm:px-10 sm:py-10 dark:border-stone-800 dark:bg-stone-950/70">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-sm font-bold text-orange-800 dark:bg-orange-950/70 dark:text-orange-200">
              <span aria-hidden="true">✦</span>
              AIブートキャンプ 体験版
            </p>
            <p className="text-sm font-medium text-stone-500 dark:text-stone-400">インストール不要・60秒プレビュー</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-stone-900 sm:text-5xl lg:text-6xl dark:text-stone-50">
                触るとわかる。
                <br />
                <span className="text-orange-600 dark:text-orange-400">画面は、こうして動く。</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg dark:text-stone-300">
                名前を入れる、目的を選ぶ、色を変える、ボタンを押す。
                下の小さなページが、あなたの操作に合わせてすぐ変わります。
              </p>
            </div>

            <aside className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-sm leading-6 text-amber-950 dark:border-amber-900/70 dark:bg-amber-950/30 dark:text-amber-100">
              <p className="font-bold">これは本編の先取りデモです</p>
              <p className="mt-1">
                体験版の Session 0〜3 は、プロジェクトの歩き方・ターミナル・Git・GitHub という共通の道具をそろえる準備の時間。
                このプレビューは、その先の本編 Session 6〜7 でつくる HTML／CSS／JavaScript の成果物を先に触れるものです。
              </p>
            </aside>
          </div>
        </header>

        <section aria-labelledby="preview-title" className="mb-10">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 px-1">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-orange-600 dark:text-orange-400">LIVE MINI PAGE</p>
              <h2 id="preview-title" className="mt-1 text-2xl font-black tracking-tight sm:text-3xl">
                3つの役割を、手で確かめよう
              </h2>
            </div>
            <button
              type="button"
              onClick={resetPreview}
              className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-bold text-stone-700 transition hover:border-stone-400 hover:bg-stone-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200 dark:hover:bg-stone-800"
            >
              はじめから試す
            </button>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm sm:p-7 dark:border-stone-800 dark:bg-stone-950">
              <ol className="space-y-6">
                <li>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700 dark:bg-orange-950 dark:text-orange-200">1</span>
                    <div>
                      <h3 className="font-black">HTML = ページの骨組み</h3>
                      <p className="text-sm text-stone-500 dark:text-stone-400">表示する言葉や、部品の役割を決めます。</p>
                    </div>
                  </div>
                  <label className="block">
                    <span className="sr-only">プレビューに表示する名前</span>
                    <input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="名前を入れてみる"
                      className="w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-medium text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50 dark:focus:border-orange-400 dark:focus:ring-orange-950"
                    />
                  </label>
                  <p className="mt-2 text-xs leading-5 text-stone-500 dark:text-stone-400">
                    入力した名前が、右の見出しに現れます。
                  </p>
                </li>

                <li className="border-t border-stone-100 pt-6 dark:border-stone-800">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-sky-700 dark:bg-sky-950 dark:text-sky-200">2</span>
                    <div>
                      <h3 className="font-black">CSS = 見た目</h3>
                      <p className="text-sm text-stone-500 dark:text-stone-400">色、余白、文字の大きさを整えます。</p>
                    </div>
                  </div>
                  <fieldset>
                    <legend className="sr-only">ページの雰囲気を選ぶ</legend>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {themeOptions.map((option) => {
                        const isSelected = theme === option.id;

                        return (
                          <button
                            key={option.id}
                            type="button"
                            onClick={() => setTheme(option.id)}
                            aria-pressed={isSelected}
                            className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-bold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 ${
                              isSelected
                                ? "border-stone-900 bg-stone-900 text-white dark:border-stone-100 dark:bg-stone-100 dark:text-stone-950"
                                : "border-stone-200 bg-white text-stone-700 hover:border-stone-400 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-200"
                            }`}
                          >
                            <span className={`h-3 w-3 rounded-full ${option.dotClass}`} aria-hidden="true" />
                            {option.name}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                  <p className="mt-2 text-xs leading-5 text-stone-500 dark:text-stone-400">
                    選んだ雰囲気が、右の背景とアクセントカラーに反映されます。
                  </p>
                </li>

                <li className="border-t border-stone-100 pt-6 dark:border-stone-800">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-sm font-black text-violet-700 dark:bg-violet-950 dark:text-violet-200">3</span>
                    <div>
                      <h3 className="font-black">JavaScript = 反応</h3>
                      <p className="text-sm text-stone-500 dark:text-stone-400">選択やボタンに、変化をつけます。</p>
                    </div>
                  </div>
                  <label className="block text-sm font-bold text-stone-700 dark:text-stone-200">
                    いま形にしたいこと
                    <select
                      value={goal}
                      onChange={(event) => setGoal(event.target.value)}
                      className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-base font-medium text-stone-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-50 dark:focus:border-violet-400 dark:focus:ring-violet-950"
                    >
                      {goals.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </label>
                  <p className="mt-2 text-xs leading-5 text-stone-500 dark:text-stone-400">
                    選択内容と、右の「いいね！」ボタンの数がすぐ変わります。
                  </p>
                </li>
              </ol>
            </div>

            <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br p-5 shadow-sm sm:p-8 ${activeTheme.surfaceClass}`}>
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/60 blur-2xl dark:bg-white/10" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-white/50 blur-3xl dark:bg-white/5" />

              <div className="relative flex h-full min-h-[520px] flex-col rounded-[1.5rem] border border-white/80 bg-white/80 p-6 shadow-xl backdrop-blur sm:p-8 dark:border-white/10 dark:bg-stone-950/75">
                <div className="mb-auto">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-stone-900 text-2xl shadow-sm dark:bg-stone-50" aria-hidden="true">
                      <span className="dark:invert">✦</span>
                    </div>
                    <p className={`rounded-full bg-white/80 px-3 py-1.5 text-xs font-black shadow-sm dark:bg-stone-900/80 ${activeTheme.accentTextClass}`}>
                      {activeTheme.name}
                    </p>
                  </div>

                  <p className="mt-10 text-sm font-bold tracking-[0.15em] text-stone-500 dark:text-stone-400">MY FIRST PAGE</p>
                  <h3 className="mt-2 text-4xl font-black tracking-[-0.04em] text-stone-900 sm:text-5xl dark:text-white">
                    {displayName}の
                    <br />
                    はじめの一歩。
                  </h3>
                  <p className="mt-5 max-w-sm text-base leading-7 text-stone-600 dark:text-stone-300">
                    今日は「<span className="font-bold text-stone-900 dark:text-stone-50">{goal}</span>」を目標に、
                    小さく手を動かしてみる。
                  </p>
                </div>

                <div className="mt-10 rounded-2xl border border-stone-200/80 bg-white/70 p-4 dark:border-stone-700/80 dark:bg-stone-900/70">
                  <p className="text-sm font-bold text-stone-700 dark:text-stone-200">この一歩を応援する</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCheerCount((count) => count + 1)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-black text-white shadow-sm transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 dark:focus-visible:outline-stone-100 ${activeTheme.accentClass}`}
                    >
                      いいね！
                    </button>
                    <output aria-live="polite" className="text-sm font-bold text-stone-600 dark:text-stone-300">
                      {cheerCount === 0 ? "まだ0人。最初のひと押しをどうぞ。" : `${cheerCount}人が応援中！`}
                    </output>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold">
                  <div className="rounded-xl bg-white/70 px-2 py-3 text-stone-700 dark:bg-stone-900/70 dark:text-stone-200">文字を決める</div>
                  <div className="rounded-xl bg-white/70 px-2 py-3 text-stone-700 dark:bg-stone-900/70 dark:text-stone-200">見た目を整える</div>
                  <div className="rounded-xl bg-white/70 px-2 py-3 text-stone-700 dark:bg-stone-900/70 dark:text-stone-200">反応をつける</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-3" aria-label="プレビューで確かめたこと">
          {[
            { label: "HTML", title: "何を置く？", text: "見出し、文章、入力欄、ボタン。ページに必要な部品を組み立てます。", color: "bg-orange-100 text-orange-800 dark:bg-orange-950 dark:text-orange-200" },
            { label: "CSS", title: "どう見せる？", text: "色、余白、角の丸さ、文字の大きさ。読みやすく、らしく整えます。", color: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-200" },
            { label: "JavaScript", title: "どう反応する？", text: "入力・選択・クリックを受け取り、画面の内容を変化させます。", color: "bg-violet-100 text-violet-800 dark:bg-violet-950 dark:text-violet-200" },
          ].map((item) => (
            <article key={item.label} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm dark:border-stone-800 dark:bg-stone-950">
              <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-black ${item.color}`}>{item.label}</span>
              <h3 className="mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 dark:text-stone-300">{item.text}</p>
            </article>
          ))}
        </section>

        <section className="mb-10 rounded-[2rem] border border-stone-200 bg-stone-900 px-6 py-8 text-white sm:px-10 dark:border-stone-700">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-bold tracking-[0.16em] text-orange-300">NEXT, NOT YET</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">体験版は、ここをつくるための土台から始めます。</h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-300">
                Session 0〜3 では、プロジェクトの歩き方、ターミナル、Git、GitHub という共通の道具を学びます。
                この画面のようなページを自分の手でつくるのは、その次の本編です。
              </p>
            </div>
            <Link
              href="/welcome"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-stone-900 transition hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              プレビューの読み方を見る →
            </Link>
          </div>
        </section>

        <footer className="pb-4 text-center text-sm text-stone-500 dark:text-stone-400">
          <a
            href="https://menta.work/plan/20251"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-orange-700 underline decoration-orange-300 underline-offset-4 hover:text-orange-800 dark:text-orange-300 dark:hover:text-orange-200"
          >
            本編の学習内容を見る（MENTA）
          </a>
        </footer>
      </div>
    </main>
  );
}
