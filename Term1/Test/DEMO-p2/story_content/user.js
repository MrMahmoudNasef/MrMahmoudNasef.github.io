function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MCv8p99wql":
        Script1();
        break;
      case "6CpNJj1u0MG":
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

