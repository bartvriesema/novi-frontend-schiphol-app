const filterCategories = [
    {filter: "J", value: true, type: "service", description: "Passenger Line"},
    {filter: "C", value: false, type: "service", description: "Passenger Charter"},
    {filter: "F", value: false, type: "service", description: "Freight Line"},
    {filter: "H", value: false, type: "service", description: "Freight Charter"},

    {filter: "S", value: false, type: "route", description: "Schengen"},
    {filter: "E", value: false, type: "route", description: "Europe"},
    {filter: "N", value: false, type: "route", description: "non-Europe"},
];
export default filterCategories;
