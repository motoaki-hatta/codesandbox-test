import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  inComplateList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

const inComplateList = (text) => {
  // divの作成
  const div = document.createElement("div");

  // divにclass名を追加
  div.className = "list-row";

  // li要素を作成
  const li = document.createElement("li");
  // li内に入力値をセット
  li.innerText = text;

  const compButton = document.createElement("button");
  compButton.innerText = "完了";
  compButton.addEventListener("click", () => {
    deleteFromIncompleteList(compButton.parentNode);
    // .list-rowの要素全体を取得
    const addTarget = compButton.parentNode;
    // 最初の要素がli要素なのでそれを取得
    const text = addTarget.firstElementChild.innerText;
    // div要素を初期化する
    addTarget.textContent = null;

    //　値を「完了したTODO」用に再生成する
    const li = document.createElement("li");
    // li内に入力値をセット
    li.innerText = text;
    // ボタン要素
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    //　元に戻す処理
    returnButton.addEventListener("click", () => {
      const deleteTarget = returnButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);
      const text = returnButton.parentNode.firstElementChild.innerText;

      inComplateList(text);
    });

    // 追加
    addTarget.appendChild(li);
    addTarget.appendChild(returnButton);

    // 完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });

  const delButton = document.createElement("button");
  delButton.innerText = "削除";
  delButton.addEventListener("click", () => {
    deleteFromIncompleteList(delButton.parentNode);
  });

  // divの子要素として追加する
  div.appendChild(li);
  div.appendChild(compButton);
  div.appendChild(delButton);

  document.getElementById("incomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
