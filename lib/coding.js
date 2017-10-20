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
  return (registeredScript && registeredScript.code) || getDefaultCode(scriptIndex);
}

async function buildObj(code) {
  let Ctor = (await window.jspmSystem.module(code)).default;
  return new Ctor();
}

export async function registerScript(index, code) {
  try {
    const obj = await buildObj(code);
    scripts[index] = {
      code,
      obj
    };
  } catch (err) {
    alert(err);
  }
}
