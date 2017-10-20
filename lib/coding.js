export function getDefaultCode(scriptIndex) {
  return `export default class Script${scriptIndex} {
    onClick(sceneObject, mouseEvent) {
      // Do something cool!
    }
  }`;
}
