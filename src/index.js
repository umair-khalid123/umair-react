class Car {
  constructor(Cars) {
    this.brand = Cars;
    } 
    present(){
        return 'I have a' + this.brand;
    }
}
const mycar = new Car("Ford");
document.write(mycar.present);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
