var defaultName = "Vahig";

function setName(name) { chrome.storage.sync.set({ "key": name }, function () {}); }

function setLanguage(lang) { chrome.storage.sync.set({ "language": lang }, function () {}); }

function setYear(year) { chrome.storage.sync.set({ "year": year }, function () {}); }

function setDisplaySeconds(sec) { chrome.storage.sync.set({ "seconds": sec }, function () {}); }

function setSolidBackground(sol) { chrome.storage.sync.set({ "solidbackground": sol }, function () {}); }