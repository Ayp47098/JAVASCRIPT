function CalculateArea(length,width){
    if (length<0){
        throw new RangeError("Length should be positive")
    }
    if (width<=0){
        throw new RangeError("Width should be positive number")
    }
    const area=length*width
    console.log(area);
    
}
CalculateArea(2,3)
CalculateArea(-2,-9)
CalculateArea(0,-9)