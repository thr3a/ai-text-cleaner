# ai-text-cleaner

LLMが生成したMarkdown形式の文章から「AIっぽさ」を取り除くためのテキスト加工ライブラリです。

現時点では、Markdownの太字（`**...**`）をASTベースで除去します（正規表現ではなく `remark` でパースして加工）。

## 使い方

```bash
npm i ai-text-cleaner
```

```ts
import { cleanMarkdown } from "ai-text-cleaner";

const output = cleanMarkdown("これは**太字**です。");
// => "これは太字です。\n"
```

### オプション

```ts
import { cleanMarkdown } from "ai-text-cleaner";

const output = cleanMarkdown("これは**太字**です。", { removeBold: false });
// => "これは**太字**です。\n"
```

## 開発

```bash
npm test
```
