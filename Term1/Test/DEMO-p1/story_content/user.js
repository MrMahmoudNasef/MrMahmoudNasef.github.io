function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5x0uy7P4Yj0":
        Script1();
        break;
      case "61WRNBcUn6e":
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

