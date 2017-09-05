/**
 * Created by jiangzg on 2017/7/29.
 */
/**
 * 拓展对象
 */
function extend(target) {
  var sources = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < sources.length; i += 1) {
    var source = sources[i];
    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        if( Object.prototype.toString.call(source[key])==='[object Object]' ){
          target[key] = extend(target[key]||{},source[key]);
        }else{
          target[key] = source[key];
        }
      }
    }
  }

  return target;
};

function trim(string) {
  return String(string).replace(/\s+/g,' ').replace(/^\s+|\s+$/g,'');
}

module.exports = {
  extend:extend,
  trim:trim
};


