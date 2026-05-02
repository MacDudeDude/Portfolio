const cursorFrames = {
  default: {
    frame1: "url('Images/Cursors/Cursor_Default_1.png') 8 8, auto",
    frame2: "url('Images/Cursors/Cursor_Default_2.png') 8 8, auto",
  },
  pointer: {
    frame1: "url('Images/Cursors/Cursor_Hover_1.png') 8 8, pointer",
    frame2: "url('Images/Cursors/Cursor_Hover_2.png') 8 8, pointer",
  },
  text: {
    frame1: "url('Images/Cursors/Cursor_Text_Hover_1.png') 8 8, text",
    frame2: "url('Images/Cursors/Cursor_Text_Hover_2.png') 8 8, text",
  },
};

function detectCursorContext(element) {
  if (element.closest('a, button, input[type="button"], input[type="submit"], input[type="image"], [role="button"], [role="link"], [onclick]')) {
    return 'pointer';
  }

  if (element.closest('label, textarea, input[type="text"], input[type="email"], input[type="password"], input[type="search"], input[type="url"], input[type="tel"], [contenteditable="true"], p, span, h1, h2, h3, h4, h5, h6')) {
    return 'text';
  }

  return 'default';
}

function setCursorFrames(context = 'default') {
  const frames = cursorFrames[context] || cursorFrames.default;
  document.documentElement.style.setProperty('--cursor-frame-1', frames.frame1);
  document.documentElement.style.setProperty('--cursor-frame-2', frames.frame2);
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
