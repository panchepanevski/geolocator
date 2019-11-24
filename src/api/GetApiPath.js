export default async function GetApiPath(query) {
  const response = await fetch(`http://ip-api.com/json/${query}`);
  const data = await response.json();
  return data;
}
