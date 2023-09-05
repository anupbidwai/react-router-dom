export function navActiveState({ isActive, isPending }) {
  return {
    color: isActive ? "blue" : "#000000",
    marginRight: 10
  };
}
