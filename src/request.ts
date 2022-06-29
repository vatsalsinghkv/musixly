const requests = {
  search(name: string) {
    return `/search?term=${name}`;
  },
  song(id: string) {
    return `/search?id=${id}`;
  },
};

export default requests;
