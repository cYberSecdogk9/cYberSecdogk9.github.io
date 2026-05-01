const phrases = [
  "Welkom op mijn security blog.",
  "Ik bedoel website ;)"
];

let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');
if (el) {
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      el.innerHTML = phrase.slice(0, ci + 1) + '<span class="tw-cursor">|</span>';
      ci++;
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.innerHTML = phrase.slice(0, ci - 1) + '<span class="tw-cursor">|</span>';
      ci--;
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(type, deleting ? 40 : 80);
  }
  type();
}
