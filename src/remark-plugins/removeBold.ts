import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export const remarkRemoveBold = () => {
  return (tree: Root) => {
    visit(tree, 'strong', (node, index, parent) => {
      if (typeof index !== 'number') return;
      if (!parent) return;

      parent.children.splice(index, 1, ...node.children);
    });
  };
};
