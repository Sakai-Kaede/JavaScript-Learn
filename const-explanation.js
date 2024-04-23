const data1 = ['JavaScript', 'Python', 'PHP'];
// エラーにならない
data1[0] = 'TypeScript';

const num = 10;
// 再代入でエラーになる
num = 20;

const data2 = ['Vue.js', 'Django', 'Laravel'];

// アドレスの再代入でエラーになる
data1 = data2;