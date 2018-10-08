// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName; //by default enumerable
const createNotEnumerableProperty = (propertyName) => Symbol(propertyName); //Symbol is non-enumarable,property is anonymous
const createProtoMagicObject = function()  {
    var obj = new Function(); //creating Function because function is object but with typeof Function
    obj.prototype = Function.prototype;
    return obj;
};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;