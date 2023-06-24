# 要件

## 表示

- ToDo リストが表示される
- ToDo を追加する input が表示される
- ToDo ごとに CheckBox が表示される
- ToDo ごとに編集ボタンが表示される
- ToDo リストごとに削除ボタンが表示される
- 完了した ToDo を表示させるボタンが表示される

## 挙動

- ToDo を input に入力し確定すると、ToDo リストに追加される
  - Enter キーで追加される
  - 追加ボタンで追加される
- input タグが空白の場合、ToDo リストに追加されない
  - Enter キーを押下しても追加されない
  - 追加ボタンは非活性になっている
- チェックボックスに Check を入れると非表示になる
  - キーボードでも操作可能にする
- 編集ボタンを押下すると、ToDo の内容が変更できる
- 削除ボタンを押下すると Alert が表示される
  - キーボードでも操作可能にする
  - 削除するの場合、ToDo が削除される
  - キャンセルの場合、Alert が閉じる
- 完了した ToDo を表示させるボタンを押下すると完了済みの ToDo が表示される
  - 弱いカラーで表示される
  - チェックボックスのチェックを外すことで、未完了の状態に戻せる

## 仕様

- ToDo リストは localStorage に保存される
- アクセシビリティの担保
  - 詳細を決める...
