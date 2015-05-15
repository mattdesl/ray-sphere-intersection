var squaredDist = require('gl-vec3/squaredDistance')
var dot = require('gl-vec3/dot')
var sub = require('gl-vec3/subtract')
var scaleAndAdd = require('gl-vec3/scaleAndAdd')
var scale = require('gl-vec3/scale')
var add = require('gl-vec3/add')

var tmp = [0, 0, 0]

module.exports = intersectRaySphere
function intersectRaySphere (out, origin, direction, center, radius) {
  sub(tmp, center, origin)
  var len = dot(direction, tmp)
  if (len < 0) { // sphere is behind ray
    return null
  }

  scaleAndAdd(tmp, origin, direction, len)
  var dSq = squaredDist(center, tmp)
  var rSq = radius * radius
  if (dSq > rSq) {
    return null
  }

  scale(out, direction, len - Math.sqrt(rSq - dSq))
  return add(out, out, origin)
}
