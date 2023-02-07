/**
 * #을 포함한 16진수 색상을 입력받아
 * HSL로 변환한 뒤
 * L 값을 배경색으로 사용할만한 명암비의 색상으로 변환하여 반환
 * @param {string} color
 *  */
function backgroundColor(color) {
  const Reg = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/;
  const result = Reg.exec(color);
  let rgb = [0, 0, 0];

  if (result[1].length === 3) {
    rgb = hexToRgb(expandHex(result[1]));
  } else if (result[1].length === 6) {
    rgb = hexToRgb(result[1]);
  }

  return hslToHex(hexToHsl(rgb));

  function hexToRgb(hex) {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return [r, g, b];
  }

  function hexToHsl([r, g, b]) {
    const avg = (r + g + b) / 3;

    r = r / 255;
    g = g / 255;
    b = b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max == min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    //배경색으로 만들기
    l = avg < 128 ? 0.97 : 0.2;
    return [h, s, l];
  }

  function hslToHex([h, s, l]) {
    let r, g, b;

    if (s == 0) {
      r = g = b = l;
    } else {
      let hue2rgb = function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      let p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    let hex = (
      (1 << 24) +
      (Math.round(r * 255) << 16) +
      (Math.round(g * 255) << 8) +
      Math.round(b * 255)
    )
      .toString(16)
      .slice(1);

    return `#${hex}`;
  }

  function expandHex(shortHex) {
    return shortHex
      .split('')
      .map((c) => c + c)
      .join('')
      .toUpperCase();
  }
}

export default backgroundColor;
