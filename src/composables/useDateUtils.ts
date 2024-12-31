export const useCurrentAge = (birthDateStr: string): number => {
  const birthDate = new Date(birthDateStr);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  const isBeforeBirthday =
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate());

  if (isBeforeBirthday) {
    age--;
  }

  return age;
};
