var number = "31
";
var len = number.length;
var arr = [];
var _factorial = 1;

function factorial (num) {
  if (num < 0) {
    return -1;
  }
  if (num == 0 || num == 1) {
    return _factorial;
  }

    _factorial *= num;
    factorial (num - 1);

}

factorial (len);

function prime_number (num) {
  if (num == 0 || num == 1)
      return false;
  for (let ix = 2; ix <= num/2 ; ++ix) {
    if (num % ix == 0)
       return false;
  }
  return true;
}

for (let ix = 0; ix < len; ++ix) {
  arr[ix] = number[ix];
}

function permutable_prime (arr, _factorial) {
  var _len = arr.length;
 for (let ix = 0; ix < _len; ++ix) {
   if (arr[ix] % 2 == 0) {
     console.log("Number is not permutable prime!");
     return;
   }
 }
  var last = _len - 1;
  var prelast = _len - 2;
  var cur;
 for (let ix = 0; ix < _factorial; ++ix) {
   if (prelast == -1) {
     var last =_len - 1;
     var prelast = _len - 2;
   }
    cur = arr[prelast];
    arr[prelast] = arr[last];
    arr[last] = cur;
    var intostring = arr.join("");
    var _number = Number(intostring);
    if (! prime_number(_number)) {
       console.log("The number is not permutable prime!");
       return;
    }
    --last;
    --prelast;
  }
  console.log("The number is permutable Prime");
}

permutable_prime (arr, _factorial);

