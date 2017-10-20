const scripts = [];

export function getDefaultCode(scriptIndex) {
  return `export default class Script${scriptIndex} {
  onClick(object, mouseEvent) {
    // Do something cool!
  }
}`;
}

export function getCode(scriptIndex) {
  const registeredScript = scripts[scriptIndex];
  return registeredScript || getDefaultCode(scriptIndex);
}

export function registerScript(index, code) {
  scripts[index] = code;
}
