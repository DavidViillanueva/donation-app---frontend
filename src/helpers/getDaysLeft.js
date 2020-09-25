//author: Villanueva David
//Date: 24/09/2020
//This function will return the countdown in days starting the date
//Param:
//  FinishDate -> object of type Date with the value (yyyy,mm,dd) of the ending of counter
//Example of use: 
//  const daysLeft = getDaysLeft( new Date (2020,12,25) ); (days before christmas)


const getDaysLeft = ( FinishDate ) => {
    const date = FinishDate;
    const actualDate = new Date();
    
    if(actualDate.getDate() <= date.getDate()){
        //It may be that the current day is less than the expected day
        //Expected day 29 and current 24 for example
        return date.getDate()-actualDate.getDate();
    }else{
        //Otherwise it may be that the current day is greater than the expected day
        //expected day 3 and current 29
        //in this case it remains to determine the month to tell the difference
        const actualMonth = actualDate.getMonth();

        //30 days: Abril, junio, septiembre y noviembre.
        const thirty = [3,5,8,10]
        //31 days: Enero, marzo, mayo, julio, agosto, octubre y diciembre.
        const thirtyOne = [0,2,4,6,7,9,11]
        //28 days: febrero
        //We are going to compensate for the lack of days by determining the month
        if( thirty.includes(actualMonth) ){
            return( (date.getDate()+30)-actualDate.getDate());
        }else{
            if( thirtyOne.includes(actualMonth) ){
                return( (date.getDate()+31)-actualDate.getDate());
            }else{
                return( (date.getDate()+28)-actualDate.getDate())
            }
        }

    }
    
}

export default getDaysLeft;