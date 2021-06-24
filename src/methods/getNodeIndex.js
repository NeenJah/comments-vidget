
export function getNodeIndex(node) {
  return Array.from(node.parentNode.children).indexOf(node);
}