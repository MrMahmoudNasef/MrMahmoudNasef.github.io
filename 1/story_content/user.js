function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6eFhCorIZg8":
        Script1();
        break;
      case "5mitufMs3Ge":
        Script2();
        break;
  }
}

function Script1()
{
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen(); 
    }
  }
}

function Script2()
{
  window.print();
}

