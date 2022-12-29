半透明黑色遮罩效果做法:設置一個div，長寬為全屏，rgba(0,0,0,0.5)，給他一個boolean值初始為false不渲染，等點擊某個按鍵後再把boolean值改為true(取反)

側邊選單欄:運用label+<input type='checkbox'/>
  首先:把側邊選單欄tranform:translate  到屏幕外
  再來:把input標籤寫在側邊欄div上，形成兄弟關係
  最後:當input被勾選時(偽類:checked)，使用兄弟選取器+ 選到下方側邊欄div，再把它tranform:translate回屏幕內
