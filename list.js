window.addEventListener('load', () => {
// templete 要素の content 属性の有無を確認することで、
// ブラウザーが HTML template 要素に対応しているかテストします。
if ('content' in document.createElement('template')) {

  // 既存の HTML tbody と template の行を使って
  // table をインスタンス生成します。
  var tbody = document.querySelector("tbody");
  var template = document.querySelector('#productrow');

  // 新しい行を複製して表に挿入します。
  var clone = template.content.cloneNode(true);
  var td = clone.querySelectorAll("td");
  td[0].textContent = "1235646565";
  td[1].textContent = "Stuff";

  tbody.appendChild(clone);

  // 新しい行を複製して表に挿入します。
  var clone2 = template.content.cloneNode(true);
  td = clone2.querySelectorAll("td");
  td[0].textContent = "0384928528";
  td[1].textContent = "Acme Kidney Beans 2";

  tbody.appendChild(clone2);

} else {
// HTML template 要素に対応していないので
// 表に行を追加するほかの方法を探します。
}

})