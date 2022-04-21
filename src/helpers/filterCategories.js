const filterCategories = [
  {
    key: "filterActive",
    value: false,
    type: "default",
    description: "Standaard",
  },
  { key: "J", value: true, type: "service", description: "Passenger Line" },
  { key: "C", value: false, type: "service", description: "Passenger Charter" },
  { key: "F", value: false, type: "service", description: "Freight Line" },
  { key: "H", value: false, type: "service", description: "Freight Charter" },

  { key: "S", value: false, type: "route", description: "Schengen" },
  { key: "E", value: false, type: "route", description: "Europe" },
  { key: "N", value: false, type: "route", description: "non-Europe" },
];
export default filterCategories;
