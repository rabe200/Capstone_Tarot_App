export default function GetStatsById(id) {
  let localStorageDataStats = [];

  const statsKey = `stats.${id}`;
  const statsData = localStorage.getItem(statsKey);
  if (statsData) {
    localStorageDataStats.push(JSON.parse(statsData));
  }

  return localStorageDataStats.flat();
}
