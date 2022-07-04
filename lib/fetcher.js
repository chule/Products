export default function fetcher(url) {
  return fetch(`${window.location.origin}/api${url}`).then((res) => {
    if (res.status > 399 && res.status < 200) {
      throw new Error();
    }

    return res.json();
  });
}
