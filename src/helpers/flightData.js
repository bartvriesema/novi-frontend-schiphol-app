import axios from "axios";

async function getFlightData(flightDataUrl) {
  const response = await getData(flightDataUrl);
  const flights = response.flights;
  const nextPageUrl = getNextPageUrl(getLinks(response.link));

  if (nextPageUrl) {
    return flights.concat(await getFlightData(nextPageUrl));
  } else {
    return flights;
  }
}

async function getData(url) {
  try {
    const result = await axios.get(url);
    return result.data;
  } catch (e) {
    console.error(e);
    return e.message;
  }
}

function getLinks(linkInformation) {
  const pagination = [];
  const links = linkInformation.split(",");

  links.forEach((pageLink) => {
    const linkElement = pageLink.split(";");
    const url = linkElement[0]
      .replace(/[\s<>]/g, "")
      .replace(
        "https://api.schiphol.nl:443/public-flights/",
        "http://localhost:5000/schiphol/"
      );
    const pageType = linkElement[1].slice(
      linkElement[1].indexOf('"') + 1,
      linkElement[1].lastIndexOf('"')
    );
    pagination.push({ type: pageType, url: url });
  });

  return pagination;
}

function getNextPageUrl(allLinks) {
  const nextPageUrl = allLinks.find((key) => key.type === "next");

  if (nextPageUrl) {
    return nextPageUrl.url;
  } else {
    const lastPageUrl = allLinks.find((key) => key.type === "last");
    if (lastPageUrl) {
      return lastPageUrl.url;
    } else {
      return null;
    }
  }
}

export default getFlightData;
