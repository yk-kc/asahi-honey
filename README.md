## Asahi Honey official EC

https://asahi-honey.vercel.app/

## 環境

node.js -v 18.16.0

## ブランチ運用

### 全体ルール

・マージする前には必ず他者からのレビューが必要。レビューされる前にマージしない。

### master ブランチ

・本番環境のブランチ。こちらにマージすると、本番が更新される。

### develop ブランチ

・サイト完成後、アップデートは develop ブランチに対してマージする。develop ブランチで動作確認を行い、問題がなければ master にマージする。

### feature ブランチ

・各種変更は最新の master(完成後は develop)ブランチから作成し、開発ブランチに向けてプルリクを出す。命名例は、feature-beta-component など。

### マージ後

develop もしくは master へマージされたあと、ブランチは削除する。

## アーキテクチャ

・Next.js を使用し、ポートフォリオの追加等は MicroCMS を利用する。その他の部分については直埋め込みで問題ない。コンポーネントはできる限り細分化する。車輪の再開発はしない。

## デザイン

・デザインは Figma 上で管理されている。以下リンク参照
https://www.figma.com/file/Fv84iuyxvUQabW1Vvlo30k/%E7%84%A1%E9%A1%8C?type=design&node-id=6%3A92&t=HI7kPnBt6DPwOd3n-1

## ホスティング

・本番環境にマージされたブランチの差分を検知して、ホスティングを行っている Vercel に対して更新がかかるように設計する。
※間違って master に PR を直マージしてしまうと本番へ自動的に反映されてしまうため注意と対策が必要
