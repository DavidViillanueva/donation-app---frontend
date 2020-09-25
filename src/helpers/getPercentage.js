const getPercentage = ( totalAmount = 100, actualAmount = 0 ) => {
    return (actualAmount/totalAmount)*100;
}

export default getPercentage;