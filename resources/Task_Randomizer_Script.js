
// Randomize task list items on page load
document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('taskList');
  if (taskList) {
    const items = Array.from(taskList.children);
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    items.forEach(item => taskList.appendChild(item));
  }
});
