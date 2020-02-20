import React from "react";

export const generateGraphBars = bars => {
  return bars.map((b, index) => (
    <div key={b + index + Math.random()} className="graph-bar">
      <div
        key={b + index + Math.random()}
        style={{ height: `${b}%` }}
        className="bar"
      ></div>
    </div>
  ));
};

export const generateGraphLettters = letters => {
  return letters.map((l, index) => (
    <div key={l + index + Math.random()} className="graph-legend">
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

  let canvas = document.createElement("canvas");
  canvas.width = options.size;
  canvas.height = options.size;
  let ctx = canvas.getContext("2d");

  const drawCircle = function(color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
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
