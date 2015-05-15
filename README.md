# ray-sphere-intersection

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Test whether a ray intersects with a sphere.

```js
var intersect = require('ray-sphere-intersection')

var origin = [0, 0, 4], 
    direction = [0, 0, -1], 
    center = [0, 0, 0], 
    radius = 1

var hit = intersect([], origin, direction, center, radius)

if (hit) {
  console.log(hit) // [0, 0, 1]
}
```

Adapted from [LibGDX](https://github.com/libgdx/libgdx/blob/9eba80c6694160c743e43d4c3a5d60a5bad06f30/gdx/src/com/badlogic/gdx/math/Intersector.java). PRs for optimizations/etc welcome.

## Usage

[![NPM](https://nodei.co/npm/ray-sphere-intersection.png)](https://www.npmjs.com/package/ray-sphere-intersection)

#### `out = intersect(out, origin, direction, center, radius)`

Determines if the 3D ray `(origin, direction)` intersects with the 3D sphere `(center, radius)`. 

If no intersection occurs, returns `null`. Otherwise, the intersection point is stored in `out` and then returned.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/ray-sphere-intersection/blob/master/LICENSE.md) for details.
