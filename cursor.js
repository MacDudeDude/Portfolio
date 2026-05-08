const cursorFrames = {
  default: {
    frame1: "url('Graphics/Cursors/Cursor_Default_1.png') 8 8, auto",
    frame2: "url('Graphics/Cursors/Cursor_Default_2.png') 8 8, auto",
  },
  pointer: {
    frame1: "url('Graphics/Cursors/Cursor_Hover_1.png') 8 8, pointer",
    frame2: "url('Graphics/Cursors/Cursor_Hover_2.png') 8 8, pointer",
  },
  text: {
    frame1: "url('Graphics/Cursors/Cursor_Text_Hover_1.png') 8 8, text",
    frame2: "url('Graphics/Cursors/Cursor_Text_Hover_2.png') 8 8, text",
  },
};

let currentContext = "default";
let currentFrame = 1;

function applyCursorFrame() {
  const frames = cursorFrames[currentContext] || cursorFrames.default;

  document.documentElement.style.cursor =
    currentFrame === 1 ? frames.frame1 : frames.frame2;

  currentFrame = currentFrame === 1 ? 2 : 1;
}

function setCursorFrames(context = "default") {
  currentContext = context;
  applyCursorFrame();
}

setInterval(applyCursorFrame, 100);

applyCursorFrame();

function detectCursorContext(element) {
  if (element.closest('a, button, input[type="button"], input[type="submit"], input[type="image"], [role="button"], [role="link"], [onclick]')) {
    return 'pointer';
  }

  if (element.closest('label, textarea, input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], [contenteditable="true"], p, span, h1, h2, h3, h4, h5, h6, p1')) {
    return 'text';
  }

  return 'default';
}

function initCursorSystem() {
  setCursorFrames('default');
  document.addEventListener('mouseover', (event) => {
    const context = detectCursorContext(event.target);
    setCursorFrames(context);
  });

  document.addEventListener('mouseout', (event) => {
    setCursorFrames('default');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initCursorSystem();
});
