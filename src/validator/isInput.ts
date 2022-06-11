export type Input = {
  text: string;
};

export const isInput = ({ text = '' }: Input) => {
  if (text.length === 0) return false;

  return true;
};
