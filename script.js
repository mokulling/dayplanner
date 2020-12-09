var currentDay = $('#currentDay')
var month = moment().month()+1 ;
var day = moment().date()
var hour = moment().format('h')
var description = $('.description')
var hourRow = $('.hour')
var saveBtn = $('.saveBtn')
var input = $('.col-10')
var boxes = [$('.row-1'), $('.row-2'),$('.row-3'),$('.row-4'),$('row-5'),$('#row-6') ,$('.row-7'),$('.row-8'),$('.row-9'), ]
var spans = $('<span>')
var hours = [$('#9'), $('#10'), $('#11'), $('#12'), $('#13'),$('#14'),$('#15'),$('#16'),$('#17')]
var times = $('.times')


//for loop to change class

console.log(hour)
for (let i = 0; i < hours.length; i++) {
    var currentWork = hours[i];
    var workValue = currentWork[0].textContent
    console.log(workValue)
    if (workValue == hour) {
        console.log('equal')
        input.addClass('present')
      
    } else if (workValue > hour) {
        console.log('greater')
        input.addClass('past')
        
    } else {
        console.log('less than ')
        input.addClass('future')
        
    }
    
}


//if statement on past, present future,
//if past change class to past
//if present change class to present
//if pfuture change class to future 

//click listener to add in event

description.on('click', function (event){
    var thisSection = event.target
    console.log(thisSection)
    //thisSection.append(input.text)
    
})
//click listener to save to local storage
saveBtn.on('click', function(event) {
    
    console.log(event.target)
    localStorage.setItem('items', input.val())
    
    
})

console.log(input.val())
//Insert current day into p id tag

 

//console.log(month)
//console.log(day)
//console.log(hour)


//Get current date
function dateGetter () {
    currentDay.text(moment().format('[Today is] MMM Do YYYY'))
}

dateGetter()

//if statement on selecting current hour block


