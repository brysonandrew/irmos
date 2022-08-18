export const resolveCategoryMap = (
  results: any[]
) => {
  if (Array.isArray(results)) {
    return results.reduce((a, c) => {
      a[c.name] = c.categories;
      return a;
    }, {});
  } else {
    return {};
  }
};
