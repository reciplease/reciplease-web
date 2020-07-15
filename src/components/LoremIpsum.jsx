import React from "react";

function repeatParagraph(repetitions, main) {
  const repeatedMain = [];
  for (let i = 0; i < repetitions; ++i) {
    repeatedMain.push(<p>{main}</p>)
  }
  return repeatedMain;
}

export default ({paragraphs = 2}) => {
  // noinspection SpellCheckingInspection
  const start = `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.`;
  // noinspection SpellCheckingInspection
  const main = `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum
      tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas
      semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien
      ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
      fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec
      non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque
      egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
      porttitor, facilisis luctus, metus.`;

  const repetitions = paragraphs - 1;

  const repeatedMain = repeatParagraph(repetitions, main);

  return <>
    <p>{start}</p>
    {repeatedMain}
  </>;
}
