function runner(Run, dataArray, onError, onProgress, onResult, onFinished){

  var ts = Date.now();

  for (var i = 0; i < dataArray.length; i++) {
    var output = Run(dataArray[i]);
    onResult(output);

    var progress = (i+1) / dataArray.length;
    onProgress(progress);

  }

  var tt = Date.now() - ts;

  onFinished(tt, tt);

}
