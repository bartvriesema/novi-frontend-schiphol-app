const filterCategories = [
  { id: 1, filter: "J", value: true, type: "service", description: "Passenger Line" },
  { id: 2, filter: "C", value: false, type: "service", description: "Passenger Charter" },
  { id: 3, filter: "F", value: false, type: "service", description: "Freight Line" },
  { id: 4, filter: "H", value: false, type: "service", description: "Freight Charter" },

  { id: 5, filter: "S", value: false, type: "route", description: "Schengen" },
  { id: 6, filter: "E", value: false, type: "route", description: "Europe" },
  { id: 7, filter: "N", value: false, type: "route", description: "non-Europe" }
];
export default filterCategories;
