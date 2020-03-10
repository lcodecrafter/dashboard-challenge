import React from "react";

export const generateGraphBars = bars => {
  return bars.map((b, index) => {
    const randomKey = b + index + Math.random(); // Use the index is not a good practise but in this case its fairly safe taking into account that its added 2 more variables
    return (
      <div key={randomKey} className="graph-bar">
        <div key={randomKey + 2} style={{ height: `${b}%` }} className="bar" />
      </div>
    );
  });
};

export const generateGraphLettters = letters => {
  return letters.map(l => (
    <div key={l + Math.random()} className="graph-legend">
      {l}
    </div>
  ));
};

export const canvasHandler = (graph, background, progress) => {
  const container = graph; // get canvas

  const options = {
    percent: container.getAttribute("data-percent") || 25,
    size: container.getAttribute("data-size") || 120,
    lineWidth: container.getAttribute("data-line") || 12,
    rotate: container.getAttribute("data-rotate") || 0
  };

  const radius = (options.size - options.lineWidth) / 2;

  const canvas = document.createElement("canvas");
  canvas.width = options.size;
  canvas.height = options.size;
  const ctx = canvas.getContext("2d");

  const drawCircle = (color, lineWidth, percent) => {
    const newPercent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * newPercent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = "round"; // butt, round or square
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  container.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  drawCircle(background, options.lineWidth, 100 / 100);
  drawCircle(progress, options.lineWidth, options.percent / 100);
};
