import { visit } from 'unist-util-visit';

type NodeWithChildren = {
  children: unknown[];
};

const hasChildren = (value: unknown): value is NodeWithChildren => {
  if (typeof value !== 'object' || value === null) return false;
  if (!('children' in value)) return false;
  return Array.isArray(value.children);
};

export const remarkRemoveBold = () => {
  return (tree: { type: string }) => {
    visit(tree, 'strong', (node, index, parent) => {
      if (typeof index !== 'number') return;
      if (!hasChildren(parent)) return;
      if (!hasChildren(node)) return;

      parent.children.splice(index, 1, ...node.children);
    });
  };
};
