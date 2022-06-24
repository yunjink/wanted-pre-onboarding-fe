// feed 정보 가져오기
// getFeedData

const req = async (url) => {
  try {
    const res = await fetch(url);

    if (res.ok) return await res.json();
    throw new Error('api request error');
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const getFeedData = async (url) => {
  return await req(url);
};
