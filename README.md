# JsTypeConversion
文字列と数値の型変換

## 処理
文字列や数値の型変換をします。

## コード
```
(function() {
    'use strict'

    console.log("** ケース1 **");
    var num1 = 3.15;
    console.log(num1);
    console.log(Math.floor(num1));
    console.log();

    console.log("** ケース２ **");
    var num2 = 5;
    console.log(num2);
    console.log(num2.toFixed(1));
    console.log();

    console.log("** ケース３ **");
    var text = "123";
    console.log(text);
    console.log(Number(text) * 100);
    console.log(Number(text).toFixed(1));

})();
```

## 出力結果  
```
** ケース1 **
3.15
3

** ケース２ **
5
5.0

** ケース３ **
123
12300
123.0
```
  
## 開発環境
| 開発ツール |  |
|:-|:-|
| OS | Windows10 |
| 仮想化ソフト | Oracle VM VirtualBox 5.2 |
| 構築ソフト | Vagrant 2.0.2 |
| 仮想化上OS | CentOS 6.9 |
| SSHクライアント | PuTTY 0.6.8 |
| FTPクライアント | Cyberduck 6.3.5 |
| エディタ | Atom 1.24.0 |
| 開発言語 | Java Script |
| Js環境 | Node.js 8.10.0 |
