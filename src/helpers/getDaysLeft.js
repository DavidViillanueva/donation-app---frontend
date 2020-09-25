const getDaysLeft = ( FinishDate ) => {
    const date = FinishDate;
    const actualDate = new Date();
    
    if(actualDate.getDate() <= date.getDate()){
        //puede ser que el dia actual sea menor que el dia esperado 
        //dia esperado 29 y actual 24 por ejemplo
        return date.getDate()-actualDate.getDate();
    }else{
        //caso contrario puede ser que el dia actual sea mayor que el dia esperado
        //dia esperado 3 y actual 29
        //en este caso queda determinar el mes para decir la diferencia 
        const actualMonth = actualDate.getMonth();

        //30 dias: Abril, junio, septiembre y noviembre.
        const thirty = [3,5,8,10]
        //31 dias: Enero, marzo, mayo, julio, agosto, octubre y diciembre.
        const thirtyOne = [0,2,4,6,7,9,11]
        //28 dias: febrero
        //vamos a compensar la falta de dias determinando el mes
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