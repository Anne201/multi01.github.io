//對對碰題庫

//遊戲標題
title = '九九乘法對對碰(8)';

//字體名稱
font = '標楷體';

//是否顯示格子的編號(true, false)
showNumber = false;

//編號大小(相對於格子的比例)
numberLabelFontSizeScale = 0.4;

//答對時加多少分
scoreAdd = 100;

//答錯時扣多少分
scoreMinus = 150;

//是否覆蓋牌(true, false)
memoryMode = false;

//等幾秒才蓋牌
momorySeconds = 10;

//牌被選取時的邊框顏色
card_selected_border_color = '#ff0000';

//文字的顏色
card_text_color = '#ff6600';

//蓋牌時背面的圖案或文字
card_back = 'assets/smile.png';

//蓋牌時文字的顏色
card_back_color = '#006666';

//蓋牌時的背景顏色
card_back_text_color = '#ffffff';

//題庫欄位分隔符號
fields_seperator = ',';

//
// 題庫
//
//每對引號中的即是一個問題的設定
//每一個項目中以「半形逗號」當欄位分隔符號(參考 fields_seperator 設定)
//
//  目前支援的素材有：文字、圖片
//
cards = new Array(
//------------------------------------下一行開始增加題目
  '7x1,7'
, '7x2,14'
, '7x3,21'
, '7x4,28'
, '7x5,35'
, '7x6,42'
, '7x7,49'
, '7x8,56'
, '7x9,63'
, '7x10,70'
, '9x1,9'
, '9x2,18'
, '9x3,27'
, '9x4,36'
, '9x5,45'
, '9x6,54'
, '9x7,63'
, '9x8,72'
, '9x9,81'
, '9x10,90'
//------------------------------------題庫結束,以下請勿修改
);

