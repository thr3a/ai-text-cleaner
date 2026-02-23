import { remark } from 'remark';

import { remarkRemoveBold } from './remark-plugins/removeBold.js';

export type CleanMarkdownOptions = {
  removeBold?: boolean;
};

const defaultOptions: Required<CleanMarkdownOptions> = {
  removeBold: true
};

export const cleanMarkdown = (markdown: string, options: CleanMarkdownOptions = {}): string => {
  const resolvedOptions: Required<CleanMarkdownOptions> = {
    ...defaultOptions,
    ...options
  };

  const processor = remark();

  if (resolvedOptions.removeBold) {
    processor.use(remarkRemoveBold);
  }

  const file = processor.processSync(markdown);
  return String(file);
};
