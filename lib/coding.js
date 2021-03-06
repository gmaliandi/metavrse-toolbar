import ls from 'local-storage';
import defaultScript from './defaultScript.js.raw';

const scripts = [];

export const validEventNames = {
  CLICK: 'onClick',
  HOVER: 'onHover',
  HOVER_END: 'onHoverEnd'
};

async function buildObj(code) {
  let Ctor = (await window.jspmSystem.module(code)).default;
  return new Ctor();
}

export function getDefaultCode(scriptIndex) {
  return defaultScript.replace('%SCRIPT_INDEX%', scriptIndex);
}

export function getCode(scriptIndex) {
  const registeredScript = scripts[scriptIndex];
  return (registeredScript && registeredScript.code) || getDefaultCode(scriptIndex);
}

export function hasCode(scriptIndex) {
  return !!scripts[scriptIndex];
}

export async function loadFromLocalStorage() {
  const storedScripts = ls('scripts') || [getDefaultCode(0)];

  for (let i = 0; i < storedScripts.length; i++) {
    const script = storedScripts[i];
    if (!script) {
      continue;
    }

    await registerScript(i, script);
  }
}

export function handleEvent(index, eventName, payload) {
  const script = scripts[index];
  if (!script) {
    return;
  }

  const handler = script.obj[eventName];
  if (!handler) {
    return;
  }
  const boundHandler = handler.bind(script.obj);

  const {obj, e} = payload;
  boundHandler(obj, e);
}

export async function registerScript(index, code) {
  try {
    const obj = await buildObj(code);
    scripts[index] = {
      code,
      obj
    };
    ls('scripts', scripts.map(script => script.code));
  } catch (err) {
    alert(err);
  }
}

export function getItemText(index) {
  const script = scripts[index];
  if (!script) {
    return '';
  }

  const {obj} = script;
  return obj.text;
}
