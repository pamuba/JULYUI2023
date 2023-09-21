document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
           chart:{
            // type:"bar",
            // type:"column"
            // type:"line"
            // type:"scatter"
            // type:"area"
            type:"areaspline",
            zoomType:"xy"
           },
        //    colors:['#1c110a', '#e4d6a7', '#e9b44c', '#9b2915', '#50a2a7'],
           credits:{
            // enabled:false
            text:"Marlabs Pvt Ltd",
            href:"http://www.marlabs.com/",
            position:{
                align:"left",
                x:10
            },
            style:{
                color:'red',
                fontSize:"13px"
            }
           },
        //    tooltip:{
        //     animation:false,
        //     backgroundColor:'#333333',
        //     borderColor:'red',
        //     borderWidth:3,
        //     borderRadius:5,
        //     followPointer:false,
        //     style:{
        //         color:'#ffffff'
        //     }

        //    },
           tooltip:{
            backgroundColor:'#333333',
            borderColor:'red',
            borderWidth:3,
            borderRadius:5,
            style:{
                color:'#ffffff'
            },
           formatter(){
            //  return `<b>X value</b> - ${this.x}. <em>Y value<em> - ${this.y}`
            let s = `<b>X value</b> - ${this.x}`;
            this.points.forEach(function(point){
                s += `<br>Y is: ${point.y}`;
            });
            return s;
           },
           shared:true

           },
           title:{
            text:"FRUITS CHART"
           },
           yAxis:{
             //alternateGridColor:"#b7cff7",
             title:{
                text: "Fruits Eaten"
             }
           },
           xAxis:{

            //    alternateGridColor:"#b7cff7",
               categories:["Apples", "Oranges", "Mangoes", "Laptops", "Cars", "Charts", "Phones"]
            },  
            series:[
                {
                    negativeColor:'red',
                    name:'John',
                    data:[1,100,3,2, -40,3,1,2,3]
                },
                {
                    name:'Jill',
                    data:[2,4,8, 150, 80, 50, 10, 5,1]
                },
                {
                    name:'Billy',
                    data:[2,4,8, 4, 80, 50, 80, 5,1]
                },
                {
                    name:'Jean',
                    data:[111,4,8, 15, 80, 50, 10, 5,1]
                },
                {
                    name:'King',
                    data:[2,4,130, 15, 20, 50, 80, 5,1]
                }
            ]
           
    })
})

//Hi
//D3
//Grunt