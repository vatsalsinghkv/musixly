const locale = navigator?.language ?? 'en-US';

const requests = {
  getSearchURL(name: string) {
    return `/search?term=${name}&locale=${locale}`;
  },
  getSongDetailsURL(key: string) {
    return `/songs/get-details?key=${key}&locale=${locale}`;
  },
};

export default requests;
