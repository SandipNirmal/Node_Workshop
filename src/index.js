import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Revealhighlight from 'reveal.js/plugin/highlight/highlight.esm.js';

let deck = new Reveal({
  plugins: [Markdown, Revealhighlight],
});

deck.initialize({
  slideNumber: 'c/t',
  // showNotes: true
});
