
// Example: Toggle visibility of peer annotations
function togglePeerAnnotations(visible) {
  const elements = document.querySelectorAll('.peer-annotation');
  elements.forEach(el => {
    el.style.display = visible ? 'block' : 'none';
  });
}
