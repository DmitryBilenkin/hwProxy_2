export default function destruction({ special }) {
  const arrOfProperties = [];
  special.forEach((versionOfAttack) => {
    const wrapperForVersionOfAttack = [];
    if (!Object.keys(versionOfAttack).includes('description')) {
      versionOfAttack.description = 'Описание недоступно';
    }

    for (const keys in versionOfAttack) {
      if (Object.prototype.hasOwnProperty.call(versionOfAttack, keys)) {
        wrapperForVersionOfAttack.push({ [keys]: versionOfAttack[keys] });
      }
    }
    arrOfProperties.push(wrapperForVersionOfAttack);
  });

  return arrOfProperties;
}
