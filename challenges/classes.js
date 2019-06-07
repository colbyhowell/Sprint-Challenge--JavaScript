class CuboidMaker {
    constructor(attr) {
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    volume() {
        return (this.length * this.width * this.height);
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker({
    width: 5,
    length: 4,
    height: 5
  })

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes

class CubeMaker extends CuboidMaker{
    constructor(attr){
        super(attr)
        this.side = attr.side;
    }
    cubeVolume(){
        return Math.pow(this.side, 3)
    }
    cubeSurface(){
        var sides = Math.pow(this.side, 2)
        return sides * 6
    }
}

const cube = new CubeMaker({
    side: 5
})

console.log(cube.cubeVolume());
console.log(cube.cubeSurface());