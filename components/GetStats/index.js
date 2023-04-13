export default function GetStats() {
  let localStorageDataStats = [];
  for (let i = 0; i < 78; i++) {
    const statsKey = `stats.${i}`;
    const statsData = localStorage.getItem(statsKey);
    if (statsData) {
      localStorageDataStats.push(JSON.parse(statsData));
    }
  }
  return localStorageDataStats.flat();
}
