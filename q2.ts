// Exercise 2: Write a program that takes input and calculates the volume of a cube.

 function VolumeofCube(Length: number): number {
    return Length * Length * Length;
  }

// Example
  let Length = 10;
  let Volumeofcube: number = VolumeofCube(Length)

  console.log(` Volume of the cube is: ${Volumeofcube}`);