'use strict';

var userDialog = document.querySelector('.setup');
var WIZARDS_COUNT = 4;
var WIZARDS_NAMES_LIST = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARDS_SURNAMES_LIST = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLOR_LIST = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR_LIST = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomElement = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

userDialog.classList.remove('hidden');

var WizardsList = [];
var getWizardsList = function () {
  for (var i = 0; i < WIZARDS_COUNT; i++) {
    WizardsList.push({
      'name': getRandomElement(WIZARDS_NAMES_LIST) + ' ' + getRandomElement(WIZARDS_SURNAMES_LIST),
      'coatColor': getRandomElement(COAT_COLOR_LIST),
      'eyesColor': getRandomElement(EYES_COLOR_LIST)
    });
  }
};
getWizardsList(WIZARDS_COUNT);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizard = function () {
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < WizardsList.length; i++) {
    fragment.appendChild(createWizard(WizardsList[i]));
  }
  similarListElement.appendChild(fragment);
};
renderWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
