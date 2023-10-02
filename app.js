Vue.createApp({
    data(){
        return{
            numberOfDays:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            date :  new Date(Date()),
            month:null,
            months:["January", "February", "March","April", "May", "June", "July", "August", "September", "October","November", "December"],
            days:["Sun", "Mon", "Tue", "Wed", "Thu","Fri", "Sat"],
            currentMonth: null,
            currentYear: null,
            firstDay: null,
            currentDay: null,

        }
    },
    methods:{
        getMonthAndYear(){
            
            this.currentDay  = this.date.getDay();
            this.currentMonth= this.date.getMonth();
            this.month = this.date.getMonth();
            this.currentYear= this.date.getFullYear();
            document.querySelector(".calendar-month-year").textContent = `${this.months[this.currentMonth]} ${this.currentYear}`;
        },
        nextMonthYear(){
            if(this.currentMonth<11){
                this.currentMonth++
            }else{
                this.currentMonth = 0;
                this.currentYear++;
            }
            document.querySelector(".calendar-month-year").textContent = `${this.months[this.currentMonth]} ${this.currentYear}`;
        },
        prevMonthYear(){
            if(this.currentMonth>0){
                this.currentMonth--;
            }else{
                this.currentMonth = 11;
                this.currentYear--;
            }
            document.querySelector(".calendar-month-year").textContent = `${this.months[this.currentMonth]} ${this.currentYear}`;
        },
        getFirstDayOfMonth(){
            let firstDayOfMonth = new Date(`${this.currentMonth+1} 1 ${this.currentYear}`)
            firstDayOfMonth = firstDayOfMonth.getDay();
            this.firstDayOfMonth = firstDayOfMonth;
            return firstDayOfMonth
        },
        insertingEmptyDiv(number){
            const parentElement=  document.querySelector(".daysOfTheMonth");
                const childElement= parentElement.querySelector(".empty");
                if(childElement){
                    document.querySelectorAll(".empty").forEach(elem=>{
                        elem.remove();
                    })
                }
            for(let i=0; i<number; i++){
                let new1 = document.createElement("div")
                new1.classList.add("empty");
                let child = document.querySelector(".daysOfTheMonth a")
                parentElement.insertBefore(new1,child)
            }
        },
        checkingNumberOfDaysInTheMonth(){
            
            document.querySelectorAll(".number").forEach(num=>{
                num.style.display = "block";
                if(this.currentMonth == 8 || this.currentMonth == 3 || this.currentMonth == 5 || this.currentMonth == 10){
                    if(num.textContent == 31){
                        num.style.display = "none";
                    }
                }
                if(this.currentMonth == 1 ){
                    if(this.currentYear % 4 == 0){
                        if(this.currentYear % 100 == 0){
                            if(this.currentYear % 400){
                                if(num.textContent == 30 || num.textContent == 31){
                                    num.style.display = "none";
                                }
                            }else{
                                if(num.textContent == 29 || num.textContent == 30 || num.textContent == 31){
                                    num.style.display = "none";
                                }
                            }
                        }else{
                            if(num.textContent == 30 || num.textContent == 31){
                                num.style.display = "none";
                            }
                        }

                    }else{
                        if(num.textContent == 29 || num.textContent == 30 || num.textContent == 31){
                            num.style.display = "none";
                        }
                    }
                }
            })
        }
    },
    mounted(){
        this.getMonthAndYear();
        this.insertingEmptyDiv(this.getFirstDayOfMonth());
        this.checkingNumberOfDaysInTheMonth();
    }
})

.mount("#app")