/**
 * Created by shubhang on 2/7/17.
 */

let excludeProps = function(...props) {
  return function(sourceObject) {
    let targetObject = Object.assign({}, sourceObject);
    let propsToExclude = [...props];
    propsToExclude.forEach(prop => {
      if (targetObject.hasOwnProperty(prop)) delete targetObject[prop];
    });
    return targetObject;
  };
};

export default excludeProps;
