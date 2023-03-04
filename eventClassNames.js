export default function eventClassNames(node, event, className) {
  switch (event) {
    case "add":
      node.classList.add(className);
      break;
    case "remove":
      node.classList.remove(className);
      break;
    case "toggle":
      node.classList.toggle(className);
      break;
    case "replace":
      node.classList.replace(className[0], className[1]);
      break;
    default:
      break;
  }
}