var intersect = require('./')
var test = require('tape')

test('test whether a ray intersects with a sphere', function (t) {
  var out = intersect([], [0, 0, 4], [0, 0, -1], [0, 0, 0], 1)
  t.deepEqual(out, [0, 0, 1])

  out = intersect([], [0, 0, 4], [0, 0, -1], [0, 0, 0], 7)
  t.deepEqual(out, [0, 0, 7])

  out = intersect([], [0, 0, -4], [0, 0, -1], [0, 0, 0], 7)
  t.deepEqual(out, null)

  var orig = [2, 1, 5]
  var orig2 = orig.slice()
  out = intersect(orig, [1, 0, 1], [0, 0, -1], [0, 0, 0], 0.5)
  t.deepEqual(out, null)
  t.deepEqual(orig, orig2, 'does not mutate out param on no collision')

  out = intersect([], [1, 0, 1], [0, 0, -1], [0, 0, 0], 1)
  t.deepEqual(out, [1, 0, 0])

  t.end()
})
