import { describe, expect, it } from 'vitest';

import { cleanMarkdown } from '../src/index.js';

describe('cleanMarkdown', () => {
  it('太字(**)をASTベースで除去する', () => {
    expect(cleanMarkdown('これは**太字**です。')).toBe('これは太字です。\n');
  });

  it('オプションで太字除去を無効化できる', () => {
    expect(cleanMarkdown('これは**太字**です。', { removeBold: false })).toBe('これは**太字**です。\n');
  });

  it('見出し/リストなど構造があっても太字だけ除去する', () => {
    const input = ['# **見出し**', '', '- **項目**', ''].join('\n');
    expect(cleanMarkdown(input)).toBe(['# 見出し', '', '- 項目', ''].join('\n'));
  });

  it('コード内の**は除去しない', () => {
    expect(cleanMarkdown('`**not bold**`')).toBe('`**not bold**`\n');
  });

  it('太字の内側に斜体があっても太字だけ外す', () => {
    expect(cleanMarkdown('**太字と*斜体***')).toBe('太字と*斜体*\n');
  });
});
