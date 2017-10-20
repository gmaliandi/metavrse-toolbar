import ls from 'local-storage';

const scripts = [];

export const validEventNames = {
  CLICK: 'onClick'
};

async function buildObj(code) {
  let Ctor = (await window.jspmSystem.module(code)).default;
  return new Ctor();
}

export function getDefaultCode(scriptIndex) {
  return `export default class Script${scriptIndex} {
  onClick(object, mouseEvent) {
    // Do something cool!
  }
}`;
}

export function getCode(scriptIndex) {
  const registeredScript = scripts[scriptIndex];
  return (registeredScript && registeredScript.code) || getDefaultCode(scriptIndex);
}

export function hasCode(scriptIndex) {
  return !!scripts[scriptIndex];
}

export async function loadFromLocalStorage() {
  const storedScripts = ls('scripts');
  if (!storedScripts) {
    return;
  }

  for (let i = 0; i < storedScripts.length; i++) {
    const script = storedScripts[i];
    if (!script) {
      continue;
    }

    // TODO run this in parallel maybe?
    await registerScript(i, script);
  }
}

export function handleEvent(index, eventName, payload) {
  const script = scripts[index];
  if (!script) {
    return;
  }

  const handler = script.obj[eventName];
  const {obj, e} = payload;
  handler(obj, e);
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
