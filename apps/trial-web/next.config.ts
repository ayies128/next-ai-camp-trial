import type { NextConfig } from "next";

// 体験版の学習ルールはリポジトリ直下の AGENTS.md が正本。
// Next.js がアプリ配下へ別の AGENTS.md を自動生成すると、学習者向けのルールが分断される。
const nextConfig: NextConfig = {
  agentRules: false,
};

export default nextConfig;
