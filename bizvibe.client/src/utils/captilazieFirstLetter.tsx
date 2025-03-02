// Helper function to capitalize the first letter of a string
export const capitalizeFirstLetter = (str: string | undefined): string => {
  if (!str) return "";
  str = str.toLowerCase();
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
