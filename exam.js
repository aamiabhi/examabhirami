//[id , brand , model , type , pricePerDay, available]
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan',45 ,12]
];
//print all car brands
console.log(`car brands`);
carBooking.forEach(cars => {
    console.log(cars[1]); 
});
//print total number of cars available
console.log(`total number of cars available`);
total=carBooking.map(avail=>avail[5]).reduce((a1,a2)=>a1+a2)
console.log(total);
//print sedan car details
console.log(`sedan car details`);
carBooking.filter(name=>name[3]=='Sedan').forEach(dtls=>console.log(dtls))
//print cars with price per day greater than 60
console.log(`cars with price per day greater than 60`);
carBooking.filter(price=>price[4]>60).forEach(prices=>console.log(prices[1]))
//print details of jeep Wrangler
console.log(`details of jeep Wrangler`);
carBooking.filter(detls=>detls[1]=='Jeep' && detls[2]=='Wrangler').forEach(dtals=>console.log(dtals))
//sort cars based on the descending order of the price per day
console.log(`..................`);
carBooking.sort((a,b)=>b[4]-a[4]).forEach(cars=>console.log(cars[1]))
//sort cars based on ascending order of the available cars
console.log(`.................`);
carBooking.sort((a,b)=>a[5]-b[5]).forEach(avail=>console.log(avail[1]))
//find the car with the most available cars
console.log(`car with the most available cars`);
mostavailable=carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(mostavailable[1]);
//calculate the revenue if all the cars are rented for a day
console.log(`calculate the revenue if all the cars are rented for a day`);
totals=carBooking.map(availbl=>availbl[4]).reduce((a1,a2)=>a1+a2)
console.log(totals);
//count the number of sedan cars
numberOfSedanCars = carBooking.filter(car => car[3] === 'Sedan').length;

console.log(`Number of Sedan Cars: ${numberOfSedanCars}`);
//print all unique car brands
console.log(`car brands`);
carBooking.forEach(cars => {
    console.log(cars[1]); 
});
//find the total number of available cars for all type
console.log(`total number of cars available`);
total=carBooking.map(avail=>avail[5]).reduce((a1,a2)=>a1+a2)
console.log(total);
//find the cars with the least availability
console.log(`cars with the least availability`);
least=carBooking.reduce((a1,a2)=>a1[5]>a2[5]?a1:a2)
console.log(least[1]);