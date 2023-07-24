export default function destruction({ special }) {
  const arrOfProperties = [];
  special.forEach((versionOfAttack) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = versionOfAttack;
    arrOfProperties.push({ id }, { name }, { icon }, { description });
  });

  return arrOfProperties;
}
