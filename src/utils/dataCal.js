import sampleData from "../data/sampleData.json";

export const genderDataCalculator = () => {
  const data = sampleData.results;
  const values = data.reduce(
    (acc, curVal) => {
      if (curVal.gender === "male") {
        acc.male++;
      } else {
        acc.female++;
      }
      return acc;
    },
    { male: 0, female: 0 }
  );
  const data1 = [];
  for (const key in values) {
    data1.push({ name: key, value: values[key] });
  }

  return data1;
};

export const natDataCalculator = () => {
  const data = sampleData.results;
  const values = data.reduce(
    (acc, curVal) => {
      if (curVal.nat === "US") {
        acc.US++;
      } else if (curVal.nat === "RS") {
        acc.RS++;
      } else if (curVal.nat === "AU") {
        acc.AU++;
      } else {
        acc.FR++;
      }
      return acc;
    },
    { US: 0, RS: 0, AU: 0, FR: 0 }
  );
  const data1 = [];
  for (const key in values) {
    data1.push({ name: key, value: values[key] });
  }

  return data1;
};
