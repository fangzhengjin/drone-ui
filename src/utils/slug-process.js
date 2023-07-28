// 将除了最后一个的/都替换为%2F
export default function slugEncode(slug) {
  const arr = slug.split('/');
  const last = arr.pop();
  return arr.join('%2F').concat(`/${last}`);
}
