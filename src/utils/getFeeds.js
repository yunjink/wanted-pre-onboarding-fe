// feed 정보 가져오기
// getFeeds

export async function getFeeds() {
  try {
    const data = await fetch('./data/feeds.json');
    return await data.json();
  } catch (err) {
    console.error(err);
  }
}
