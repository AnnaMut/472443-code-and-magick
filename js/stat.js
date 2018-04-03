'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';
var GAP = 10;
var TEXT_STYLE = '16px PT Mono';
var CLOUD_COLOR = '#fff';
var TEXT_COLOR = '#000';
var VIVA_TEXT = 'Ура вы победили!';
var POIN_LIST_TEXT = 'Список результатов:';
var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var SELF_BAR_COLOR = 'rgba(255, 0, 0, 1)';
var OTHER_USER_BAR_COLOR = '0, 0, 255';
var NAMES_ARE_YOU = 'Вы';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW_COLOR);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

  ctx.fillStyle = TEXT_COLOR;
  var maxTime = getMaxElement(times);
  ctx.fontSlyle = TEXT_STYLE;
  ctx.fillText(VIVA_TEXT, CLOUD_X + GAP, (CLOUD_Y + GAP) * 2);
  ctx.fillText(POIN_LIST_TEXT, CLOUD_X + GAP, (CLOUD_Y + GAP) * 3);

  for (var i = 0; i < names.length; i++) {
    ctx.fontSlyle = TEXT_STYLE;
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + BAR_HEIGHT + BAR_GAP + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime));

    var colorBar = (names[i] === NAMES_ARE_YOU) ? SELF_BAR_COLOR : 'rgba(' + OTHER_USER_BAR_COLOR + ',' + (Math.random() * 0.8 + 0.2) + ')';
    ctx.fillStyle = colorBar;
    ctx.fillRect(CLOUD_X + BAR_GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_Y + BAR_HEIGHT + BAR_GAP + GAP + GAP + GAP - (BAR_HEIGHT * times[i] / maxTime), BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + ((BAR_WIDTH + BAR_GAP) * i), CLOUD_HEIGHT - GAP);
  }
};

